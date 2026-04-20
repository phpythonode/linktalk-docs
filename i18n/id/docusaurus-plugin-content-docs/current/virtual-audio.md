---
sidebar_position: 5
---

# Pengaturan Audio Virtual

Perangkat audio virtual bertindak sebagai jembatan audio perangkat lunak. LinkTalk menggunakan **desain dual-channel terisolasi** — dua arah sepenuhnya independen:

- **Channel A (Saya → Mereka)**: Mikrofon nyata → pengenalan & terjemahan → output terjemahan
- **Channel B (Mereka → Saya)**: Input audio mereka → pengenalan & terjemahan → output terjemahan mereka

:::tip Prinsip inti
Terjemahan saya melalui satu perangkat audio virtual; terjemahan mereka melalui yang lain. **Sepenuhnya terisolasi, tidak pernah bersilang.**
:::

---

## Berapa Banyak Perangkat Audio Virtual yang Dibutuhkan?

| Skenario | Jumlah | Rekomendasi |
|----------|--------|-------------|
| Tes sederhana (satu arah) | 1 | Hanya tes "Saya → Mereka" |
| Streaming/rapat satu arah | 1 | Kirim suara terjemahan saya ke audiens |
| Rapat internasional dua arah | 2 | Isolasi penuh kedua arah |

---

## Alat

### Windows: VB-Audio Cable (gratis, direkomendasikan)

- Situs resmi: https://vb-audio.com/Cable/

### macOS: BlackHole (gratis, direkomendasikan)

- Situs resmi: https://existential.audio/blackhole/
- Direkomendasikan: **BlackHole 2ch**
- Atau via Homebrew: `brew install blackhole-2ch`

---

## Skenario 1: Rapat Internasional Dua Arah

**Channel A: Saya → Mereka**
```
Mikrofon nyata → LinkTalk "Input Mikrofon" → pengenalan & terjemahan
→ LinkTalk "Output Terjemahan" → Virtual Device A Input
→ Virtual Device A Output → Perangkat lunak rapat "Input Mikrofon"
```

**Channel B: Mereka → Saya**
```
Mereka bicara → Perangkat lunak rapat "Output" → Virtual Device B Input
→ Virtual Device B Output → LinkTalk "Input Audio Mereka"
→ LinkTalk "Output Terjemahan Mereka" → Headphone nyata
```

---

## Skenario 2: Streaming/Rapat Satu Arah

| Perangkat Lunak | Pengaturan | Perangkat |
|----------------|-----------|-----------|
| LinkTalk | Input Mikrofon | Mikrofon nyata |
| LinkTalk | Output Terjemahan | Virtual Device A Input |
| OBS / Perangkat lunak rapat | Input Mikrofon | Virtual Device A Output |
