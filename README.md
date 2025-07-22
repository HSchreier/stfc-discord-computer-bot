# 🖖 Star Trek Fleet Command Discord Bot — "Computer"

A custom GPT-powered Discord bot named **"Computer"**
It answers questions strictly related to the mobile game **Star Trek Fleet Command (STFC)** using OpenAI's GPT-4.

---

## 🎮 What It Does

This bot emulates the voice assistant from Star Trek and responds intelligently to STFC-related questions.

- 💬 Ask about officers, ships, crew synergy, armadas, missions, events, and more
- 🔐 Filters out abusive or off-topic messages
- 🎯 Purpose-built for **STFC only**
- 🛡️ Uses a profanity filter powered by the `naughty-words` package
- 🆘 Includes a built-in `help` command for user guidance

---

## 💡 Usage

In any channel where the bot is active, start your message with:

```
computer <your question>
```

### 📘 Example Commands

```
computer what's the best crew for solo armadas?
computer how do I unlock the Jellyfish?
computer help
```

---

## ⚙️ Setup Instructions

### 1. Requirements

- **Node.js:** v22.14.0
- **npm:** v10.9.2
- **Bun:** v1.2.4
- **OpenAI API Key** (GPT-4 access required)
- **Discord Bot Token**

---

### 2. Clone the Project

```bash
git clone https://github.com/yourusername/stfc-computer-bot.git
cd stfc-computer-bot
```

---

### 3. Install Bun (if not already installed)

```bash
curl -fsSL https://bun.sh/install | bash
```

---

### 4. Install Dependencies

```bash
bun install
```

---

### 5. Configure Environment

Create a `.env` file in the root:

```env
DISCORD_TOKEN=your_discord_bot_token
OPENAI_API_KEY=your_openai_api_key
```

---

### 6. Start the Bot

```bash
bun index.ts
```

---

## 🛠 Features

- 🧠 Powered by GPT-4 (OpenAI Chat API)
- 🔍 STFC-specific keyword filtering
- 🚫 Profanity and abuse filtering via `naughty-words`
- 📘 Built-in help command
- 🧪 Typed with TypeScript
- 🧵 Supports only text-based Discord channels

---

## 🛡️ Abuse Filter

This bot uses a precompiled set of English-language profane and inappropriate words via:

- [`naughty-words`](https://www.npmjs.com/package/naughty-words) package
- Words are loaded into a Set and checked with `.includes()` logic
- Detected bad input is blocked and the user is notified

The filter can be extended to use remote or multi-language sources in the future.

---

## 🤖 Help Command

Typing:

```
computer help
```

Returns instructions on how to use the bot, with sample queries and limitations.


## 🤝 Credits

This bot is developed and maintained by r3d1c3

> *"I'm afraid I can only assist with matters related to Star Trek Fleet Command."* — `Computer`

Live long and prosper. 🖖

