# 🚀 Star Trek Fleet Command - Computer Bot

A custom GPT-powered Discord bot that answers questions strictly related to the mobile game Star Trek Fleet Command (STFC).
Now with **multilingual support** and internationalization (i18n).

## 🖖 Features

- GPT-4 / GPT-5 powered responses
- STFC-specific knowledge filtering
- Abuse detection and filtering
- Modular, event-driven architecture
- Redis integration for memory
- Version tracking and roadmap
- **Multilingual support** (English, German, Spanish, Ukrainian)
- Configurable fallback for unsupported languages

## ⚙️ Installation

1. Clone the repository
2. Install dependencies: `bun install`
3. Copy `.env.example` to `.env` and fill in your credentials
4. Start the bot: `bun start`

## 🌍 Multilingual Usage

The bot automatically detects the language of your question based on the input:

- Supported: English (`en`), German (`de`), Spanish (`es`), Ukrainian (`uk`)
- Unsupported languages: fallback message in English defined in config

**Example commands in different languages:**

```text
computer STFC help          # English
computer STFC hilfe         # German
computer STFC ayuda         # Spanish
computer STFC допомога       # Ukrainian
```

## 🛣️ Roadmap

| Version | Status | Features |
|---------|--------|----------|
| 1.1 | ✅ Released | Modularization, Service Layers, Redis Support |
| 1.2 | 🛠️ In Progress | Observability & Logs |
| 2.0| 📅 Planned | Internationalization |
| 2.1 | 📅 Planned | Data Lake Integration |
| 2.1.2 | 📅 Planned | Adaptive Memory & Learning |


## 📄 License

MIT License - Live long and prosper! 🖖