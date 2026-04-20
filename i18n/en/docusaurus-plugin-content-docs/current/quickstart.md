---
sidebar_position: 2
---

# Quick Start

Get up and running in five minutes.

---

## Step 1: Download

Get the installer from Baidu Netdisk:

- Link: https://pan.baidu.com/s/1seiuTXee6hxpfr43FKYwGg?pwd=8888
- Access code: `8888`

---

## Step 2: Install

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="windows" label="Windows" default>

1. Extract to any directory (non-system drive recommended)
2. The path **must not contain Chinese characters**
3. Double-click `语桥同声传译.exe` to launch

  </TabItem>
  <TabItem value="mac" label="macOS (Apple Silicon)">

1. After extracting, drag the `.app` file into the Applications folder
2. If you see "Cannot verify developer" on first launch:
   - Go to **System Settings → Privacy & Security**
   - Find the LinkTalk-related prompt and click **Open Anyway**

  </TabItem>
</Tabs>

---

## Step 3: Configure API

LinkTalk uses the Volcengine simultaneous interpretation API as its underlying engine.

1. Register: https://console.volcengine.com/auth/login
2. Open the console and activate the **Simultaneous Interpretation** service
3. Create an API Key, copy it, and paste it into LinkTalk's settings page

:::tip Free credits for new users
Volcengine gives new users **1,000,000 free tokens (approximately 29 hours)**. More than enough for everyday use — top up only when needed, no charge if unused.
:::

:::caution
When configuring your API Key, **disable any VPN or proxy**, otherwise the connection may fail.
:::

---

## Step 4: Start Translating

1. Select input and output languages in settings
2. Configure your audio input (microphone) and output device
3. Click Start, speak into the microphone, and translation outputs in real time

Need to route the translated audio into a live stream or meeting? See [Virtual Audio Setup](./virtual-audio).

---

## System Requirements

| Item | Requirement |
|------|-------------|
| Windows | Windows 10 / 11 (64-bit) |
| macOS | Apple Silicon (M1 / M2 / M3 / M4) |
| Audio | Microphone + speakers or headphones |
| Network | Latency < 100ms recommended, wired or stable Wi-Fi preferred |
| GPU | Not required — standard integrated graphics is fine |
