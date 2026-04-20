---
sidebar_position: 2
---

# Inicio Rápido

Completa la instalación y el primer uso en cinco minutos.

---

## Paso 1: Descargar

Obtén el instalador desde Baidu Netdisk:

- Enlace: https://pan.baidu.com/s/1seiuTXee6hxpfr43FKYwGg?pwd=8888
- Código de acceso: `8888`

---

## Paso 2: Instalar

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="windows" label="Windows" default>

1. Extrae a cualquier directorio (se recomienda una unidad que no sea del sistema)
2. La ruta **no debe contener caracteres chinos**
3. Haz doble clic en `語橋同声传译.exe` para iniciar

  </TabItem>
  <TabItem value="mac" label="macOS (Apple Silicon)">

1. Después de extraer, arrastra el archivo `.app` a la carpeta Aplicaciones
2. Si aparece "No se puede verificar el desarrollador" al primer inicio:
   - Ve a **Configuración del Sistema → Privacidad y Seguridad**
   - Encuentra el aviso relacionado con LinkTalk y haz clic en **Abrir de todos modos**

  </TabItem>
</Tabs>

---

## Paso 3: Configurar API

LinkTalk utiliza la API de Volcengine como motor base.

1. Regístrate: https://console.volcengine.com/auth/login
2. Abre la consola y activa el servicio de **Interpretación Simultánea**
3. Crea una API Key, cópiala y pégala en la página de configuración de LinkTalk

:::tip Créditos gratuitos para nuevos usuarios
Volcengine otorga **1.000.000 de tokens gratuitos (aproximadamente 29 horas)** a los nuevos usuarios.
:::

:::caution
Al configurar tu API Key, **desactiva cualquier VPN o proxy**, de lo contrario la conexión puede fallar.
:::

---

## Paso 4: Comenzar a Traducir

1. Selecciona los idiomas de entrada y salida en la configuración
2. Configura tu dispositivo de entrada de audio (micrófono) y dispositivo de salida
3. Haz clic en Iniciar, habla al micrófono y la traducción sale en tiempo real

---

## Requisitos del Sistema

| Elemento | Requisito |
|----------|-----------|
| Windows | Windows 10 / 11 (64 bits) |
| macOS | Apple Silicon (M1 / M2 / M3 / M4) |
| Audio | Micrófono + altavoces o auriculares |
| Red | Latencia < 100ms recomendada |
| GPU | No requerida |
