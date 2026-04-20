---
sidebar_position: 5
---

# Virtual Audio Setup

A virtual audio device acts as a software audio bridge, following the rule: **Input receives audio → Output sends audio**. LinkTalk uses a **dual-channel isolated design** — the two directions are completely independent and never interfere:

- **Channel A (Me → Them)**: Real microphone → recognition & translation → translated output (sent to meeting/stream)
- **Channel B (Them → Me)**: Their audio input → recognition & translation → their translated output (heard locally)

:::tip Core principle
My translation goes through one virtual audio device; their translation goes through another. **Completely isolated, never crossed.**
:::

---

## How Many Virtual Audio Devices Do You Need?

| Scenario | Quantity | Recommended |
|----------|----------|-------------|
| Simple test (one-way) | 1 | Test only "Me → Them" or "Them → Me" |
| One-way live stream / meeting | 1 | Send my translated voice to audience / meeting |
| Bidirectional international meeting | 2 | Fully isolate both directions, no crosstalk |
| Complex multi-stream scenario | 3+ | Assign an independent virtual device per direction |

---

## Tools

### Windows: VB-Audio Cable (free, recommended)

Download Cable A and Cable B. After installation, the system automatically recognizes them as two independent virtual audio devices — lightweight and ad-free.

- Official site: https://vb-audio.com/Cable/
- Optional: [VoiceMeeter Banana](https://vb-audio.com/Voicemeeter/) (visual debugging, useful for diagnosing silence or crosstalk)

### macOS: BlackHole (free, recommended)

BlackHole is the most popular virtual audio device on Mac, with native Apple Silicon support (M1/M2/M3/M4).

- Official site: https://existential.audio/blackhole/
- Recommended: **BlackHole 2ch**
- Also installable via Homebrew:
  ```bash
  brew install blackhole-2ch
  ```

:::tip Mac dual-device setup
For bidirectional meetings requiring two independent virtual devices, install BlackHole 2ch + BlackHole 16ch for the two channels, or create an Aggregate Device in **Audio MIDI Setup**.
:::

---

## Scenario 1: Bidirectional International Meeting (Full Two-Way Translation)

**Goal**: I speak → translated audio sent to the other party; they speak → translated audio heard by me. Both directions fully isolated.

**Required**: Virtual Device A (my translation → meeting) + Virtual Device B (their audio → interpretation) + real microphone + headphones

**Channel A: Me → Them**

```
Real microphone → LinkTalk "Mic Input" → recognition & translation
→ LinkTalk "Translation Output" → Virtual Device A Input
→ Virtual Device A Output → Meeting software "Mic Input" → they hear the translation
```

**Channel B: Them → Me**

```
They speak → Meeting software "Output Device" → Virtual Device B Input
→ Virtual Device B Output → LinkTalk "Their Audio Input" → recognition & translation
→ LinkTalk "Their Translation Output" → Real headphones → I hear the translation
```

**Configuration Reference**

| Software | Setting | Device |
|----------|---------|--------|
| LinkTalk | Mic Input | Real microphone |
| LinkTalk | Translation Output | Virtual Device A Input |
| LinkTalk | My Translation Playback | Off (avoid echo) |
| LinkTalk | Their Audio Input | Virtual Device B Output |
| LinkTalk | Their Translation Output | Real headphones |
| Meeting software | Mic Input | Virtual Device A Output |
| Meeting software | Output Device | Virtual Device B Input |

---

## Scenario 2: One-Way Live Stream / Meeting (Me → Them)

Suitable for presentations and live commerce — only your translated voice needs to be sent out; no need to process the other party's audio.

| Software | Setting | Device |
|----------|---------|--------|
| LinkTalk | Mic Input | Real microphone |
| LinkTalk | Translation Output | Virtual Device A Input |
| LinkTalk | My Translation Playback | Off |
| OBS / Meeting software | Mic Input | Virtual Device A Output |

---

## Common Mistakes

**❌ Mistake 1: Using the same virtual device for both channels → feedback loop**

If your translation output and their audio input use the same virtual device, the translated audio gets re-captured repeatedly, causing echo explosion.  
✅ Fix: The two channels **must** use **different** virtual audio devices.

**❌ Mistake 2: Meeting software mic set to real microphone → sends original audio**

The other party hears the untranslated original, defeating the purpose of simultaneous interpretation.  
✅ Fix: The meeting software mic **must** be set to **Virtual Device A Output**.

**❌ Mistake 3: Their translation output set to a virtual device → crosstalk into meeting**

Their translated audio gets picked up by the meeting software and sent out, causing crosstalk.  
✅ Fix: Their translation output **must** be set to **real headphones** for local playback only.
