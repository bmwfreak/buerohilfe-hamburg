(function () {
  var dlg = document.getElementById('lightbox');
  if (!dlg || typeof dlg.showModal !== 'function') return;
  var img = dlg.querySelector('img');
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('.shot-frame a');
    if (!a) return;
    e.preventDefault();
    var thumb = a.querySelector('img');
    img.src = a.getAttribute('href');
    img.alt = thumb ? thumb.alt : '';
    dlg.showModal();
  });
  dlg.querySelector('.lb-close').addEventListener('click', function () { dlg.close(); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg || e.target === img) dlg.close(); });
})();
