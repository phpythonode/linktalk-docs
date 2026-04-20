---
sidebar_position: 5
---

# Virtuelle Audio-Einrichtung

Ein virtuelles Audiogerät fungiert als Audio-Brücke zwischen Software. LinkTalk verwendet ein **Dual-Channel-Isolierungsdesign** — die zwei Richtungen sind vollständig unabhängig:

- **Kanal A (Ich → Sie)**: Echtes Mikrofon → Erkennung & Übersetzung → Übersetzungsausgabe
- **Kanal B (Sie → Ich)**: Ihre Audioeingabe → Erkennung & Übersetzung → Ihre Übersetzungsausgabe

---

## Werkzeuge

### Windows: VB-Audio Cable (kostenlos, empfohlen)
- Offizielle Website: https://vb-audio.com/Cable/

### macOS: BlackHole (kostenlos, empfohlen)
- Offizielle Website: https://existential.audio/blackhole/
- Empfohlen: **BlackHole 2ch**
- Oder via Homebrew: `brew install blackhole-2ch`

---

## Szenario 1: Bidirektionales Internationales Meeting

**Kanal A: Ich → Sie**
```
Echtes Mikrofon → LinkTalk "Mikrofon-Eingang" → Erkennung & Übersetzung
→ LinkTalk "Übersetzungsausgabe" → Virtual Device A Input
→ Virtual Device A Output → Meeting-Software "Mikrofon-Eingang"
```

**Kanal B: Sie → Ich**
```
Sie sprechen → Meeting-Software "Ausgabe" → Virtual Device B Input
→ Virtual Device B Output → LinkTalk "Ihre Audio-Eingabe"
→ LinkTalk "Ihre Übersetzungsausgabe" → Echte Kopfhörer
```

---

## Szenario 2: Einseitiges Streaming/Meeting

| Software | Einstellung | Gerät |
|----------|------------|-------|
| LinkTalk | Mikrofon-Eingang | Echtes Mikrofon |
| LinkTalk | Übersetzungsausgabe | Virtual Device A Input |
| OBS / Meeting-Software | Mikrofon-Eingang | Virtual Device A Output |
