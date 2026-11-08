(function () {
  var qs = document.querySelectorAll('.cq');
  var res = document.getElementById('check-result');
  function msg(n) {
    if (n === 0) return ['Noch nichts angehakt', 'Haken Sie an, was auf Ihre Aufgabe zutrifft.'];
    if (n >= 5) return ['Guter Kandidat für einen Pilot', n + ' von 6 Punkten treffen zu. Das ist eine Aufgabe, bei der sich ein Pilot meist lohnt.'];
    if (n >= 3) return ['Möglich, vorher klären', n + ' von 6 Punkten treffen zu. Klären Sie zuerst die offenen Punkte, etwa wer prüft oder ob die Daten digital vorliegen.'];
    return ['Eher noch nicht', 'Nur ' + n + ' von 6 Punkten treffen zu. Suchen Sie eine Aufgabe, die öfter vorkommt und immer gleich abläuft.'];
  }
  function check() {
    var n = 0;
    qs.forEach(function (q) { if (q.checked) n++; });
    var m = msg(n);
    res.innerHTML = '<b>' + m[0] + '</b>' + m[1];
  }
  qs.forEach(function (q) { q.addEventListener('change', check); });
  var a = document.getElementById('c-min'), b = document.getElementById('c-n'), c = document.getElementById('c-eur'), out = document.getElementById('calc-out');
  var fmt = new Intl.NumberFormat('de-DE', { maximumFractionDigits: 0 });
  function calc() {
    var hrs = (Number(a.value) || 0) * (Number(b.value) || 0) / 60;
    var month = hrs * (Number(c.value) || 0);
    out.innerHTML = 'Etwa <b>' + fmt.format(month) + ' € pro Monat</b> (' + fmt.format(month * 12) + ' € im Jahr) bei ' + fmt.format(hrs) + ' Arbeitsstunden im Monat.';
  }
  [a, b, c].forEach(function (i) { i.addEventListener('input', calc); });
  calc();
  check();
})();
