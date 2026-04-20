---
sidebar_position: 5
---

# Configuração de Áudio Virtual

Um dispositivo de áudio virtual atua como ponte de áudio entre softwares. LinkTalk usa um **design de canal duplo isolado** — as duas direções são completamente independentes:

- **Canal A (Eu → Eles)**: Microfone real → reconhecimento e tradução → saída de tradução
- **Canal B (Eles → Eu)**: Entrada de áudio deles → reconhecimento e tradução → saída de tradução deles

---

## Ferramentas

### Windows: VB-Audio Cable (gratuito, recomendado)
- Site oficial: https://vb-audio.com/Cable/

### macOS: BlackHole (gratuito, recomendado)
- Site oficial: https://existential.audio/blackhole/
- Recomendado: **BlackHole 2ch**
- Ou via Homebrew: `brew install blackhole-2ch`

---

## Cenário 1: Reunião Internacional Bidirecional

**Canal A: Eu → Eles**
```
Microfone real → LinkTalk "Entrada de Microfone" → reconhecimento e tradução
→ LinkTalk "Saída de Tradução" → Virtual Device A Input
→ Virtual Device A Output → Software de reunião "Entrada de Microfone"
```

**Canal B: Eles → Eu**
```
Eles falam → Software de reunião "Saída" → Virtual Device B Input
→ Virtual Device B Output → LinkTalk "Entrada de Áudio Deles"
→ LinkTalk "Saída de Tradução Deles" → Fones de ouvido reais
```

---

## Cenário 2: Streaming/Reunião Unidirecional

| Software | Configuração | Dispositivo |
|----------|--------------|-------------|
| LinkTalk | Entrada de Microfone | Microfone real |
| LinkTalk | Saída de Tradução | Virtual Device A Input |
| OBS / Software de reunião | Entrada de Microfone | Virtual Device A Output |
