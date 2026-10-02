# 🎮 Mini Games

A React-based collection of small browser games built to practice interactive UI, state management, timing, randomization, and reusable JavaScript logic.

<p align="center">
  <a href="https://mini-games-two-rho.vercel.app">
    <img src="https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel" alt="Live Demo">
  </a>
  <a href="https://github.com/shukladhruve777-blip/Mini_Games">
    <img src="https://img.shields.io/badge/Source%20Code-GitHub-181717?style=for-the-badge&logo=github" alt="Source Code">
  </a>
</p>

> **Try it in your browser:** [mini-games-two-rho.vercel.app](https://mini-games-two-rho.vercel.app)

---

## ✨ Project Overview

Mini Games is a browser-based React application containing three interactive games:

- **Number Match** — choose numbers and test matching logic.
- **Higher or Lower** — predict the target number using repeated guesses.
- **Reaction Time** — wait for the correct signal and measure reaction speed.

The application uses a shared menu and separate game components so each experience can be developed and maintained independently.

## 🎯 Key Features

- 🎮 Three playable games in one application
- 🧭 Simple game-selection menu
- ⚛️ React state management with `useState`
- 🎲 Random number and game generation
- ⏱️ Timer-based gameplay
- 🔄 Play Again / Reset functionality
- ↩️ Return-to-menu navigation
- 🧩 Reusable JavaScript utility logic
- 🛠️ Vite development and production builds
- ✅ ESLint configuration for code quality

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React** | Component-based UI and state management |
| **JavaScript** | Game logic, events, randomization and timers |
| **Vite** | Development server and production builds |
| **CSS** | Responsive styling and game interface |

## 🖥️ Screenshots

### Game Selection

![Mini Games menu](screenshots/screen-1.png)

### Higher or Lower

![Higher or Lower gameplay](screenshots/screen-2.png)

### Higher or Lower — Result

![Higher or Lower result](screenshots/screen-3.png)

### Number Match

![Number Match gameplay](screenshots/screen-4.png)

### Reaction Time — Waiting State

![Reaction Time waiting state](screenshots/screen-5.png)

### Reaction Time — Result

![Reaction Time result](screenshots/screen-6.png)

## 🧠 What I Practiced

This project helped me develop practical experience with:

- React component design
- State management and conditional rendering
- Event handling
- JavaScript arrays and functions
- Randomization
- Timers and asynchronous behaviour
- Reusable utility functions
- Organizing multiple interactive features inside one application
- Building and deploying a frontend application

## 🔄 Application Structure

```text
                    Mini Games
                        │
                 Game Selection
                /       |        \
               /        |         \
      Number Match  Higher/Lower  Reaction Time
             │          │              │
             └──────────┴──────────────┘
                    React State
                         │
                  Shared Utilities
```

## 📁 Project Structure

```text
Mini_Games/
└── react/
    ├── src/
    │   ├── games/
    │   ├── utils/
    │   ├── App.jsx
    │   ├── App.css
    │   └── main.jsx
    ├── package.json
    └── vite.config.js
```

## 🚀 Run Locally

```bash
git clone https://github.com/shukladhruve777-blip/Mini_Games.git
cd Mini_Games/react
npm install
npm run dev
```

Then open the local URL shown in the terminal.

### Available Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## 📌 Project Status

The application currently contains three playable games and a shared game-selection interface.

## 🔮 Possible Next Steps

- Persistent high scores
- Difficulty levels
- Scoring and streak systems
- Keyboard accessibility improvements
- Automated tests
- Additional mini games

---

### 🔗 Links

**Live Demo:** https://mini-games-two-rho.vercel.app  
**GitHub Repository:** https://github.com/shukladhruve777-blip/Mini_Games

**Built with React • JavaScript • Vite • CSS**
