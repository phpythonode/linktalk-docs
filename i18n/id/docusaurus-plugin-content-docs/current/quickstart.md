---
sidebar_position: 2
---

# Mulai Cepat

Selesaikan instalasi dan penggunaan pertama dalam lima menit.

---

## Langkah 1: Unduh

Dapatkan installer dari Baidu Netdisk:

- Tautan: https://pan.baidu.com/s/1seiuTXee6hxpfr43FKYwGg?pwd=8888
- Kode akses: `8888`

---

## Langkah 2: Instal

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="windows" label="Windows" default>

1. Ekstrak ke direktori mana saja (disarankan bukan drive sistem)
2. Path **tidak boleh mengandung karakter Mandarin**
3. Klik dua kali `語橋同声传译.exe` untuk memulai

  </TabItem>
  <TabItem value="mac" label="macOS (Apple Silicon)">

1. Setelah mengekstrak, seret file `.app` ke folder Aplikasi
2. Jika muncul "Tidak dapat memverifikasi pengembang" saat pertama kali diluncurkan:
   - Buka **Pengaturan Sistem → Privasi & Keamanan**
   - Temukan prompt terkait LinkTalk dan klik **Tetap Buka**

  </TabItem>
</Tabs>

---

## Langkah 3: Konfigurasi API

LinkTalk menggunakan Volcengine API sebagai mesin dasarnya.

1. Daftar: https://console.volcengine.com/auth/login
2. Buka konsol dan aktifkan layanan **Interpretasi Simultan**
3. Buat API Key, salin, dan tempelkan ke halaman pengaturan LinkTalk

:::tip Kredit gratis untuk pengguna baru
Volcengine memberikan **1.000.000 token gratis (sekitar 29 jam)** kepada pengguna baru.
:::

:::caution
Saat mengonfigurasi API Key, **nonaktifkan VPN atau proxy**, jika tidak koneksi mungkin gagal.
:::

---

## Langkah 4: Mulai Menerjemahkan

1. Pilih bahasa input dan output di pengaturan
2. Konfigurasi perangkat audio input (mikrofon) dan output
3. Klik Mulai, bicara ke mikrofon, terjemahan keluar secara real-time

Perlu merutekan audio terjemahan ke streaming langsung atau rapat? Lihat [Pengaturan Audio Virtual](./virtual-audio).

---

## Persyaratan Sistem

| Item | Persyaratan |
|------|-------------|
| Windows | Windows 10 / 11 (64-bit) |
| macOS | Apple Silicon (M1 / M2 / M3 / M4) |
| Audio | Mikrofon + speaker atau headphone |
| Jaringan | Latensi < 100ms disarankan |
| GPU | Tidak diperlukan |
