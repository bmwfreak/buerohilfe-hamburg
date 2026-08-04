/* Einwilligung für Google Analytics 4.
   Ohne aktive Zustimmung wird nichts von Google geladen und keine Verbindung
   zu Google-Servern aufgebaut. Die Wahl liegt in localStorage, nicht in einem
   Cookie, damit vor der Entscheidung gar nichts gespeichert wird. */
(function () {
  'use strict';

  var GA_ID       = 'G-1KDB1WH94L';
  var KEY         = 'sa-consent';          /* 'granted' | 'denied' */
  var KEY_VERSION = 'sa-consent-version';
  var VERSION     = '1';                   /* hochzählen, wenn sich Zweck oder Dienst ändert */

  function readChoice() {
    try {
      if (localStorage.getItem(KEY_VERSION) !== VERSION) return null;
      return localStorage.getItem(KEY);
    } catch (e) {
      return null; /* localStorage gesperrt: wie "noch nicht entschieden" behandeln */
    }
  }

  function saveChoice(value) {
    try {
      localStorage.setItem(KEY, value);
      localStorage.setItem(KEY_VERSION, VERSION);
    } catch (e) {}
  }

  function loadAnalytics() {
    if (window.__saAnalyticsLoaded) return;
    window.__saAnalyticsLoaded = true;

    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
  }

  /* Beim Widerruf die von Google gesetzten Cookies entfernen. Ein Reload holt
     sie sonst nicht zurück, aber die alten blieben bis zum Ablauf liegen. */
  function clearAnalyticsCookies() {
    var host = location.hostname;
    var domains = ['', host, '.' + host, '.' + host.split('.').slice(-2).join('.')];
    document.cookie.split(';').forEach(function (entry) {
      var name = entry.split('=')[0].trim();
      if (name.indexOf('_ga') !== 0 && name.indexOf('_gid') !== 0) return;
      domains.forEach(function (d) {
        document.cookie = name + '=; Max-Age=0; path=/' + (d ? '; domain=' + d : '');
      });
    });
  }

  function injectStyles() {
    if (document.getElementById('sa-consent-style')) return;
    var css = document.createElement('style');
    css.id = 'sa-consent-style';
    css.textContent = [
      '.sa-consent{position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;',
      'max-width:640px;margin:0 auto;background:#fff;color:#0f172a;',
      'border:1px solid #e2e8f0;border-radius:12px;padding:20px 22px;',
      'box-shadow:0 20px 48px -12px rgba(15,23,42,.22);',
      'font-family:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;',
      'font-size:15px;line-height:1.55}',
      '.sa-consent p{margin:0 0 14px}',
      '.sa-consent a{color:#2563eb}',
      '.sa-consent-actions{display:flex;gap:10px;flex-wrap:wrap}',
      '.sa-consent button{font:inherit;font-weight:600;cursor:pointer;',
      'border-radius:8px;padding:10px 18px;border:1px solid #cbd5e1;',
      'background:#fff;color:#0f172a;flex:1 1 auto;min-width:140px}',
      '.sa-consent button:hover{background:#f8fafc}',
      '.sa-consent button:focus-visible{outline:2px solid #2563eb;outline-offset:2px}',
      '@media (max-width:480px){.sa-consent{padding:18px}}',
      '.sa-widerruf-button{font:inherit;font-weight:600;cursor:pointer;border-radius:8px;',
      'padding:10px 18px;border:1px solid #cbd5e1;background:#fff;color:#0f172a}',
      '.sa-widerruf-button:hover{background:#f1f5f9}',
      '.sa-widerruf-button:focus-visible{outline:2px solid #2563eb;outline-offset:2px}',
      '.sa-status{margin-left:12px;font-size:15px;color:#64748b}'
    ].join('');
    document.head.appendChild(css);
  }

  function showBanner() {
    injectStyles();

    var box = document.createElement('div');
    box.className = 'sa-consent';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-live', 'polite');
    box.setAttribute('aria-label', 'Hinweis zur Statistik');

    var text = document.createElement('p');
    text.innerHTML = 'Ich würde gern mit Google Analytics messen, wie diese Seite genutzt wird. ' +
      'Dabei werden Cookies gesetzt und Daten an Google übertragen. Ohne Ihre Zustimmung passiert das nicht. ' +
      'Mehr dazu in der <a href="/datenschutz.html">Datenschutzerklärung</a>.';

    var actions = document.createElement('div');
    actions.className = 'sa-consent-actions';

    function makeButton(label, choice) {
      var b = document.createElement('button');
      b.type = 'button';
      b.textContent = label;
      b.addEventListener('click', function () {
        saveChoice(choice);
        if (choice === 'granted') loadAnalytics(); else clearAnalyticsCookies();
        box.remove();
      });
      return b;
    }

    /* Ablehnen steht zuerst und sieht identisch aus. Beide Wege müssen
       gleich leicht sein, sonst ist die Einwilligung nicht freiwillig. */
    actions.appendChild(makeButton('Ablehnen', 'denied'));
    actions.appendChild(makeButton('Einverstanden', 'granted'));

    box.appendChild(text);
    box.appendChild(actions);
    document.body.appendChild(box);
  }

  /* Button in der Datenschutzerklärung. Setzt die Wahl zurück und zeigt das
     Banner erneut, damit sowohl Widerruf als auch nachträgliche Zustimmung
     über denselben Weg gehen. */
  function wireWiderrufButton() {
    var button = document.getElementById('sa-widerruf');
    var status = document.getElementById('sa-status');
    if (!button) return;

    function beschriftung() {
      if (!status) return;
      var c = readChoice();
      if (c === 'granted')     status.textContent = 'Aktuell: Sie haben zugestimmt.';
      else if (c === 'denied') status.textContent = 'Aktuell: Sie haben abgelehnt. Google Analytics wird nicht geladen.';
      else                     status.textContent = 'Aktuell: noch keine Auswahl getroffen.';
    }

    button.addEventListener('click', function () {
      try {
        localStorage.removeItem(KEY);
        localStorage.removeItem(KEY_VERSION);
      } catch (e) {}
      clearAnalyticsCookies();
      beschriftung();
      var offen = document.querySelector('.sa-consent');
      if (offen) offen.remove();
      showBanner();
    });

    beschriftung();
  }

  var choice = readChoice();
  if (choice === 'granted') loadAnalytics();
  else if (choice !== 'denied') showBanner();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wireWiderrufButton);
  } else {
    wireWiderrufButton();
  }
})();
