# 🖖 Star Trek Fleet Command Discord Bot — "Computer"

A custom GPT-powered Discord bot named **"Computer"**, designed exclusively for the **ÐŘÅŠ- Ðemons's Řed ÅŠhes🍁Alliance** Discord server. It answers questions strictly related to the mobile game **Star Trek Fleet Command (STFC)** using OpenAI's GPT-4.

---

## 🎮 What It Does

This bot emulates the voice assistant from Star Trek and responds intelligently to STFC-related questions.

- 💬 Ask about officers, ships, crew synergy, armadas, missions, events, and more
- 🔐 Filters out abusive or off-topic messages
- 🎯 Purpose-built for **STFC only**
- 🛡️ Moderated with keyword filtering and input validation
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

### 1. Clone the Project

```bash
git clone https://github.com/yourusername/stfc-computer-bot.git
cd stfc-computer-bot
```

### 2. Install Bun (if not already installed)

```bash
curl -fsSL https://bun.sh/install | bash
```

### 3. Install Dependencies

```bash
bun install
```

### 4. Create a `.env` File

```env
DISCORD_TOKEN=your_discord_bot_token
OPENAI_API_KEY=your_openai_api_key
```

### 5. Run the Bot

```bash
bun index.ts
```

---

## 🛠 Features

- 🧠 Powered by GPT-4 (OpenAI Chat API)
- 🔍 STFC-specific keyword filtering
- 🚫 Profanity and abuse filtering
- 📘 Built-in help command
- 🧪 Typed with TypeScript
- 🧵 Supports text-based Discord channels only

---

## 🤖 Help Command

Typing:

```
computer help
```

Returns instructions on how to use the bot, with sample queries and limitations.

---

## 🤝 Credits

This bot is developed and maintained for the **ÐŘÅŠ- Ðemons's Řed ÅŠhes🍁Alliance** Discord server — a hub for elite captains in the galaxy of *Star Trek Fleet Command*.

> *"I'm afraid I can only assist with matters related to Star Trek Fleet Command."* — `Computer`

Live long and prosper. 🖖