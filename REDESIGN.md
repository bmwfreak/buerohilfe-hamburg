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

## Agentur-Finish: Angebot und Nutzerführung
Einstieg mit dem Nutzen weniger doppelter Eingabe; breites Angebot für Unternehmen und Industrie im Begleittext erhalten. Kundenbeispiel explizit als umgesetzte Verbindung erklärt, keine erfundenen Kennzahlen. Zweispaltige Projektbeschreibung mit eigenem Kontaktabschluss. E-Mail-Kontakt bereitet nur lokal einen Entwurf mit Fragen zu Programmen und manuellen Schritten vor; keine Nachricht wird automatisch versendet. Preise unverändert. Persönliche Zusammenarbeit konkret erklärt. Native mobile Navigation auf den vier Leistungsseiten, mit Escape, Linkauswahl und Außenklick schließbar; externe Datei gemäß Produktions-CSP. Rechtliche Texte unverändert.
Visuelle Kontrolle von Hero, Kontakt und mobilem Seitenverlauf. 28 Seiten-/Breitenprüfungen ohne Dokumentüberbreite oder fehlende Abschnittsziele. Die vorhandene Bildvergrößerung bleibt bedienbar. Keine neue Tracking-Bibliothek, keine Medien- oder Abhängigkeitspakete. Header/Navigation brauchen kein JavaScript zum Öffnen. Der abschließende Hallmark-Durchlauf dokumentiert weiterhin verbleibende Stilhinweise statt einen unrealistischen Gesamt-Score zu behaupten.

## Kritischer zweiter Durchgang
Rechnungsdarstellung, Vorher/Nachher und optionale Werkzeugerklärung zu einem zusammenhängenden Anwendungsabschnitt gebündelt. Acht Hauptabschnitte statt zehn; Anker vergleich und ki erhalten. Desktopnavigation priorisiert Kundenprojekt statt zusätzlichem Vergleichslink. Schriftliche Anfrage im Hero ergänzt, Pilottext nicht mehr pauschal auf Doppelklick-Bedienung eingeschränkt, Ansprache im Preisintro vereinheitlicht. Mobiles Menü auch bei 768 bis 1000 px verfügbar (Legacy-Navigation blendet Desktoplinks dort bereits aus).
Prüfung: 28 Seiten-/Breitenkombinationen ohne fehlende Anker, Dokumentüberbreite oder Seiten-JS-Fehler. Tabletmenü bei 768 und 1000 px tatsächlich geöffnet; optionale KI-Erklärung und Bilddialog bedienbar. Hallmark Startseite: 0 FAIL, 3 REFLEX, 1 WARN, 1 NOTE. Verbleibende Messhinweise zum Hero schließen den Serviceindex aus; Abschnittsabstände bewusst inhaltlich gestaffelt; vier Schriftgewichte und ausführliche zugängliche Details bleiben. Jev weiterhin HTTP405.

## Zusätzliche Qualitätsprüfung
axe-core mit WCAG2A, WCAG2AA und WCAG2.1AA auf allen sieben Seiten ausgeführt. Zwei echte Befunde in rechtlichen Fußzeilen (Links nur durch Farbe erkennbar) durch Unterstreichung behoben. Bestätigender Lauf: auf allen sieben Seiten keine automatisch erkannten Verstöße; das ersetzt keine vollständige manuelle Barrierefreiheitsprüfung.
Veraltete pauschale Abo-Aussagen in OpenGraph, Twitter und Organization-Schema der Startseite entfernt. Pilot-Schema auf den tatsächlichen Leistungsumfang abgestimmt. Preise und Fremddienstkosten im KI-Ratgeber und zugehörigen FAQ-Schema gleichlautend abgegrenzt. Keine Rechtstexte geändert. Hallmark nach Änderung weiterhin 0 FAIL, 3 REFLEX, 1 WARN, 1 NOTE. Jev-Reviewdienst erneut HTTP405, kein unabhängiger Review-Pass behauptet.

## Besucherwege nach Simulation
Hinweis im Hero für unklaren Automatisierungsbedarf mit Link zur Angebotsorientierung. Alle fünf Preisaktionen führen zur Kontaktwahl. Industrieseite bietet im Hero und Kontakt eine vorbereitete E-Mail mit Dateiformat, Auswertung und Berichtsformular. Browserprüfung bestätigt Preisaktion bis #kontakt und Industrie-E-Mail auf 375/768/1440 px ohne Überbreite. Keine E-Mail versendet. axe bestätigt weiterhin auf sieben Seiten keine automatisch erkannten WCAG-Verstöße; Hallmark Startseite 0 FAIL, 3 REFLEX, 1 WARN, 1 NOTE.
