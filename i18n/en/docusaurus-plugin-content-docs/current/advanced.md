---
sidebar_position: 4
---

# Advanced Usage

---

## Integration with OBS / Streaming Software

Routing LinkTalk's translation output into OBS enables:

- Real-time bilingual subtitles overlaid on your video
- Simultaneous translation during game streams without switching windows
- Multi-track audio recording for flexible post-production

Setup: LinkTalk translation output → virtual audio device → OBS audio input source. Add a subtitle plugin in OBS to read LinkTalk's subtitle output.

---

## Dual-Channel Independent Language Pair Configuration

The two channels can be configured with completely different language pairs, for example:

- Channel A: Chinese → English (for Western audiences)
- Channel B: Chinese → Japanese (for Japanese audiences)

Both run simultaneously, each bound to its own independent audio output device, without interfering with each other. Ideal for running multiple language-specific live streams at the same time.

---

## Mixed Chinese-English Recognition (zhen Mode)

Select `zhen` in the language settings and LinkTalk will automatically recognize mixed Chinese-English input without requiring manual language switching.

Ideal for:
- Tech live streams (heavy use of English terms mixed with Chinese)
- Business meetings with mixed Chinese and foreign participants
- Content creators who frequently switch between Chinese and English

---

## Voice Switching

LinkTalk supports switching voice presets during translation without restarting. You can choose a more formal or more casual voice style depending on the platform or audience.
