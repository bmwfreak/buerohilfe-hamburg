# Bauplan: Marketing-Agent für Systemic Automation ("SA-Marketing")

Stand 24.10.2026. Für Codex (oder einen anderen Coding-Agenten) geschrieben. Eigenständig lesbar, ohne Vorwissen.
Ziel-Repo: neues privates Repo `systemic-marketing-agent` (nicht ins Website-Repo, das wird komplett veröffentlicht).

---

## 0. Kurzfassung für Codex

Baue einen lokalen, kostenfreien Marketing-Agenten in Python, der für die Firma Systemic Automation (1 Person, Nebenerwerb, Hamburg) wöchentlich:

1. **misst** (Search Console, Bing Webmaster Tools, Cloudflare Web Analytics, Google-Unternehmensprofil, Metricool/Social, Anfragenliste),
2. **prüft** (Website-Technik, Inhalte, Konsistenz der Aussagen, KI-Crawler-Zugang),
3. **vorschlägt** (höchstens 5 priorisierte Maßnahmen mit Begründung und Datenquelle),
4. **Entwürfe erstellt** (Unterseite, Google-Profil-Beitrag, Reel-Text, LinkedIn-Text aus einer Projektnotiz),
5. **nichts selbst veröffentlicht**. Jede Veröffentlichung braucht ein ausdrückliches "freigegeben" des Inhabers.

Erfolg misst sich nicht an Klicks oder Aufrufen, sondern an **Anfragen → Gesprächen → Angeboten → Aufträgen**.

Wichtigste Randbedingung: Die Datenbasis ist winzig (Stand 24.10.2026: 3 Klicks, 33 Impressionen in 6 Monaten, 19 Reels ohne Anfrage). Der Agent muss das ehrlich ausweisen und darf aus wenigen Datenpunkten keine Trends erfinden.

---

## 1. Lage und Quellen (Recherche 24.10.2026)

Alle Angaben aus der Recherche. Fachpresse und Anbieterblogs sind als solche markiert. Vor dem Einbau einer Schnittstelle die offizielle Dokumentation prüfen.

### 1.1 Was "Agentic Marketing" 2026 praktisch heißt
- Statt einzelner Tools arbeiten mehrere spezialisierte Agenten zusammen und verfolgen ein Ziel ([etailment](https://etailment.de/news/stories/agentic-marketing-systems-warum-2026-das-jahr-der-marketing-automatisierung-wird-25423), [Amazon Ads](https://advertising.amazon.com/de-de/library/guides/agentic-ai)).
- Für KMU wird empfohlen, mit **internen Agenten ohne Kundenkontakt** zu starten, etwa einem Berichts-Agenten ([marketingautomation.tech](https://www.marketingautomation.tech/ki-agenten-marketing-realitaet/)).
- Warnung: Laut einem Beitrag erwartet Gartner, dass über 40 % der Agentic-AI-Projekte bis Ende 2027 eingestellt werden ([dievion](https://dievion.de/agentic-marketing/), Zweitquelle). Folgerung für diesen Bau: klein anfangen, Nutzen messen, abbrechen dürfen.

### 1.2 Suche und KI-Suche (SEO/GEO)
- **Google:** Search-Console-Berichte für generative KI (AI Overviews, AI Mode) seit 03.06.2026, weltweit seit 31.08.2026. Nur Impressionen nach Seite, Land, Gerät, Datum, **keine Klicks, keine Suchanfragen** ([Google Search Central Blog](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports), [Search Engine Journal](https://www.searchenginejournal.com/google-search-console-ai-reports-rolled-out-worldwide/587836/)). Ob die API diese Daten liefert, war nicht zu bestätigen. **Codex: zuerst prüfen, sonst CSV-Export einlesen.**
- **Google-Leitfaden (Mai 2026):** KI-Funktionen nutzen den normalen Index. Kein eigener "GEO-Layer", llms.txt hilft dem Google-Ranking nicht ([TechWyse](https://www.techwyse.com/news/ai-search/google-llms-txt-no-ranking-benefit-june-2026), [jorijn.com](https://jorijn.com/en/blog/geo-is-still-seo-ai-search-llms-txt-small-business-websites/), Fachpresse). Lighthouse 13.3 prüft experimentell llms.txt für "Agentic Browsing" ([SEJ](https://www.searchenginejournal.com/googles-llms-txt-guidance-depends-on-which-product-you-ask)). Folgerung: llms.txt anlegen schadet nicht, ist aber keine Priorität.
- **Bing:** "AI Performance"-Bericht in Webmaster Tools (öffentliche Vorschau seit Februar 2026). Zählt Zitate in Copilot und Bing-KI-Zusammenfassungen, **nur als CSV-Export, keine API** ([Search Influence](https://www.searchinfluence.com/blog/bing-ai-performance-report-copilot-citations/), [Adobe](https://experienceleague.adobe.com/en/docs/brand-visibility-learn/tutorials/measurement/bing-webmaster-tools-ai-performance-report)). Laut deiner Vorrecherche kam am 13.10.2026 "Topics Portfolio" (Beta) dazu, von mir nicht unabhängig bestätigt.
- **KI-Crawler:** Trainings-Crawler (GPTBot, ClaudeBot, CCBot, Google-Extended) und Such-/Zitier-Crawler (OAI-SearchBot, Claude-SearchBot, PerplexityBot) sind zu unterscheiden. Achtung: Cloudflares "Block AI bots" kann die eigene robots.txt überschreiben ([dev.to](https://dev.to/hey_atlas_5d684863e9b069a/i-audited-my-own-robotstxt-and-found-cloudflare-was-blocking-the-ai-crawlers-i-wanted-4b77), Erfahrungsbericht). **Codex: die live ausgelieferte robots.txt prüfen, nicht die im Repo.**

### 1.3 Lokal
- Google Business Profile API: wiederkehrende Beiträge seit 07.04.2026, Bewertungs-Antwortstatus seit April 2026 ([Google Changelog](https://developers.google.com/my-business/content/latest-updates)). Zugang zur API ist laut Anbieterangaben an eine Freischaltung gebunden. **Codex: Zugang beantragen, bis dahin nur Entwürfe erzeugen, Inhaber postet von Hand.**

### 1.4 Social
- **Instagram:** Veröffentlichen per Graph API braucht `instagram_content_publish` und öffentlich erreichbare Mediendateien ([Meta](https://developers.facebook.com/docs/instagram-platform/content-publishing)).
- **TikTok:** Ohne App-Audit landen alle API-Posts als **privat**, das Audit braucht ein Demo-Video des Ablaufs ([Phyllo-Leitfaden](https://www.getphyllo.com/post/tiktok-api-integration-guide-2026-setup-endpoints-common-pitfalls), Zweitquelle).
- **Bestehend:** Metricool ist bereits verbunden (Marke 7122906) und plant Posts. **Folgerung: kein eigenes Posting bauen, Metricool weiter nutzen, Agent liefert nur Texte und liest Statistiken.**

### 1.5 Recht (Deutschland/EU)
- **Art. 50 KI-Verordnung** gilt seit 02.08.2026: KI-erzeugte Deepfakes und KI-Texte zu öffentlichen Themen ohne menschliche Kontrolle sind zu kennzeichnen, Übergangsfristen teils bis 02.12.2026 ([Computerwoche](https://www.computerwoche.de/article/4204445/ki-kennzeichnungspflicht-das-gilt-jetzt.html), [GDD](https://gesellschaft-datenschutz.de/ki-kennzeichnungspflicht/)). Für den Agenten: **Reels mit geklonter Stimme als KI-Stimme kennzeichnen**, jeder Text läuft über menschliche Freigabe.
- **Art. 4 (KI-Kompetenz)** wurde durch den Digital Omnibus (VO (EU) 2026/1744, in Kraft seit 27.07.2026) laut Fachquellen **abgeschwächt** ([KPMG](https://kpmg.com/at/de/insights/2026/07/digital-omnibus-on-ai.html), [AI Act Explorer](https://artificialintelligenceact.eu/de/ai-act-explorer/digital-omnibus/)). **Wichtig: Der Ratgeber-Entwurf "KI im Unternehmen einführen" spricht noch von einer Pflicht und muss vor der Veröffentlichung angepasst werden.**
- **UWG § 7:** Keine kalten E-Mails oder WhatsApps ohne Einwilligung. Der Agent erzeugt keine Massen-Mails.
- **DSGVO:** Keine Kundendaten an Cloud-KI ohne AVV. Die Anfragenliste bleibt lokal.

### 1.6 Referenz: Everlast AI
Everlast AI (Leonard Schmedding) ist laut eigenen und Presseangaben der größte deutschsprachige KI-YouTube-Kanal, mit Beratung, Done-for-you-Umsetzung, Voice Agents, Workflow-Automatisierung und Weiterbildung ([WiWo-Anzeige](https://www.wiwo.de/adv/firmen/everlast-ai.html), [YouTube](https://www.youtube.com/@everlastai), [Forbes](https://www.forbes.at/artikel/wer-ist-leonard-schmedding-lebenslauf-und-werdegang)). Abonnentenzahlen und Sitz schwanken je nach Quelle.

Was man übernehmen kann, und was nicht:
- **Übernehmen:** Reichweite über **Gesicht und Stimme des Gründers**, regelmäßige Formate (News, Use Cases, Tutorials), Inhalte als Einstieg zum Beratungsgespräch.
- **Nicht übernehmen:** Die Größenordnung. Das Modell braucht hunderttausende Zuschauer, um Kunden zu bringen. Für Systemic Automation zählt lokale Glaubwürdigkeit mehr als Reichweite.

### 1.7 Vorhandene Open-Source-Bausteine
- [mcp-seo](https://github.com/g-battaglia/mcp-seo): SEO-Analyse als CLI und MCP-Server.
- [OpenSEO](https://ai-tldr.dev/tools/open-seo/): Open-Source-SEO-Plattform mit MCP-Server, selbst gehostet kostenlos.
- [digital-marketing-pro](https://github.com/indranilbanerjee/digital-marketing-pro): Marketing-"Betriebssystem", Lizenz vor Nutzung prüfen.
- [n8n-Vorlage SEO-Audit](https://n8n.io/workflows/3224-analyze-any-website-with-openai-and-get-on-page-seo-audit/).

**Entscheidung:** Für Version 0.1 nichts davon einbinden. Ein eigener schlanker Python-Kern ist einfacher zu warten. Die Bausteine sind Kandidaten für Phase 3.

---

## 2. Feste Regeln für den Agenten (nicht verhandelbar)

1. **Nichts veröffentlichen, nichts versenden, nichts bezahlen.** Der Agent schreibt Entwürfe in `outbox/`. Veröffentlichen tut der Inhaber.
2. **Keine erfundenen Zahlen.** Jede Kennzahl im Bericht hat Quelle und Datum. Fehlt eine Quelle, steht dort "keine Daten".
3. **Kleine Zahlen ehrlich.** Unter 30 Datenpunkten keine Prozent-Trends, sondern absolute Zahlen und der Satz "zu wenig Daten für einen Trend".
4. **Vier Ergebnisse nie vermischen:** Bot-Besuch ≠ KI-Erwähnung ≠ Website-Besuch ≠ Anfrage.
5. **Inhaltsregeln der Marke** gelten für jeden Entwurf (Abschnitt 6).
6. **Kosten 0 €.** Keine bezahlten APIs. Ein Cloud-LLM nur, wenn der Inhaber es in der Konfiguration ausdrücklich einschaltet.
7. **Kundendaten bleiben lokal.** Die Anfragenliste geht nie an ein Cloud-LLM.

---

## 3. Architektur

```
systemic-marketing-agent/
├── sa_marketing/
│   ├── cli.py                 # Einstieg: `sa weekly`, `sa scan`, `sa draft <notiz>`, `sa lead add`
│   ├── config.py              # liest config.toml
│   ├── db.py                  # SQLite-Schema und Zugriffe
│   ├── collectors/
│   │   ├── gsc.py             # Search Console: API wenn möglich, sonst CSV-Import
│   │   ├── bing.py            # Bing Webmaster: CSV-Import (Leistung + AI Performance)
│   │   ├── cloudflare.py      # Cloudflare Web Analytics: GraphQL-API (kostenlos) oder CSV
│   │   ├── gbp.py             # Google-Profil: CSV/manuelle Eingabe, später API
│   │   ├── social.py          # Metricool-Export (CSV) oder Metricool-MCP
│   │   └── leads.py           # Anfragenliste (manuell gepflegt)
│   ├── checks/
│   │   ├── site_scan.py       # Seiten aus sitemap.xml: Status, Title, Description, H1, Canonical, Links
│   │   ├── lighthouse.py      # Lighthouse-CLI mobil, 3 Läufe, Median
│   │   ├── crawlers.py        # live robots.txt, KI-Crawler erlaubt/blockiert, llms.txt vorhanden?
│   │   └── claims.py          # verbotene Aussagen auf der Website finden (Abschnitt 6)
│   ├── analyze/
│   │   ├── kpis.py            # Kennzahlen je Woche, Funnel Anfrage→Auftrag
│   │   └── actions.py         # höchstens 5 Maßnahmen, regelbasiert + optional LLM-Text
│   ├── drafts/
│   │   ├── from_note.py       # Projektnotiz → 4 Entwürfe
│   │   └── templates/         # Jinja2-Vorlagen je Format
│   ├── llm.py                 # Adapter: "none" (Standard) | "ollama" | "cloud" (aus)
│   └── report.py              # Markdown-Wochenbericht
├── data/                      # SQLite, Importe (gitignored)
├── inbox/                     # CSV-Exporte hier ablegen (gitignored)
├── outbox/                    # Entwürfe und Berichte (gitignored)
├── notes/                     # Projektnotizen als Markdown (Quelle für Inhalte)
├── tests/
├── config.example.toml
└── README.md
```

**Technik:** Python 3.11+, `typer` (CLI), `sqlite3`, `httpx`, `beautifulsoup4`, `jinja2`, `pytest`. Lighthouse per `npx lighthouse`. Läuft auf Windows (`C:/Users/eku14/Desktop/Systemic Automation`), alle Pfade über `pathlib`.

**LLM:** Standard `none`: Die Maßnahmen sind regelbasiert, die Entwürfe kommen aus Vorlagen mit Lückentext. Optional `ollama` mit einem lokalen Modell für Formulierungen. Die deutsche Textqualität vorher an 5 Beispielen prüfen.

---

## 4. Datenmodell (SQLite)

```sql
CREATE TABLE metric (            -- eine Zeile je Quelle, Kennzahl, Datum, Dimension
  source TEXT,                   -- gsc | gsc_ai | bing | bing_ai | cloudflare | gbp | instagram | tiktok
  metric TEXT,                   -- clicks | impressions | ai_impressions | citations | visits | calls | views ...
  dim TEXT,                      -- Seite, Suchanfrage, Video oder '' für Gesamt
  day DATE,
  value REAL,
  imported_at TIMESTAMP,
  PRIMARY KEY (source, metric, dim, day)
);
CREATE TABLE lead (              -- Anfragen, von Hand gepflegt, bleibt lokal
  id INTEGER PRIMARY KEY,
  created DATE,
  company TEXT, contact TEXT,
  channel TEXT,                  -- netzwerk | kleinanzeigen | google_profil | website | telefon | social | linkedin | mail
  topic TEXT,                    -- belege | buchung_rechnung | messdaten | google_profil | sonstiges
  stage TEXT,                    -- anfrage | gespraech | angebot | auftrag | verloren
  value_eur REAL,
  note TEXT
);
CREATE TABLE finding (           -- Ergebnisse aus Checks
  id INTEGER PRIMARY KEY, run_at TIMESTAMP, check_name TEXT,
  url TEXT, severity TEXT, message TEXT, evidence TEXT, resolved INTEGER DEFAULT 0
);
CREATE TABLE action (            -- vorgeschlagene Maßnahmen und ihr Schicksal
  id INTEGER PRIMARY KEY, week TEXT, title TEXT, reason TEXT, source_refs TEXT,
  effort TEXT, status TEXT       -- vorgeschlagen | erledigt | verworfen
);
CREATE TABLE draft (
  id INTEGER PRIMARY KEY, created TIMESTAMP, note_file TEXT,
  kind TEXT,                     -- seite | gbp_post | reel_text | linkedin
  path TEXT, status TEXT         -- entwurf | freigegeben | veroeffentlicht
);
```

---

## 5. Funktionen und Abnahmekriterien

### Phase 1: Version 0.1 (Ziel: ein Tag Arbeit)

**F1 `sa scan`: Website-Check**
- Liest `https://systemic-automation.de/sitemap.xml`, ruft jede Seite ab.
- Prüft je Seite: HTTP-Status, Title (Länge), Description (Länge), genau eine H1, Canonical, interne Links ohne 404.
- Lighthouse mobil, 3 Läufe, Median für Performance-Score und LCP.
- Live-robots.txt: Welche KI-Crawler sind erlaubt oder blockiert? Gibt es eine llms.txt?
- `claims.py`: findet verbotene Formulierungen auf der Website (Liste in Abschnitt 6).
- *Abnahme:* Bericht `outbox/scan-JJJJ-MM-TT.md` mit Tabelle je Seite. Läuft ohne Netzwerkfehler-Absturz, Fehler werden als Befund gespeichert. Test mit lokaler HTML-Attrappe.

**F2 `sa import`: Daten einlesen**
- CSV-Importer für Search Console (Leistung, KI-Bericht), Bing (Leistung, AI Performance), Metricool-Export.
- Erkennt die Datei am Kopf, nicht am Dateinamen. Doppelte Importe überschreiben, statt zu verdoppeln.
- *Abnahme:* je Format ein Testfall mit Beispieldatei in `tests/fixtures/`.

**F3 `sa lead add`: Anfragen erfassen**
- Interaktive Eingabe oder Parameter. Stufe später per `sa lead move <id> angebot` ändern.
- *Abnahme:* Funnel-Zahlen je Kanal korrekt (Test).

**F4 `sa weekly`: Wochenbericht**
- Abschnitte: Funnel (Anfragen, Gespräche, Angebote, Aufträge, Umsatz je Kanal), Sichtbarkeit (Klicks, Impressionen, KI-Impressionen, Bing-Zitate, Website-Besuche, Social-Aufrufe), Technik (offene Befunde), **höchstens 5 Maßnahmen**.
- Maßnahmen regelbasiert, z. B.:
  - LCP mobil über 2,5 s → "Ladezeit: größtes Element verkleinern", mit Messwert.
  - Seite mit Impressionen, aber 0 Klicks → "Title/Description dieser Seite verbessern".
  - Ein Kanal mit Anfragen → "mehr davon" (z. B. Kleinanzeigen hervorheben).
  - Keine neue Unterseite seit 30 Tagen → "Aus Notiz X eine Unterseite machen".
  - Offenes Angebot ohne Bewegung seit 7 Tagen → "Nachfassen" (steht immer ganz oben).
- Jede Maßnahme mit "Warum" und "Datenquelle".
- *Abnahme:* Mit leerer Datenbank kommt ein gültiger Bericht mit "keine Daten". Mit Testdaten stimmen die Zahlen.

### Phase 2: Inhalte (nach 2 Wochen Nutzung von v0.1)

**F5 `sa draft notes/<datei>.md`: Projektnotiz → 4 Entwürfe**
- Eingabe: Notiz zu einem echten Projekt oder Prototyp (Problem, Lösung, Ergebnis, was der Mensch prüft).
- Ausgabe in `outbox/drafts/`:
  1. **Unterseite** (HTML-Abschnitt im Stil der Website: Problem, Ablauf, was es nicht tut, Aufruf, FAQ, Meta-Title und Description),
  2. **Google-Profil-Beitrag** (unter 1.500 Zeichen, ein Aufruf),
  3. **Reel-Text** (Hook unter 6 Wörtern, Bildtext, Bildunterschrift, erster Kommentar, TikTok-Titel),
  4. **LinkedIn-Beitrag**.
- Alle Entwürfe laufen durch `claims.py`. Treffer werden markiert, nicht still geändert.
- *Abnahme:* Aus `notes/beispiel-etermin-lexware.md` entstehen 4 Dateien ohne verbotene Aussagen.

**F6 Unterseiten-Generator**
- Erzeugt aus einem freigegebenen Seiten-Entwurf eine fertige HTML-Datei im Design der Website und eine aktualisierte `sitemap.xml`.
- Legt sie **nicht** selbst ins Website-Repo, sondern in `outbox/site/`. Der Inhaber übernimmt sie per Pull Request.

### Phase 3: Anschlüsse (nur wenn Phase 1 und 2 genutzt werden)

- **F7** Search-Console-API (OAuth, nur lesend), falls die KI-Daten dort verfügbar sind.
- **F8** Cloudflare-Web-Analytics über die GraphQL-API (kostenloses Token, nur lesend).
- **F9** Metricool-Statistiken automatisch statt per CSV.
- **F10** Google-Profil-API für Beiträge, erst nach Freischaltung. Auch dann nur auf Freigabe.
- **F11** Optional mcp-seo oder OpenSEO als zweite Meinung für den Scan.
- **F12** Optional Ollama für Formulierungen. Vorher A/B-Vergleich mit den Vorlagen-Texten an 5 Notizen, der Inhaber entscheidet.

---

## 6. Marken- und Inhaltsregeln (für `claims.py` und alle Entwürfe)

**Verboten:**
- Garantien ("garantiert", "100 %", "fehlerfrei"), feste Zeitersparnis als Versprechen ("spart 5 Stunden").
- "DSGVO-konform" als Pauschalaussage.
- Trefferquoten der Texterkennung nach außen.
- "DATEV-Schnittstelle". Bei Lexware nur genau das, was gebaut ist: eTermin → Lexware-Rechnungsentwurf per Webhook. Die Website-Aussage "keine direkte Schnittstelle" muss dazu passend angepasst werden.
- "KI-Berater" als Selbstbezeichnung (Kundensignal Heinze: "Ingenieur-Aufhänger sticht, kein Beratungssprech").
- Erfundene Kundenfälle.

**Pflicht:**
- Der Mensch prüft und gibt frei (in jedem Ablauf sichtbar).
- Selbstbeschreibung: "Maschinenbauingenieur aus Hamburg, der KI und Automatisierung in kleinen Firmen einrichtet".
- Aufruf: "15 Minuten kostenlos", Telefon 0173 6762711, systemic-automation.de.
- KI-Stimme oder KI-Bild sichtbar kennzeichnen (Art. 50).
- Ansprache "ihr/du" wie auf der Website.

---

## 7. Konfiguration (`config.example.toml`)

```toml
[site]
base_url = "https://systemic-automation.de"
sitemap = "https://systemic-automation.de/sitemap.xml"

[paths]
inbox = "inbox"
outbox = "outbox"
notes = "notes"
db = "data/sa.sqlite"

[llm]
provider = "none"          # none | ollama | cloud (cloud bleibt aus, außer der Inhaber stellt es um)
ollama_model = ""

[report]
max_actions = 5
min_points_for_trend = 30
stale_offer_days = 7
```

---

## 8. Arbeitsweise für Codex

1. Repo anlegen, `pyproject.toml`, `pytest` grün mit einem Platzhaltertest.
2. Phase 1 in der Reihenfolge F1 → F2 → F3 → F4. Nach jeder Funktion: Tests, ein Beispiellauf, Ergebnis in `outbox/` ansehen.
3. Keine Funktion aus Phase 2 oder 3 vor Abnahme von Phase 1.
4. Keine Zugangsdaten im Repo. `.env` und `config.toml` sind in `.gitignore`.
5. Am Ende von Phase 1: README mit 5 Befehlen, die der Inhaber jede Woche braucht.
6. Unklare externe Schnittstelle: nicht raten, CSV-Import bauen und in der README vermerken.

**Wöchentliche Routine für den Inhaber (Ziel: 20 Minuten):**
1. Exporte aus Search Console, Bing und Metricool in `inbox/` legen.
2. `sa import` → `sa scan` → `sa weekly`.
3. Neue Anfragen mit `sa lead add` eintragen.
4. Den Bericht lesen, 1 bis 2 Maßnahmen umsetzen, den Rest verwerfen.

---

## 9. Messung, ob sich der Agent lohnt

Nach 8 Wochen ehrlich prüfen:
- Hat der Bericht zu mindestens **3 umgesetzten Maßnahmen** geführt?
- Sind **mindestens 2 neue Unterseiten oder Beiträge** aus Projektnotizen entstanden?
- Kam **mindestens 1 Anfrage** über einen Kanal, den der Agent verbessert hat?

Wenn alles "nein" ist: Agent auf den Wochenbericht reduzieren oder stilllegen. Das ist ein gültiges Ergebnis.

---

## 10. Sofort-Aufgaben außerhalb des Agenten (aus der Recherche)

- Ratgeber-Entwurf anpassen: Art. 4 ist durch den Omnibus abgeschwächt, keine "Pflicht" mehr behaupten.
- Website-Aussage zu Schnittstellen an den eTermin-Lexware-Prototyp anpassen.
- Live-robots.txt prüfen, ob Cloudflare KI-Such-Crawler blockiert.
- Reels mit geklonter Stimme als KI-Stimme kennzeichnen.
- Angebot an Voget (590 €) senden. Das bleibt die wichtigste Aufgabe dieser Woche.
