# 🖖 STFC Discord Bot - "Computer"

This is a Star Trek Fleet Command (STFC)-focused Discord bot powered by OpenAI, built with TypeScript and Discord.js.

## 🔧 Features

- Responds only to Star Trek Fleet Command questions
- GPT-4 powered Q&A via OpenAI API
- Abuse filtering and query validation
- Redis-powered user memory (optional)
- Easter eggs for community lore
- Pluggable service-oriented architecture
- CLI and PM2 ready for production

---

## 🚀 Roadmap

### ✅ v1.0 - MVP (Done)
- Discord bot integration with OpenAI GPT-4
- Message filtering and abuse detection
- In-chat help command
- Keyword-based STFC relevance checking

### 🔁 v1.1 - Modularization (Done)
- Service layer (openAIService, loggerService, memoryService)
- Configuration via dotenv
- Redis support for message memory

### 🔍 v1.2 - Observability & Logs (In Progress)
- Log all message/response pairs to JSONL or PostgreSQL
- Optional admin metrics (usage count, errors)
- PM2 logs + optional sentry integration

### 🌊 v1.3 - Data Lake Integration (Planned)
- Write messages to `interactions.parquet` and S3-compatible storage
- Integrate DuckDB for querying chat history
- Prompt training using past user inputs
- Export CSV/Parquet for ML training

### 🧠 v1.4 - Adaptive Memory & Learning (Planned)
- Redis for per-user short-term memory
- Automatic conversation summarization
- "Teach Computer" command to submit facts

### 🌐 v1.5 - Internationalization (Planned)
- Auto-detect language using GPT or LangDetect
- Multilingual response support (STFC context only)
- Community translations for help text and features

---

## 📦 Installation

```bash
bun install
cp .env.example .env
bun run dev
```

### Required ENV variables

```
DISCORD_TOKEN=your-bot-token-here
OPENAI_API_KEY=your-openai-key-here
REDIS_URL=redis://localhost:6379  # optional
```

## 📁 Structure

```
src/
├── index.ts            # Bot entry point
├── abuseFilter.ts      # Message filter logic
├── services/
│   ├── openaiService.ts
│   ├── loggerService.ts
│   └── memoryService.ts
└── data/               # Interaction logs (JSONL, parquet)
```

## 🤝 Contributing

Pull requests welcome! Please fork and make your changes in a feature branch.

## 📜 License

MIT – Starfleet regulations approved.

_Live long and prosper 🖖_