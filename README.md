# AI-Chef-Genius

Chef Genius is a React app that helps you turn the ingredients you already have into a quick, practical recipe suggestion. Instead of staring at your pantry and wondering what to cook, you can add the ingredients you have on hand and let an AI-powered recipe assistant generate a meal idea for you.

## What this project does

- Lets users add ingredients to a list
- Uses a recipe-generation AI model to suggest meals based on those ingredients
- Renders the response in a clean markdown format for easy reading
- Gives a simple, friendly cooking experience for everyday meal planning

## Features

- Add ingredients one by one
- Build a custom ingredient list from what you already have
- Generate a recipe recommendation using Google Gemini AI
- See the suggested recipe in a readable styled layout
- Ideal for quick dinners, improvised meals, and pantry-friendly cooking

## Tech stack

- React
- Vite
- JavaScript
- Google Generative AI (Gemini)
- react-markdown

## Project structure

- `src/App.jsx` — main app shell
- `src/components/` — UI components for the recipe experience
- `src/ai.js` — Google GenAI integration and recipe prompt logic
- `public/` — static assets

## How it works

1. User adds ingredients they have available.
2. The app sends those ingredients to a Gemini-powered model.
3. The AI responds with a recipe idea that uses some or all of the items.
4. The response is displayed as markdown, making ingredients, steps, and headings easy to read.

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Add your AI API key

Create a `.env` file in the project root and add:

```bash
VITE_GENAI_ACCESS_TOKEN=your_google_genai_api_key_here
```

### 3. Run the app

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Available scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Use case

Chef Genius is perfect for anyone who wants a smarter way to cook with what they already have at home. Whether you're planning a last-minute meal, reducing food waste, or just looking for inspiration, this app helps you create something practical from available ingredients.

## License

This project is for personal and learning use.
