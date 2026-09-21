// Der Play-Kreis ist ins Vorschaubild gemalt. Chrome startet ein Video mit
// Steuerleiste nicht per Klick ins Bild, daher liegt ein echter Knopf darueber.
const video = document.querySelector('#demo video');
const knopf = document.querySelector('#demo .demo-play');
if (video && knopf) {
  knopf.addEventListener('click', () => video.play());
  video.addEventListener('play', () => { knopf.hidden = true; });
}
