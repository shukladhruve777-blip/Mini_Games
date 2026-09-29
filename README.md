# QuickGame

A React-based collection of small browser games built to practice interactive UI, state management, timing, randomization, and reusable JavaScript logic.

## 🎮 Games

| Game | What it tests |
|---|---|
| **Number Match** | Memory, ordering, and user input |
| **Higher or Lower** | Prediction and game state |
| **Reaction Time** | Timing and user interaction |

## ✨ Features

- 3 playable browser games
- Simple game selection menu
- Separate React component for each game
- React state management with `useState`
- Random number and game generation
- Timer-based gameplay
- Reset and back-to-menu functionality
- Reusable utility functions
- ESLint for code quality
- Vite development and production builds

## 🛠️ Tech Stack

- **React**
- **JavaScript**
- **Vite**
- **CSS**

## 📁 Project Structure

```
QuickGame/
└── react/
    ├── src/
    │   ├── games/
    │   │   ├── HigherLower.jsx
    │   │   ├── NumberMatch.jsx
    │   │   └── ReactionTime.jsx
    │   │
    │   ├── utils/
    │   │   ├── gameData.js
    │   │   └── timeUtils.js
    │   │
    │   ├── App.jsx
    │   ├── App.css
    │   └── main.jsx
    │
    ├── package.json
    └── vite.config.js
```

## 🧠 What I Practiced

This project helped me practice:

- React component design
- State management
- Conditional rendering
- Event handling
- JavaScript arrays and functions
- Randomization
- Timers and asynchronous behavior
- Reusable utility functions
- Organizing multiple features inside one React application

## 🔄 Application Structure

```
                QuickGame
                    │
              Game Selection
              /      |       \
             /       |        \
     Number Match  Higher/Lower  Reaction Time
           │           │             │
           └───────────┴─────────────┘
                    React State
                         │
                  Shared Utilities
```

## 🚀 Run Locally

```bash
git clone https://github.com/shukladhruve777-blip/QuickGame.git
cd QuickGame/react
npm install
npm run dev
```

Then open the local URL shown in the terminal.

## 📜 Available Scripts

```bash
npm run dev
```

Starts the development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run lint
```

Checks the project for ESLint issues.

```bash
npm run preview
```

Previews the production build locally.

## 📌 Project Status

The project currently contains three playable games and a shared game-selection interface.

## 🔮 Possible Next Steps

- Add persistent high scores
- Add difficulty levels
- Add scoring and streak systems
- Add keyboard accessibility
- Add automated tests
- Deploy a live version

## Built With

**React • JavaScript • Vite • CSS**
