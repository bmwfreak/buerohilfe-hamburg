# Redesign vom 12.11.2026

Branch: codex/hallmark-redesign-20261112. Ausgangspunkt: 6dc5d47. Noch nicht veröffentlicht.

## Richtung
Hallmarks Werkstatt als Material, angepasst an die vorhandene blaue Marke. Jost für Überschriften (lokal, OFL-Lizenz), Inter für Text. Klare Kanten, offene Kompositionen, Blau für Kontakt und Referenz, gelbgrüner Kontrast für Vergleich und Kontakt. Keine erfundenen Bilder oder Kundenergebnisse. Der Demo-Ausschnitt bleibt auf ausdrücklichen Wunsch letzter Schritt.

## Änderungen
- Homepage: konkreter persönlicher Einstieg und drei tatsächliche Leistungsbereiche.
- Workflow: seitliche Erklärung mit geordnetem Ablauf, Vertrauensdetails und zusätzliche Leistungen als kompakte Zeilen.
- Preise: vergleichbare Zeilen statt dunkler mittlerer Karte und widersprüchlicher Produktetiketten. Beträge und Leistungsdetails erhalten.
- Vergleich, Referenz, FAQ und Kontakt mit eigener Hierarchie statt identischer Kachelreihen.
- Gemeinsames Erscheinungsbild auf Industrie, KI-Ratgeber, Sichtbarkeit und rechtlichen Seiten.
- Mobile Eignungstabelle als beschriftete Einträge, damit keine Spalten verschwinden.
- Alle vorhandenen Linkziele, IDs und Scriptinhalte erhalten; Impressums- und Datenschutztext unverändert.

## Überprüfung
Sieben Seiten in 375, 768 und 1440 px geöffnet; keine horizontale Dokumentüberbreite, keine fehlenden lokalen Abschnittsziele. Screenshots manuell angesehen. Hallmark-Render der Startseite plus neues Stylesheet: zuletzt 0 FAIL, verbleibende Reflex-/Finish-Hinweise werden nicht als objektives Qualitätsurteil versteckt. Das ist kein Null-Fehler-Zertifikat für sämtliche alten Inline-CSS-Regeln.

Begründete Abweichungen: Der Service-Index gehört zum Hero, wird vom Messskript aber als zusätzlicher Textblock nicht in dessen Ende eingerechnet. Normale Textlinks dürfen mobil umbrechen. Der Vergleich besteht aus zwei kompakten Arbeitsabläufen; künstliche Höhe oder ein dekoratives Bild würde keine Information ergänzen. Ausführliche bestehende Erläuterungen bleiben in aufklappbaren Bereichen erhalten. Kein erfundener unabhängiger Review: Jev war zweimal mit HTTP 405 nicht erreichbar.

## Noch offen
Nur der gewünschte echte Demo-Ausschnitt, danach erneute visuelle Abnahme dieses Abschnitts. Bestehende inhaltliche Aussagen wurden beim Redesign nicht neu fachlich zertifiziert.

## Vorschau
http://127.0.0.1:8770/
Vorher-Screenshots liegen im ursprünglichen Checkout unter .hallmark/before, neue Ansichten unter .hallmark/qa.

## Korrigierter Projektstand
Der Inhaber bestätigt: Die Make-Verbindung von eTermin und Lexware ist beim Kunden fertig umgesetzt, erprobt und funktioniert. Die frühere Aussage „nur Testkonten“ ist überholt. Demo-Hinweis und technische Bildunterschrift auf Wunsch entfernt; FAQ und FAQ-Schema entsprechend aktualisiert.

## Gewichtung nach Kundenprojekt
Make-Praxisbeispiel direkt hinter den Hero verschoben. Zusätzliche Prüfungs- und Anwendungsdetails im Rechnungsbereich zusammengeklappt; Inhalte und Anker bleiben erhalten.

## Abschluss der Frontend-Verbesserungen
- Make-Originalbild per nativem Dialog vergrößerbar, mit Schließen, Escape, Fokusrückgabe und per Tastatur scrollbar.
- Vorher/Nachher als direkte Tabellenzeilen, mobil kompakt.
- Wiederholten allgemeinen Konditionsblock entfernt, Aussagen zu lokalem Betrieb und Gebühren in der Rechnungsanwendung eingeordnet; Make-Kosten nicht mehr pauschal ausgeschlossen.
- Angebotswahl erklärt: Erstgespräch bei konkretem Ablauf, Prozesscheck bei unklarer Aufgabe, Festpreis für Umsetzung.
- Gemeinsame Abstände vereinheitlicht, Schriftgewichte reduziert, Unterseiten-Chips ohne Einzelrest angeordnet, Rechnerfelder kontrastreicher und 48 px hoch.

Hallmark auf allen sieben Seiten ausgeführt. Verbleibende Reflex-Hinweise bewusst beurteilt: (44c/79) Serviceindex gehört zum Hero und wird bei der Endmessung nicht mitgerechnet; keine dekorative Füllung. (49b) reguläre Textlinks dürfen umbrechen, um mobil lesbar zu bleiben. (59) kompakte verwandte Abschnitte brauchen keine künstlichen 120px; längere Ratgeber und Rechtstexte behalten ihre notwendigen Abschnitte. (71) Kontaktüberschrift richtet sich am zugehörigen Kontaktblock aus. (77) echte Vergleichstabelle, Kontaktentscheidung und rechtliche Erläuterungen dürfen kompakt und ohne Schmuckbild sein. (58) Textmessung zählt teils aufgeklappte Details; ausführliche Aussagen bleiben zugänglich. (F19) vier eingesetzte Gewichte dienen Text, Links, Buttons und Überschriften; keine weitere rein numerische Angleichung. Weitere Hinweise sind im jeweiligen Prüfprotokoll unter .hallmark/qa/hallmark-*.txt festgehalten. Das Urteil ist kein fehlerfreies Zertifikat für sämtliche Legacy-Stylesheets.

Bedienprüfung: 21 Kombinationen aus sieben Seiten und drei Breiten ohne horizontale Dokumentüberbreite; keine JS-Seitenfehler. Dialog öffnet, schließt per Escape und Schließen-Button, Fokus kehrt zum Auslöser zurück. Jev-Review weiterhin HTTP405 (Baseline und Folgeversuch), kein Review-Ergebnis behauptet.
