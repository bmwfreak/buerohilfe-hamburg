# Bauplan: 4 Reels "Lange gesessen, dann automatisch" (H1 bis H4)

Stand 22.10.2026, Fassung 2 (korrigiert). Dieses Dokument ist eigenständig. Ein KI-Chat mit Rechenumgebung (Cloud) soll damit vier fertige Reels bauen, ohne Rückfragen und ohne Zugriff auf das Repo von Systemic Automation. Ganz unten stehen die fertigen Prompts zum Einfügen.

## 0. Kurzfassung für den ausführenden Chat

- Auftrag: 4 vertikale Kurzvideos (Instagram Reels und TikTok), je 9 Sekunden, 1080x1920, 60 fps, mit HyperFrames gebaut (HTML + GSAP, gerendert zu MP4).
- Idee aller vier: Erst sieht man, woran jemand im Büro lange sitzt (Hook, 0 bis 3 s). Dann erledigt eine Automatisierung das in Sekunden (3 bis 6,5 s). Am Ende prüft und gibt der Mensch frei, dann der Abschluss mit Marke und Aufruf (6,5 bis 9 s).
- Nicht hochladen, nichts veröffentlichen. Ergebnis sind Dateien: MP4s, Kontaktbögen, Bildunterschriften, Review-Protokoll.
- Qualitätsschleife: Jedes Reel durchläuft eine Review mit einem zweiten Modell (Codex oder vergleichbar) in der Rolle eines Handwerksinhabers. Höchstens 3 Runden.

### 0.1 Freigabe der Themen (vom Inhaber vor dem Weitergeben auszufüllen)

Ein Reel darf nur gebaut werden, wenn die gezeigte Funktion beim Inhaber wirklich läuft (Regel 2.1).

| Reel | Gezeigte Funktion | Läuft wirklich? |
|---|---|---|
| H1 | Rechnungen auslesen, Liste, Freigabe, Export | ja |
| H2 | Belege erfassen, sortierte Liste, Export CSV | ja |
| H3 | Daten einmal eingeben, Liste und Angebot füllen sich | ja (vom Inhaber bestätigt am 22.10.2026) |
| H4 | Lieferschein und Rechnung abgleichen, Abweichung markieren | ja (vom Inhaber bestätigt am 22.10.2026) |

Für den ausführenden Chat: Steht bei einem Reel "NEIN", baue es nicht. Vermerke es im Protokoll und liefere die übrigen Reels. Ändere diese Tabelle nicht selbst.

## 1. Hintergrund

Absender: Systemic Automation, Emre Küllüoglu, Maschinenbauingenieur aus Hamburg. Analysiert und automatisiert wiederkehrende Büroarbeit für kleine Büros und Handwerksbetriebe (5 bis 20 Mitarbeitende) im Raum Hamburg.

Zielgruppe der Videos: Inhaber kleiner Betriebe (Elektro, Maler, Sanitär/Heizung, Bau, kleine Büros). Sie scrollen abends oder in der Pause. Sie haben keine Zeit für Erklärungen.

Was die Daten sagen (Metricool, 7 Reels, 08. bis 17.10.2026):

- Instagram: Reichweite 7 bis 111 Personen je Reel, durchschnittliche Sehdauer 1,5 bis 3,6 s, höchstens 24 % sehen über 3 s.
- TikTok: rund 250 Aufrufe je Reel, Sehdauer 1 bis 2 s, fast niemand bis zum Ende.
- Keine Likes, Kommentare oder Nachrichten.
- Folgerung: Die ersten 3 Sekunden entscheiden alles. Das beste Reel (G, 9 s) startete mit einem großen, sofort verständlichen Satz, ohne Logo, mit Bewegung ab Frame 1.

Was der Inhaber ausdrücklich NICHT will: Themen wie "Hast du alles abgerechnet?" oder "vergessen zu berechnen". Thema ist Zeit, die man mit Bürokram verliert, und wie die Automatisierung das abnimmt.

## 2. Feste Regeln (dürfen nicht gebrochen werden)

### 2.1 Wahrheit

- Nur zeigen, was es wirklich gibt (siehe Tabelle 0.1): Rechnungen und Belege auslesen, als Liste darstellen, prüfen, "Alle freigeben", Export als Excel oder CSV. Abgleich mit markierten Abweichungen und "Daten einmal eingeben, in mehrere Dokumente übernehmen" nur, wenn in 0.1 "ja" steht.
- Keine Buttons oder Funktionen zeigen, die etwas versenden oder buchen (z. B. "An Lieferant senden", "Buchen"). Die Anwendung bereitet vor, der Mensch entscheidet.
- Verboten im Bild und im Text: "KI", "künstliche Intelligenz", Trefferquoten oder Prozentangaben zur Erkennung, "DATEV" oder "Lexware" als Schnittstelle, Garantien ("garantiert", "100 %", "fehlerfrei"), Zeitersparnis als Versprechen ("spart dir 5 Stunden").
- Zeitangaben im Hook sind Alltagsszenen, keine Messwerte ("40 Minuten. Jeden Abend." ist erlaubt, "Spare 40 Minuten" nicht).
- Uhrzeiten und Zähler im Hook müssen zur Zeitangabe passen. Rechnet ein Zuschauer nach, muss es aufgehen (siehe die Rechnung bei jedem Reel in Abschnitt 6).
- Jede Automatisierung endet mit Prüfung und Entscheidung durch den Menschen (Klick auf einen Button wie "Alle freigeben").
- Alle Daten sind erfunden. Keine echten Firmen, Personen, IBANs oder Adressen. Im Video und in der Bildunterschrift nirgends die Wörter "Beispiel", "Demo", "erfunden" oder "fiktiv".
- Kein Gesicht, keine Person im Bild, keine Stimme. Nur Oberfläche, Papier und Bewegung (UI-Motion).

### 2.2 Format

- 1080x1920, immer 60 fps (nie 30), H.264, Dauer genau 9,0 s.
- Inhalt, der tragen muss, nur im Bereich x = 88 bis 916, y = 220 bis 1550 (828 px breit). Rechts (x > 930) und unten (y > 1570) liegen die Bedienelemente von Instagram und TikTok.
- Schriftgröße für alles, was gelesen werden muss: mindestens 28 px.
- Hook-Text: 96 bis 110 px, Inter 700, Großbuchstaben. Keine Hook-Zeile darf breiter als 828 px sein. Faustregel: höchstens 11 Zeichen pro Zeile bei 110 px, höchstens 12 Zeichen bei 104 px. Längere Sätze auf mehrere Zeilen umbrechen. Nach dem Rendern die Breite jeder Hook-Zeile nachmessen (z. B. per getBoundingClientRect im Browser), nicht schätzen.
- Zwischentitel ("Automatisch.", "Einmal reicht.") mindestens 96 px, ebenfalls höchstens 828 px breit.
- In den ersten 3 Sekunden kein Logo, keine Marke. Marke erst im Abschluss.
- Der Hook-Satz steht ab 0,0 s und ist ohne Ton verständlich.
- Keine winzigen Tabellen im Hook. Tabellen erst ab Sekunde 3, Zeilenhöhe mindestens 56 px, Schrift mindestens 34 px.

### 2.3 Farbe

- Rot (#FF5A4D) nur für Problem, Abweichung oder Zeitdruck.
- Keine weiteren Signalfarben (kein Gelb, kein Grün). Eine offene Abweichung ist Rot mit gestricheltem Rahmen, erledigt ist Blau mit Haken.

### 2.4 Ton

- Eigenes, synthetisch erzeugtes Musikbett (128 BPM, ruhig, elektronisch, ohne Melodie im Vordergrund). Keine Fremdmusik, keine Musik aus Bibliotheken oder Plattformen.
- Dazu taktile Geräusche: Tastatur-Klacken, Uhr-Ticken, kurze Ticks beim Auslesen, ein Einrast-Klang ("Thunk") bei Freigabe, ein heller Glasklang bei "fertig".
- Lautheit −16 LUFS (Toleranz −15,5 bis −17), True Peak unter −1,0 dBTP.
- Das Video muss auch ohne Ton funktionieren, denn die meisten schauen stumm.

## 3. Markenpaket

### 3.1 Farben

| Rolle | Wert |
|---|---|
| Hintergrund | #080B12 |
| Fläche (Karten) | #111824 |
| Fläche erhöht | #172232 |
| Linie | #2B3B52 |
| Text hell | #F5F7FA |
| Text gedämpft | #A7B4C8 |
| Akzent Blau | #5598FF |
| Button | #317BEE (Text weiß) |
| Papier | #EDF4FF, Papiertext #142031 |
| Rot, nur für Problem, Abweichung oder Zeitdruck | #FF5A4D |

Linien 1,5 px, Ecken 20 bis 24 px. Keine Verläufe, kein Leuchten auf Fließtext. Ein kurzer Glow (200 ms) ist nur auf einer einrastenden Zeile oder einem Button erlaubt.

### 3.2 Schriften

Nur Inter (400, 500, 700) und JetBrains Mono (400) für Zahlen, Beträge und Uhrzeiten. Beide stehen unter der Open Font License und lassen sich von Google Fonts laden. Als lokale Dateien in assets/fonts/ ablegen und per @font-face einbinden. Während des Renderns nichts aus dem Netz laden.

### 3.3 Logo

Drei verbundene, abgerundete Quadrate in Blau. Daneben der Schriftzug "Systemic Automation" (Inter 500, 30 px, Laufweite −0,025em). Im Abschluss groß, sonst nirgends. SVG, als assets/systems-mark.svg speichern:

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="160" height="84" viewBox="0 0 160 84">
  <g fill="none" stroke="#5598ff" stroke-width="2" stroke-linejoin="round">
    <path d="M4 11 L42 11 C43.105 11 44 11.895 44 13 L44 51 C44 52.105 43.105 53 42 53 L4 53 C2.895 53 2 52.105 2 51 L2 13 C2 11.895 2.895 11 4 11 Z"/>
    <path d="M61 31 L99 31 C100.105 31 101 31.895 101 33 L101 71 C101 72.105 100.105 73 99 73 L61 73 C59.895 73 59 72.105 59 71 L59 33 C59 31.895 59.895 31 61 31 Z"/>
    <path d="M118 11 L156 11 C157.105 11 158 11.895 158 13 L158 51 C158 52.105 157.105 53 156 53 L118 53 C116.895 53 116 52.105 116 51 L116 13 C116 11.895 116.895 11 118 11 Z"/>
    <path d="M44 32 L59 32"/>
    <path d="M101 32 L116 32"/>
  </g>
</svg>
```

### 3.4 Bewegung

- Kurven power3.out oder expo.out, klar und ruhig, nicht federnd.
- Jede Szene erfüllt eine Aufgabe. Text ist früh lesbar, die letzte Pose bleibt stehen.
- Kein dauerndes Pulsieren, keine Kamerafahrten ohne Grund.
- Mauszeiger nur rund um einen Klick sichtbar, mit einem einzelnen Klick-Ring.
- Der Wechsel von Rot und Unordnung zu Blau und Ordnung ist die Belohnung. Er muss deutlich sichtbar sein.

## 4. Technik

### 4.1 Werkzeug

- HyperFrames (npm-Paket hyperframes), vorgesehen ist Version 0.8.145. Falls diese Version nicht existiert oder nicht startet, die aktuelle stabile Version nehmen und das im Protokoll vermerken. In den Befehlen unten dann die Versionsnummer ersetzen.
- Projekt anlegen mit `npx --yes hyperframes@0.8.145 init <name>` (oder die Struktur unten von Hand).
- Prüfen: `npx --yes hyperframes@0.8.145 check`
- Rendern: `npx --yes hyperframes@0.8.145 render --fps 60 --quality delivery -o renders/<name>.mp4`
- Danach immer ffprobe zur Kontrolle (Bildrate 60/1, 1080x1920, Dauer 9,0 s).
- Benötigt: Node 20+, Chrome/Chromium (bringt HyperFrames mit), ffmpeg, Python 3 mit numpy (für den Ton).

### 4.2 Aufbau einer Komposition (HyperFrames-Regeln)

- index.html legt die Gesamtdauer fest und bindet die Szenen als Unterkompositionen mit data-start und data-duration ein. Dazu kommt eine Audiospur.
- Jede Szene ist eine Datei compositions/frames/NN-name.html, umschlossen von `<template>`, mit einem Wurzelelement `<div id="root" data-composition-id="NN-name" data-width="1080" data-height="1920" data-duration="X">`.
- Je Szene eine pausierte GSAP-Timeline: `const tl = gsap.timeline({paused:true}); ... window.__timelines['NN-name'] = tl;`. Am Ende `tl.to({}, {duration:.1}, X-0.1);`, damit die Länge stimmt.
- Alles deterministisch und vorspulbar: kein Math.random() ohne festen Startwert, keine Zeitgeber, keine CSS-Animationen. Textwechsel (Zähler, Uhr) mit `tl.set(el, {textContent:'...'}, t)`.
- Keine Anfangs-Transformationen per CSS auf GSAP-Zielen, keine Deckkraft auf dem Wurzel-Clip. Alle Klassen und IDs mit Szenen-Präfix versehen (h1a-, h1b- ...).
- Vor dem Rendern muss hyperframes check sauber sein.

### 4.3 Papier und Belege darstellen

Keine Fotos. Rechnungen, Belege und Lieferscheine als HTML-Papierkarten zeichnen:

- Hintergrund #EDF4FF oder Weiß, Text #142031, leichter Schatten, Drehung −5° bis +5° für den Stapel.
- Briefkopf mit erfundenem Lieferanten, Datum, Rechnungsnummer, 3 bis 6 Positionen, Summe.
- Erfundene Lieferanten (frei verwendbar): Müller Bau GmbH, HansaPrint Hamburg, Werkzeug-Kontor, Farben Lindemann, Kfz-Bedarf Elbe, Büro-Service HH, Sanitär Becker, Holzhandel Brandt, Stahlbau Rahlstedt, Reinigung Altona, Fliesen-Depot, Heizung & Bad Wendt, Tankstelle Elbbrücken, Baumarkt Wandsbek, Parkhaus Altstadt, Elektro-Großhandel Nord.
- Keine IBAN, keine echte Steuernummer. Statt Adressen nur einen Ort ("Hamburg").

### 4.4 Ton erzeugen

Ein Python-Skript mit numpy schreibt eine WAV-Datei (48 kHz, Stereo, 9,0 s):

- Musikbett: Kick auf jedem Viertel bei 128 BPM (sehr leise, tiefpassgefiltert), weiche Fläche aus zwei Sinustönen (Grundton plus Quinte) mit langsamer Hüllkurve, dazu ein leiser Hi-Hat-Puls aus Rauschen mit kurzer Hüllkurve.
- Geräusche als Funktionen: clack() für die Taste (kurzes gefiltertes Rauschen, 25 ms), tick() für die Uhr (Sinus 2 kHz, 8 ms), thunk(freq) für das Einrasten (Sinus 60 bis 110 Hz mit schnellem Abfall), glass(midi) für fertig (Sinus mit Obertönen, 400 ms Ausklang), whoosh() für Übergänge (Rauschen mit Bandpass-Sweep, 300 ms), alert() für Rot (zwei kurze Töne), rustle() für Papier (gefiltertes Rauschen).
- Abmischung: Musikbett etwa −12 dB unter den Geräuschen. Die Positionen der Geräusche je Reel stehen in den Tabellen in Abschnitt 6.
- Am Ende normalisieren mit `ffmpeg -af loudnorm=I=-16:TP=-1.5:LRA=7`, danach messen.

### 4.5 Optional: Lichteffekt ("Lightcraft")

Der Inhaber hat "Lightcraft" genannt. Ob es ein Werkzeug oder einen Baustein mit diesem Namen gibt, ist unklar. Vorgehen:

- In der HyperFrames-Registry suchen (`npx hyperframes@0.8.145 registry search light`, oder auch "sweep", "shimmer"). Außerdem prüfen, ob es ein öffentliches Paket oder Werkzeug namens "Lightcraft" gibt.
- Einsetzen nur, wenn es zu Abschnitt 3 passt: höchstens ein feiner Lichtstreif über die Liste oder den Button im Moment "fertig", nie über Fließtext, kein Leuchten auf Schrift, kein Farbverlauf als Fläche.
- Gibt es nichts Passendes, weglassen und im Protokoll vermerken. Lieber kein Effekt als einer, der die Marke bricht.

## 5. Dramaturgie (für alle vier gleich)

| Zeit | Aufgabe | Regeln |
|---|---|---|
| 0,0 bis 3,0 s | Hook: das Sitzen. Großer Satz mit Zeitangabe, darunter das Ding (Papier), sichtbarer Zeitdruck (Uhr läuft, Zähler zählt langsam). Rot erlaubt. | Satz ab 0,0 s. Bewegung ab Frame 1. Kein Logo. Keine Tabelle. Bei 3,0 s muss klar sein: "Das kenne ich." |
| 3,0 bis 6,5 s | Automatisch. Ein Übergang (Whoosh), dann ordnet sich das Chaos: Auslesen, Liste füllt sich schnell, Zähler rast. Rot wird Blau. | Der Kontrast langsam gegen schnell muss spürbar sein. Großer Zwischentitel (z. B. "Automatisch."), mindestens 96 px. |
| 6,5 bis 7,5 s | Der Mensch entscheidet. Mauszeiger, Klick auf "Alle freigeben" (oder Entsprechendes), Zeilen rasten ein, Haken. | Klick-Ring, Thunk-Klang, kurzer Glow auf dem Button. |
| 7,5 bis 9,0 s | Abschluss. Logo und "Systemic Automation", Nutzensatz, Zeile "Hamburg · 15 Minuten kostenlos", Aufruf Schreib "PRÜFEN" per DM. | Ab 7,5 s mindestens 1,5 s ruhig stehen lassen. Aufruf mindestens 52 px. |

Das Titelbild (Cover für Instagram) ist der Frame bei 0,5 s. Es muss allein als Bild funktionieren.

## 6. Die vier Reels im Detail

### H1: "40 Minuten. Jeden Abend." (Rechnungen auslesen)

Rechnung für die Uhr: 12 Rechnungen in 40 Minuten sind gut 3 Minuten pro Rechnung. Bei "3 von 12" sind etwa 10 Minuten vergangen.

| Zeit | Bild | Text im Bild | Ton |
|---|---|---|---|
| 0,0 | Zwei Zeilen groß, 104 px: "40 MINUTEN." (weiß), "JEDEN ABEND." (blau). Darunter rot (60 px): "Rechnungen abtippen." | wie links | leiser Kick setzt ein, Tastatur-Klacken im Rhythmus |
| 0,3 bis 3,0 | Stapel aus 12 Papierrechnungen (leicht verdreht), rotes Abzeichen "12". Darunter Fortschritt "1 von 12 abgetippt", dann "2 von 12" und "3 von 12" (langsam), dünner Balken füllt sich nur bis 25 %. Uhr in JetBrains Mono oben rechts im Inhaltsbereich: 21:10, 21:13, 21:16. | "1 von 12 abgetippt" ... | Klacken, Uhr-Tick bei jedem Uhrwechsel |
| 3,0 | Whoosh. Stapel gleitet nach oben weg. Zwischentitel "Automatisch." (blau, 110 px) | Automatisch. | Whoosh + Thunk |
| 3,2 bis 5,8 | Oberste Rechnung als Papierkarte, ein blauer Scanstrich läuft einmal darüber. Zwei Felder (Lieferant, Betrag) leuchten auf. Darunter die Karte "Eingang" mit Zeilen (Lieferant, Betrag, Status "Prüfen"). Die Zeilen fliegen schnell ein, der Zähler rast von "1 von 12 ausgelesen" bis "12 von 12 ausgelesen". Zeilenhöhe 56 px, 6 Zeilen sichtbar. | "12 von 12 ausgelesen" | schnelle Ticks je Zeile, kurzer Glasklang bei 12/12 |
| 5,8 bis 6,5 | Fußzeile der Liste: "Summe 8.338,19 €" | | |
| 6,5 bis 7,5 | Mauszeiger fährt zum Button "Alle freigeben" (blau), Klick-Ring. Statusspalte wechselt von "Prüfen" zu Haken in Blau. Kleine Plakette "Excel · CSV" | Alle freigeben | Klick, Thunk, Glasakkord |
| 7,5 bis 9,0 | Abschluss: Logo groß, "Systemic Automation", Satz "Abends wieder frei.", "Hamburg · 15 Minuten kostenlos", Aufruf | Schreib "PRÜFEN" per DM | Akkord klingt aus |

Lieferanten und Beträge für die Liste (Summe 8.338,19 €, nachgerechnet): Müller Bau GmbH 1.844,50 · HansaPrint Hamburg 411,74 · Werkzeug-Kontor 96,40 · Farben Lindemann 238,90 · Kfz-Bedarf Elbe 74,50 · Büro-Service HH 59,00 · Sanitär Becker 865,30 · Holzhandel Brandt 1.045,20 · Stahlbau Rahlstedt 2.310,00 · Reinigung Altona 180,00 · Fliesen-Depot 522,75 · Heizung & Bad Wendt 689,90.

Bildunterschrift (Instagram und TikTok):

```
Jeden Abend vierzig Minuten Rechnungen abtippen, eine nach der anderen in die Liste. Das kann auch automatisch laufen: Die Rechnungen werden ausgelesen, die Liste steht, und du prüfst jede Zeile, bevor du freigibst. Ich richte so etwas für kleine Büros und Handwerksbetriebe in Hamburg ein.

Wie lange sitzt du abends am Bürokram?

#büroalltag #rechnungen #handwerk #feierabend #excel #hamburg
```

Erster Kommentar: `15 Minuten kostenlos: Schreib PRÜFEN per DM oder ruf an unter 0173 6762711. Mehr auf systemic-automation.de`

TikTok-Titel: 40 Minuten. Jeden Abend.

### H2: "Freitag. 2 Stunden Belege." (Belege erfassen fürs Steuerbüro)

Rechnung für die Uhr: 23 Belege in 2 Stunden sind gut 5 Minuten pro Beleg. Bei "3 von 23" sind etwa 15 Minuten vergangen.

| Zeit | Bild | Text im Bild | Ton |
|---|---|---|---|
| 0,0 | Drei Zeilen, 110 px: "FREITAG." (weiß), "2 STUNDEN" (blau), "BELEGE." (blau). Darunter rot (60 px): "Das Steuerbüro wartet." | wie links | Kick, Uhr tickt |
| 0,3 bis 3,0 | 8 bis 10 kleine Kassenbons und Belege als Papierschnipsel, wild verteilt und verdreht (Tankstelle Elbbrücken, Baumarkt Wandsbek, Parkhaus Altstadt, Elektro-Großhandel Nord, Büro-Service HH). Einer nach dem anderen wird langsam zurechtgerückt. Uhr: 14:00, 14:05, 14:10. Zähler "3 von 23 sortiert". | "3 von 23 sortiert" | Papierrascheln (rustle), Uhr-Ticks |
| 3,0 | Whoosh, Zwischentitel "Automatisch." | Automatisch. | Whoosh + Thunk |
| 3,2 bis 6,0 | Die Schnipsel fliegen in eine saubere Liste mit drei Spalten: Datum · Lieferant · Betrag, nach Datum sortiert. Zähler rast bis "23 von 23 erfasst". Fußzeile "23 Belege · 1.482,60 €". | Spaltenköpfe, Zähler | schnelle Ticks, Glasklang bei 23/23 |
| 6,0 bis 7,5 | Klick auf "Alle freigeben", dann Plakette "Export CSV fürs Steuerbüro" | Alle freigeben | Klick, Thunk, Akkord |
| 7,5 bis 9,0 | Abschluss mit Satz "Freitag ist wieder Feierabend." | Schreib "PRÜFEN" per DM | Ausklang |

Sichtbare Zeilen (Datum, Lieferant, Betrag): 02.10. Tankstelle Elbbrücken 84,60 · 03.10. Baumarkt Wandsbek 132,45 · 06.10. Parkhaus Altstadt 12,00 · 07.10. Elektro-Großhandel Nord 418,90 · 09.10. Büro-Service HH 59,00 · 10.10. Tankstelle Elbbrücken 91,20. Die Summe 1.482,60 € gilt für alle 23 Belege. Die übrigen 17 Zeilen sind nicht sichtbar, die Summe muss nicht aus den sichtbaren Zeilen aufgehen. Die Liste muss als Ausschnitt erkennbar sein (Zähler "23", unten angeschnittene Zeile oder Hinweis "+ 17 weitere").

Bildunterschrift:

```
Freitagnachmittag, und die Belege fürs Steuerbüro liegen noch quer über den Schreibtisch: Tankstelle, Baumarkt, Parkhaus. Belege lassen sich auch automatisch erfassen und landen als sortierte Liste mit Datum, Lieferant und Betrag, fertig als CSV. Du schaust drüber und gibst frei. Ich richte so etwas für kleine Büros und Handwerksbetriebe in Hamburg ein.

Wann sortierst du deine Belege?

#belege #steuerbüro #buchhaltung #büroalltag #handwerk #hamburg
```

Erster Kommentar: wie H1. TikTok-Titel: Freitag. 2 Stunden Belege.

### H3: "Dieselben Zahlen. Zum dritten Mal." (einmal eingeben, mehrfach nutzen)

Nur bauen, wenn in Tabelle 0.1 bei H3 "ja" steht.

| Zeit | Bild | Text im Bild | Ton |
|---|---|---|---|
| 0,0 | Vier Zeilen, 110 px: "DIESELBEN" und "ZAHLEN." (weiß), "ZUM DRITTEN" und "MAL." (rot) | wie links | Kick, Klacken |
| 0,3 bis 3,0 | Drei Karten untereinander: Anfrage (wie eine Mail), Excel-Liste, Angebot. In jeder wird nacheinander derselbe Inhalt getippt, mit sichtbarem Textcursor: "Bad sanieren · 14 m² · Fliesen 60x60". Rotes Zeichen "3×" neben der dritten Karte. | Kartentitel, getippter Text | Klacken bei jedem Zeichenblock |
| 3,0 | Whoosh, Zwischentitel "Einmal reicht." (blau, 110 px) | Einmal reicht. | Whoosh + Thunk |
| 3,2 bis 6,0 | Nur die Anfrage-Karte wird ausgefüllt (Kunde, Leistung, Fläche, Material). Feine blaue Linien verbinden die Felder mit der Excel-Liste und dem Angebot, die sich selbst füllen (Felder leuchten kurz). Das Angebot zeigt 3 Positionen und eine Summe. | Feldnamen, Summe | Ticks beim Füllen, Glasklang |
| 6,0 bis 7,5 | Klick auf "Angebot freigeben" | Angebot freigeben | Klick, Thunk |
| 7,5 bis 9,0 | Abschluss mit Satz "Einmal eingeben. Fertig." | Schreib "PRÜFEN" per DM | Ausklang |

Angebotspositionen: Fliesen 60x60, 14 m², 812,00 € · Verlegung, 14 m², 1.176,00 € · Abdichtung, pauschal, 390,00 €. Summe netto 2.378,00 € (nachgerechnet). Kunde: "Familie Petersen" (erfunden).

Bildunterschrift:

```
Die Anfrage kommt per Mail, dann tippst du alles in die Excel-Liste und danach noch einmal ins Angebot. Dreimal dieselben Zahlen. Das geht auch einmal: Du gibst die Anfrage ein, Liste und Angebot füllen sich, und du prüfst das Angebot, bevor es rausgeht. Ich richte so etwas für kleine Büros und Handwerksbetriebe in Hamburg ein.

Wie oft tippst du dieselben Zahlen ab?

#büroalltag #angebot #excel #handwerk #sanitär #hamburg
```

Erster Kommentar: wie H1. TikTok-Titel: Dieselben Zahlen. Zum dritten Mal.

### H4: "Zeile für Zeile. Eine Stunde." (Lieferschein und Rechnung abgleichen)

Nur bauen, wenn in Tabelle 0.1 bei H4 "ja" steht.

Rechnung für die Uhr: 18 Zeilen in einer Stunde sind gut 3 Minuten pro Zeile. Bei "Zeile 4 von 18" sind etwa 10 Minuten vergangen.

| Zeit | Bild | Text im Bild | Ton |
|---|---|---|---|
| 0,0 | Drei Zeilen, 104 px: "ZEILE FÜR" und "ZEILE." (weiß), "EINE STUNDE." (blau) | wie links | Kick, Uhr |
| 0,3 bis 3,0 | Zwei Papierkarten nebeneinander: links Lieferschein, rechts Rechnung (je 18 Zeilen, nur die ersten 6 lesbar groß). Ein Lineal oder Markierbalken wandert sehr langsam Zeile für Zeile über beide Karten. Zähler "Zeile 4 von 18". Uhr 16:05, 16:09, 16:13. | "Zeile 4 von 18" | Uhr-Ticks, leises Stiftkratzen (Rauschen) |
| 3,0 | Whoosh, Zwischentitel "Automatisch." | Automatisch. | Whoosh + Thunk |
| 3,2 bis 6,0 | Beide Dokumente werden zu einer Vergleichsliste. Alle Zeilen werden in schnellem Takt blau abgehakt. Eine einzige Zeile bleibt offen markiert (Rot mit gestricheltem Rahmen, siehe 2.3): "Kabelkanal 40x60 · Lieferschein 10 · Rechnung 12". Zähler "18 von 18 verglichen · 1 Abweichung". | Zeile mit Abweichung | schnelle Ticks, ein alert() bei der Abweichung |
| 6,0 bis 7,5 | Unter der markierten Zeile zwei Buttons: "Später klären" und "Übernehmen". Mauszeiger klickt "Später klären", die Zeile bekommt eine blaue Markierung "offen". Text: "Du entscheidest." | Du entscheidest. | Klick, Thunk |
| 7,5 bis 9,0 | Abschluss mit Satz "Die Stunde gehört wieder dir." | Schreib "PRÜFEN" per DM | Ausklang |

Wichtig: Es geht um die Zeit fürs Vergleichen. Keine Aussagen wie "Geld verloren" oder "vergessen zu berechnen". Die eine Abweichung ist nur das sichtbare Ergebnis. Kein Button, der eine Nachricht an den Lieferanten verschickt (Regel 2.1).

Bildunterschrift:

```
Lieferschein links, Rechnung rechts, und dann Zeile für Zeile vergleichen. Das kostet schnell eine Stunde. Der Abgleich kann auch automatisch laufen: Alles, was passt, ist abgehakt, Abweichungen sind markiert, und du entscheidest, was damit passiert. Ich richte so etwas für kleine Büros und Handwerksbetriebe in Hamburg ein.

Gleichst du noch von Hand ab?

#lieferschein #rechnungen #büroalltag #handwerk #elektro #hamburg
```

Erster Kommentar: wie H1. TikTok-Titel: Zeile für Zeile. Eine Stunde.

## 7. Review-Schleife (Pflicht für jedes Reel)

### 7.1 Material je Runde

- Kontaktbogen: 12 Frames bei 0,0 · 0,5 · 1,0 · 2,0 · 3,0 · 3,5 · 4,5 · 5,5 · 6,5 · 7,0 · 8,0 · 8,9 s, in einem Raster 4x3, jeweils mit Zeitstempel. Erzeugen mit ffmpeg aus dem gerenderten MP4.
- Storyboard: die Tabelle aus Abschnitt 6 für dieses Reel.
- Einzelbild 0,5 s in voller Größe (Cover-Test).

### 7.2 Ablauf

1. Reel rendern und die Qualitätsprüfung aus Abschnitt 8 durchlaufen.
2. Den Review-Prompt (Abschnitt 9.3) mit Material an ein zweites Modell geben. Bevorzugt Codex CLI (`codex exec -s read-only -i kontaktbogen.png "<Prompt>"`). Steht Codex nicht zur Verfügung, ein anderes starkes Bildmodell.
3. Kritik umsetzen, die zu den Regeln in Abschnitt 2 passt. Kritik, die Regeln bricht, nicht umsetzen. Das gilt etwa für "Blende 'Beispieldaten' ein", "sag 'spart 5 Stunden'", "zeig KI" oder "mach es 30 fps". Das im Protokoll vermerken.
4. Neu rendern, erneut prüfen lassen.
5. Abbruch: nach 3 Runden, oder wenn beide Hauptnoten (Fragen 1 und 2 in Abschnitt 9.3) mindestens 8 sind, oder wenn eine Runde keine Verbesserung bringt. Dann den Stand abgeben.

Protokoll je Runde: Noten, wichtigste Kritik, was umgesetzt wurde und was nicht (mit Grund).

## 8. Qualitätsprüfung vor Abgabe (je Reel abhaken)

- [ ] hyperframes check ohne Fehler
- [ ] ffprobe: 1080x1920, r_frame_rate=60/1, Dauer 9,0 s (±0,05)
- [ ] Lautheit −16 LUFS (−15,5 bis −17), True Peak < −1,0 dBTP (`ffmpeg -af ebur128=peak=true`)
- [ ] Hook-Satz ab 0,0 s lesbar, kein Logo vor 7,5 s
- [ ] Jede Hook-Zeile und jeder Zwischentitel höchstens 828 px breit (gemessen, nicht geschätzt)
- [ ] Alles Wichtige im sicheren Bereich (x 88 bis 916, y 220 bis 1550)
- [ ] Kleinster lesbarer Text ≥ 28 px, Tabellenschrift ≥ 34 px
- [ ] Uhrzeiten und Zähler im Hook passen zur Zeitangabe (Rechnung in Abschnitt 6)
- [ ] Rot nur für Problem, Abweichung oder Zeitdruck, keine weiteren Signalfarben, Wechsel zu Blau sichtbar
- [ ] Entscheidung durch den Menschen ist zu sehen (Klick), kein Button versendet oder bucht etwas
- [ ] Textsuche im Projekt und in der Bildunterschrift ohne Treffer für: KI, künstliche Intelligenz, Beispiel, Demo, erfunden, fiktiv, DATEV, Lexware, garantiert, 100 %, fehlerfrei, spart
- [ ] Rechtschreibung Deutsch geprüft (Umlaute, ß, Dezimalkomma, Tausenderpunkt)
- [ ] Bildunterschrift ohne Gedankenstriche (— und –) und ohne typografische Anführungszeichen
- [ ] Ohne Ton verständlich (stumm ansehen)

## 9. Prompts zum Einfügen

### 9.1 Master-Prompt (zuerst einfügen, zusammen mit diesem ganzen Dokument)

```
Du bist Motion-Designer und Entwickler. Baue mit HyperFrames (npm-Paket "hyperframes", vorgesehen Version 0.8.145, sonst die aktuelle stabile Version) vertikale Kurzvideos genau nach dem beigefügten Bauplan "Bauplan: 4 Reels H1 bis H4".

Verbindlich:
- Baue nur die Reels, bei denen in Tabelle 0.1 "ja" steht. Ändere die Tabelle nicht.
- Halte alle Regeln aus Abschnitt 2 ein (Wahrheit, Format, Farbe, Ton). Bei Widerspruch gilt Abschnitt 2 vor jedem Gestaltungswunsch.
- 1080x1920, 60 fps, genau 9,0 s, H.264, Ton -16 LUFS, True Peak unter -1 dBTP.
- Hook-Zeilen und Zwischentitel höchstens 828 px breit. Miss die Breite nach, statt sie zu schätzen.
- Markenpaket aus Abschnitt 3: Farben, nur Inter und JetBrains Mono (lokal einbinden), Logo-SVG wie angegeben.
- Technik aus Abschnitt 4: eine Szene pro HTML-Datei, je Szene eine pausierte GSAP-Timeline in window.__timelines, deterministisch, "hyperframes check" muss sauber sein.
- Papier und Belege als HTML-Karten, keine Fotos, nur erfundene Daten. Im Bild nirgends "Beispiel", "Demo", "erfunden".
- Ton selbst mit Python und numpy erzeugen, keine Fremdmusik.

Arbeitsweise:
1. Richte zuerst die Umgebung ein (Node, ffmpeg, Python mit numpy) und lege ein gemeinsames Grundgerüst an: Fonts, Logo, Farbvariablen, eine Hilfsfunktion für Szenen, die Ton-Bibliothek (clack, tick, thunk, glass, whoosh, alert, rustle, Musikbett 128 BPM).
2. Baue die freigegebenen Reels nacheinander in der Reihenfolge H1, H2, H3, H4. Für jedes: Szenen nach der Tabelle in Abschnitt 6, Ton nach der Tonspalte, rendern, Qualitätsprüfung aus Abschnitt 8, dann die Review-Schleife aus Abschnitt 7 mit dem Review-Prompt aus 9.3 (höchstens 3 Runden).
3. Abschnitt 4.5 (Lichteffekt) nur, wenn es einen passenden Baustein gibt und er die Marke nicht bricht.
4. Veröffentliche nichts und lade nichts auf Plattformen hoch.

Abgabe in einem Ordner "reels-h":
- je gebautem Reel die MP4: H1-40-minuten-60fps.mp4, H2-freitag-belege-60fps.mp4, H3-dieselben-zahlen-60fps.mp4, H4-zeile-fuer-zeile-60fps.mp4
- je Reel: kontaktbogen.png, cover-0_5s.png, ffprobe- und Lautheitswerte, gemessene Breite der breitesten Hook-Zeile
- bildunterschriften.md (Texte aus Abschnitt 6, unverändert, außer du findest einen Regelverstoß, dann markieren)
- review-protokoll.md (je Reel und Runde: Noten, Kritik, umgesetzt/nicht umgesetzt mit Grund; nicht gebaute Reels mit Grund)
- der komplette Projektquellcode als ZIP

Melde am Ende in einer kurzen Tabelle: Reel, gebaut ja/nein, Dauer, fps, LUFS, Review-Noten der letzten Runde, offene Punkte.
```

### 9.2 Prompt je Reel (vor dem Bau eines Reels einfügen, Platzhalter ersetzen)

```
Baue jetzt Reel [H1 / H2 / H3 / H4] nach Abschnitt 6 des Bauplans.
- Halte die Zeitpunkte der Tabelle auf ±0,2 s ein.
- Der Hook (0 bis 3 s) muss ohne Ton und ohne Vorwissen in 1 Sekunde verständlich sein: ein großer Satz, Bewegung ab Frame 1, kein Logo. Keine Hook-Zeile breiter als 828 px.
- Uhrzeiten und Zähler genau wie in der Tabelle, sie passen zur Zeitangabe im Hook.
- Der Kontrast "langsam und rot" (0 bis 3 s) gegen "schnell und blau" (3 bis 6,5 s) ist das Wichtigste. Mach ihn deutlich.
- Die Entscheidung durch einen Klick muss sichtbar sein.
- Abschluss ab 7,5 s ruhig stehen lassen, Aufruf "Schreib "PRÜFEN" per DM" groß.
Danach: rendern, Qualitätsprüfung (Abschnitt 8), Kontaktbogen erzeugen, Review-Schleife starten (Abschnitt 7, Prompt 9.3).
```

### 9.3 Review-Prompt (an Codex oder ein anderes Bildmodell, mit Kontaktbogen, Cover und Storyboard)

```
Du bist Inhaber eines kleinen Handwerksbetriebs in Hamburg (Elektro, 8 Mitarbeitende). Abends um 21 Uhr scrollst du auf dem Handy durch Instagram, Ton aus. Du hast keine Lust auf Werbung und wischst in unter 2 Sekunden weg, wenn dich etwas nicht packt.

Anbei: ein Kontaktbogen mit 12 Frames eines 9-Sekunden-Reels (Zeitstempel unter jedem Bild), das Titelbild bei 0,5 s und das Storyboard.

Bewerte ehrlich und knapp, aus deiner Sicht als Inhaber:
1. Bleibst du über 3 Sekunden dran? Note 1 bis 10, ein Satz Begründung.
2. Verstehst du ohne Ton, worum es geht und was dir das bringt? Note 1 bis 10, ein Satz.
3. Würdest du "PRÜFEN" per DM schreiben oder das Profil anschauen? Note 1 bis 10, ein Satz.
4. Was ist das EINE größte Problem? (z. B. Text zu klein, Hook unklar, zu viel auf einmal, Übergang zu langsam, wirkt wie Werbung, Zahlen gehen nicht auf)
5. Drei konkrete Änderungen in der Reihenfolge der Wirkung, jeweils mit Frame-Zeitpunkt.

Grenzen, die du NICHT vorschlagen darfst: Hinweise wie "Beispieldaten" einblenden, Zeitersparnis-Versprechen ("spart 5 Stunden"), Begriffe wie "KI", Logo in den ersten 3 Sekunden, Gesichter oder Personen, Fremdmusik, 30 fps, Buttons, die etwas versenden oder buchen.

Antworte als Liste ohne Einleitung.
```

### 9.4 Prompt für die Schlussprüfung der Bildunterschriften

```
Prüfe die Bildunterschriften in bildunterschriften.md:
- Kommen verbotene Wörter vor (KI, künstliche Intelligenz, Beispiel, Demo, erfunden, fiktiv, DATEV, Lexware, garantiert, 100 %, fehlerfrei, spart)?
- Gibt es Gedankenstriche (— oder –) oder typografische Anführungszeichen?
- Wird etwas versprochen, das das Video nicht zeigt?
- Klingt ein Satz nach KI-Text (aufgeblasen, Dreierlisten, Floskeln wie "nahtlos", "effizient", "Mehrwert")?
Melde nur Funde mit Zeilenangabe und einem Vorschlag in natürlichem Deutsch. Ändere nichts, was in Ordnung ist.
```

## 10. Nach der Abgabe (macht Systemic Automation selbst, nicht der Cloud-Chat)

- Emre sichtet alle Videos und gibt jedes einzeln frei (keine Veröffentlichung ohne ausdrückliches Ja).
- Upload-Weg: MP4 nach `media/social/2026-10-XX-<thema>-60fps.mp4` im Website-Repo (bmwfreak/buerohilfe-hamburg), Pull Request, Merge, Medien-URL in Metricool (Marke 7122906), Instagram als normales REEL (kein Trial-Reel), TikTok öffentlich.
- Takt: 2 pro Woche, 18:00 Uhr (z. B. Di und Fr). Reihenfolge-Vorschlag: H1, H4, H2, H3 (H3 und H4 nur, wenn gebaut).
- Messung nach 48 h in Metricool: Anteil über 3 s (IG "Reel view rate"), durchschnittliche Sehdauer (Ziel IG ≥ 6 s, TikTok ≥ 3 s), Kommentare und DMs. Je Reel nur eine Variable geändert, hier die Aufgabe im Hook.
