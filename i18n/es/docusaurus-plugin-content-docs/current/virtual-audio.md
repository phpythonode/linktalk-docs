---
sidebar_position: 5
---

# Configuración de Audio Virtual

Un dispositivo de audio virtual actúa como puente de audio entre software. LinkTalk usa un **diseño de doble canal aislado** — las dos direcciones son completamente independientes:

- **Canal A (Yo → Ellos)**: Micrófono real → reconocimiento y traducción → salida de traducción
- **Canal B (Ellos → Yo)**: Su entrada de audio → reconocimiento y traducción → su salida de traducción

---

## Herramientas

### Windows: VB-Audio Cable (gratuito, recomendado)
- Sitio oficial: https://vb-audio.com/Cable/

### macOS: BlackHole (gratuito, recomendado)
- Sitio oficial: https://existential.audio/blackhole/
- Recomendado: **BlackHole 2ch**
- O vía Homebrew: `brew install blackhole-2ch`

---

## Escenario 1: Reunión Internacional Bidireccional

**Canal A: Yo → Ellos**
```
Micrófono real → LinkTalk "Entrada de Micrófono" → reconocimiento y traducción
→ LinkTalk "Salida de Traducción" → Virtual Device A Input
→ Virtual Device A Output → Software de reunión "Entrada de Micrófono"
```

**Canal B: Ellos → Yo**
```
Ellos hablan → Software de reunión "Salida" → Virtual Device B Input
→ Virtual Device B Output → LinkTalk "Entrada de Audio de Ellos"
→ LinkTalk "Salida de Traducción de Ellos" → Auriculares reales
```

---

## Escenario 2: Streaming/Reunión Unidireccional

| Software | Configuración | Dispositivo |
|----------|--------------|-------------|
| LinkTalk | Entrada de Micrófono | Micrófono real |
| LinkTalk | Salida de Traducción | Virtual Device A Input |
| OBS / Software de reunión | Entrada de Micrófono | Virtual Device A Output |
