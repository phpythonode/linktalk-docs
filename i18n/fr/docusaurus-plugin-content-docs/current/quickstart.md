---
sidebar_position: 2
---

# Démarrage Rapide

Terminez l'installation et la première utilisation en cinq minutes.

---

## Étape 1 : Télécharger

Obtenez l'installateur depuis Baidu Netdisk :

- Lien : https://pan.baidu.com/s/1seiuTXee6hxpfr43FKYwGg?pwd=8888
- Code d'accès : `8888`

---

## Étape 2 : Installer

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="windows" label="Windows" default>

1. Extraire dans n'importe quel répertoire (lecteur non-système recommandé)
2. Le chemin **ne doit pas contenir de caractères chinois**
3. Double-cliquer sur `語橋同声传译.exe` pour lancer

  </TabItem>
  <TabItem value="mac" label="macOS (Apple Silicon)">

1. Après extraction, glisser le fichier `.app` dans le dossier Applications
2. Si "Impossible de vérifier le développeur" apparaît au premier lancement :
   - Aller dans **Réglages Système → Confidentialité et sécurité**
   - Trouver l'invite liée à LinkTalk et cliquer sur **Ouvrir quand même**

  </TabItem>
</Tabs>

---

## Étape 3 : Configurer l'API

LinkTalk utilise l'API Volcengine comme moteur de base.

1. S'inscrire : https://console.volcengine.com/auth/login
2. Ouvrir la console et activer le service d'**Interprétation Simultanée**
3. Créer une clé API, la copier et la coller dans la page de paramètres de LinkTalk

:::tip Crédits gratuits pour les nouveaux utilisateurs
Volcengine accorde **1 000 000 de tokens gratuits (environ 29 heures)** aux nouveaux utilisateurs.
:::

:::caution
Lors de la configuration de votre clé API, **désactivez tout VPN ou proxy**, sinon la connexion peut échouer.
:::

---

## Étape 4 : Commencer à Traduire

1. Sélectionner les langues d'entrée et de sortie dans les paramètres
2. Configurer le périphérique d'entrée audio (microphone) et le périphérique de sortie
3. Cliquer sur Démarrer, parler au microphone, la traduction sort en temps réel

---

## Configuration Requise

| Élément | Exigence |
|---------|----------|
| Windows | Windows 10 / 11 (64 bits) |
| macOS | Apple Silicon (M1 / M2 / M3 / M4) |
| Audio | Microphone + haut-parleurs ou casque |
| Réseau | Latence < 100ms recommandée |
| GPU | Non requis |
