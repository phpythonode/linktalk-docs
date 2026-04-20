---
sidebar_position: 7
---

# FAQ

## What is the latency?

Measured first-audio latency is approximately 1.3 seconds. Most mainstream interpretation tools are around 3 seconds — LinkTalk is about 2× faster.

This latency comes from the Volcengine API's recognition and translation time plus LinkTalk's streaming playback optimization. For live streaming and meeting scenarios, 1.3 seconds is barely perceptible.

---

## Does it support Mac?

Yes. LinkTalk provides a native macOS Apple Silicon version that runs on M1/M2/M3/M4 without Rosetta translation. Intel Macs are not currently supported.

---

## How does dual-channel work?

Think of it as two completely independent translation pipelines, each with its own input, output, and audio device configuration — they never interfere with each other.

Typical usage:
- Channel A handles "I speak → they hear"
- Channel B handles "they speak → I hear"

Both run simultaneously for true bidirectional translation.

---

## How is pricing calculated?

LinkTalk itself does not charge by time or feature. Costs come from Volcengine API token consumption:

- Billed by actual audio duration
- New users receive 1,000,000 free tokens (~29 hours), more than enough to get started
- No charge if unused

---

## Is a GPU required?

No. LinkTalk's recognition and translation are all handled in the cloud. The local device only handles audio capture and playback — a standard integrated graphics laptop runs it smoothly.

---

## Does voice cloning require pre-training?

No. LinkTalk uses a real-time cloning approach — it takes effect the moment you start speaking, with no sample recording or training wait time. For deep customization of a dedicated voice, contact customer support.

---

## What languages are supported?

Currently supported: Chinese, English, Japanese, Indonesian, Spanish, Portuguese, German, French, and mixed Chinese-English mode (zhen).

More languages are in development. Submit requests in the community for priority scheduling.

---

## Can it connect to a local offline model?

Local speech recognition and TTS can be integrated, but the quality gap compared to the cloud solution is significant: local solutions require high-end hardware, have lower recognition accuracy, and produce inferior voice cloning results. LinkTalk's cloud solution outperforms current local solutions in both latency and quality.

---

## My antivirus flagged it — what should I do?

This is a false positive. Add LinkTalk to your antivirus trusted list (Huorong is recommended for Windows users).

:::caution
When configuring your API Key, **disable any VPN or proxy**, otherwise the connection may fail.
:::

---

## Contact & Support

- Technical issues / feature requests: submit via the community or the form at the bottom of the page
- Business cooperation / white-label: WeChat `dachengzionly`

[Buy Now →](https://www.dachengzionly.xyz/index/buy/CardBuyView/appid/5/index.html)
