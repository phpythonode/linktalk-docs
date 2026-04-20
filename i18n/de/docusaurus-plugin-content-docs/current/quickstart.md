---
sidebar_position: 2
---

# Schnellstart

Schließen Sie Installation und erste Nutzung in fünf Minuten ab.

---

## Schritt 1: Herunterladen

Holen Sie sich den Installer von Baidu Netdisk:

- Link: https://pan.baidu.com/s/1seiuTXee6hxpfr43FKYwGg?pwd=8888
- Zugangscode: `8888`

---

## Schritt 2: Installieren

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="windows" label="Windows" default>

1. In ein beliebiges Verzeichnis entpacken (Nicht-Systemlaufwerk empfohlen)
2. Der Pfad **darf keine chinesischen Zeichen enthalten**
3. Doppelklick auf `語橋同声传译.exe` zum Starten

  </TabItem>
  <TabItem value="mac" label="macOS (Apple Silicon)">

1. Nach dem Entpacken die `.app`-Datei in den Ordner Programme ziehen
2. Wenn beim ersten Start "Entwickler kann nicht verifiziert werden" erscheint:
   - Gehen Sie zu **Systemeinstellungen → Datenschutz & Sicherheit**
   - Finden Sie den LinkTalk-Hinweis und klicken Sie auf **Trotzdem öffnen**

  </TabItem>
</Tabs>

---

## Schritt 3: API konfigurieren

LinkTalk verwendet die Volcengine API als Basismotor.

1. Registrieren: https://console.volcengine.com/auth/login
2. Konsole öffnen und **Simultandolmetschung**-Dienst aktivieren
3. API-Schlüssel erstellen, kopieren und in die LinkTalk-Einstellungsseite einfügen

:::tip Kostenlose Credits für neue Nutzer
Volcengine gewährt neuen Nutzern **1.000.000 kostenlose Token (ca. 29 Stunden)**.
:::

:::caution
Beim Konfigurieren Ihres API-Schlüssels **deaktivieren Sie VPN oder Proxy**, sonst kann die Verbindung fehlschlagen.
:::

---

## Schritt 4: Übersetzen beginnen

1. Eingabe- und Ausgabesprachen in den Einstellungen auswählen
2. Audio-Eingabegerät (Mikrofon) und Ausgabegerät konfigurieren
3. Start klicken, ins Mikrofon sprechen, Übersetzung kommt in Echtzeit

---

## Systemanforderungen

| Element | Anforderung |
|---------|-------------|
| Windows | Windows 10 / 11 (64-Bit) |
| macOS | Apple Silicon (M1 / M2 / M3 / M4) |
| Audio | Mikrofon + Lautsprecher oder Kopfhörer |
| Netzwerk | Latenz < 100ms empfohlen |
| GPU | Nicht erforderlich |
