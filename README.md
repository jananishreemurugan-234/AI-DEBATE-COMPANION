# AI-DEBATE-COMPANION

AI Debate Companion is an innovative web application designed to help users participate in live debates with artificial intelligence. It provides a seamless experience for practicing debate skills, receiving AI-generated counterarguments, and reviewing performance through detailed debate histories. The project integrates a React-based frontend with a Node.js/Express backend, creating an engaging and intelligent debate environment for learners, educators, and enthusiasts.

## Overview

In today’s digital era, debating skills are crucial for communication, reasoning, and critical thinking. The AI Debate Companion acts as your personal debate partner — always ready to discuss any topic you choose. Users can interact with an AI opponent in real time, get responses instantly, and track their previous debates for improvement. This project demonstrates the power of combining AI with modern web development technologies to create an interactive and educational experience.

## Key Features

- Real-Time Debates: Engage in instant debates with the AI companion on any topic of your choice.

- AI-Generated Responses: Uses natural language processing (NLP) to simulate realistic debate conversations.

- Debate History Tracking: Stores your debate sessions for later review and analysis.

- Dynamic User Interface: Clean, responsive, and easy-to-navigate interface built with React.

- Backend API Integration: Seamless connection between frontend and backend for smooth data flow.

- Customizable Topics: Allows users to input their own debate subjects for a personalized experience.

## Project Structure

`AI Debate Companion/`
`│`
`├──`backend`/`
`│`  `├──` server.js`
│   ├── .env
│   ├── package.json
│   └── node_modules/
│
├── frontend/
│   ├── package.json
│   ├── webpack.config.js
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── App.jsx
│       ├── index.js
│       ├── components/
│       │   ├── DebateHistory.jsx
│       │   ├── DebateSection.jsx
│       │   └── Navbar.jsx
│       ├── styles/
│       │   └── App.css
│       └── api/
│           └── index.js
│
└── README.md


## Technologies Used

- Frontend: React, JavaScript, CSS, Webpack

- Backend: Node.js, Express

- Tools: dotenv, npm, Webpack

## Installation and Usage

### Backend Setup

- cd backend
- npm install

### Create a .env file in the backend folder:

- MONGO_URI=mongodb://localhost:27017/
- PORT=5000

### Run the backend server:
- npm start

### Frontend Setup
- cd frontend
- npm install
- npm start
Then open http://localhost:3000 in your browser.

### Future Enhancements

- Multi-user debate functionality

- AI scoring and analytics system

- User authentication and profiles

- Debate leaderboard and performance charts

- Option to download debate summaries as PDFs

## Author
Developed with passion by M. Janani Shree , K.Elamathi, M.Gayathri.
AI Debate Companion – where technology meets intelligent conversation.
