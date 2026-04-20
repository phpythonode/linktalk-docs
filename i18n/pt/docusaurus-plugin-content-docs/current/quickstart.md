---
sidebar_position: 2
---

# Início Rápido

Conclua a instalação e o primeiro uso em cinco minutos.

---

## Passo 1: Baixar

Obtenha o instalador do Baidu Netdisk:

- Link: https://pan.baidu.com/s/1seiuTXee6hxpfr43FKYwGg?pwd=8888
- Código de acesso: `8888`

---

## Passo 2: Instalar

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="windows" label="Windows" default>

1. Extraia para qualquer diretório (recomenda-se uma unidade que não seja do sistema)
2. O caminho **não deve conter caracteres chineses**
3. Clique duas vezes em `語橋同声传译.exe` para iniciar

  </TabItem>
  <TabItem value="mac" label="macOS (Apple Silicon)">

1. Após extrair, arraste o arquivo `.app` para a pasta Aplicativos
2. Se aparecer "Não é possível verificar o desenvolvedor" no primeiro lançamento:
   - Vá para **Configurações do Sistema → Privacidade e Segurança**
   - Encontre o aviso relacionado ao LinkTalk e clique em **Abrir Mesmo Assim**

  </TabItem>
</Tabs>

---

## Passo 3: Configurar API

LinkTalk usa a API Volcengine como motor base.

1. Registre-se: https://console.volcengine.com/auth/login
2. Abra o console e ative o serviço de **Interpretação Simultânea**
3. Crie uma API Key, copie e cole na página de configurações do LinkTalk

:::tip Créditos gratuitos para novos usuários
Volcengine concede **1.000.000 de tokens gratuitos (aproximadamente 29 horas)** a novos usuários.
:::

:::caution
Ao configurar sua API Key, **desative qualquer VPN ou proxy**, caso contrário a conexão pode falhar.
:::

---

## Passo 4: Começar a Traduzir

1. Selecione os idiomas de entrada e saída nas configurações
2. Configure seu dispositivo de entrada de áudio (microfone) e dispositivo de saída
3. Clique em Iniciar, fale ao microfone e a tradução sai em tempo real

---

## Requisitos do Sistema

| Item | Requisito |
|------|-----------|
| Windows | Windows 10 / 11 (64 bits) |
| macOS | Apple Silicon (M1 / M2 / M3 / M4) |
| Áudio | Microfone + alto-falantes ou fones de ouvido |
| Rede | Latência < 100ms recomendada |
| GPU | Não necessária |
