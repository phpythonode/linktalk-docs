---
sidebar_position: 5
---

# Configuration Audio Virtuelle

Un périphérique audio virtuel agit comme pont audio entre logiciels. LinkTalk utilise un **design à double canal isolé** — les deux directions sont complètement indépendantes :

- **Canal A (Moi → Eux)** : Microphone réel → reconnaissance et traduction → sortie de traduction
- **Canal B (Eux → Moi)** : Leur entrée audio → reconnaissance et traduction → leur sortie de traduction

---

## Outils

### Windows : VB-Audio Cable (gratuit, recommandé)
- Site officiel : https://vb-audio.com/Cable/

### macOS : BlackHole (gratuit, recommandé)
- Site officiel : https://existential.audio/blackhole/
- Recommandé : **BlackHole 2ch**
- Ou via Homebrew : `brew install blackhole-2ch`

---

## Scénario 1 : Réunion Internationale Bidirectionnelle

**Canal A : Moi → Eux**
```
Microphone réel → LinkTalk "Entrée Microphone" → reconnaissance et traduction
→ LinkTalk "Sortie Traduction" → Virtual Device A Input
→ Virtual Device A Output → Logiciel de réunion "Entrée Microphone"
```

**Canal B : Eux → Moi**
```
Ils parlent → Logiciel de réunion "Sortie" → Virtual Device B Input
→ Virtual Device B Output → LinkTalk "Entrée Audio Eux"
→ LinkTalk "Sortie Traduction Eux" → Casque réel
```

---

## Scénario 2 : Streaming/Réunion Unidirectionnel

| Logiciel | Paramètre | Périphérique |
|----------|-----------|--------------|
| LinkTalk | Entrée Microphone | Microphone réel |
| LinkTalk | Sortie Traduction | Virtual Device A Input |
| OBS / Logiciel de réunion | Entrée Microphone | Virtual Device A Output |
