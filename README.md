# AI Debate Companion

AI Debate Companion is an interactive web application that enables users to participate in live debates with artificial intelligence. It offers a seamless environment for improving communication and critical thinking skills through real-time AI-generated arguments and response analysis. The project combines a React frontend with a Node.js/Express backend, connected using the system’s IP address for smooth communication across devices on the same network.

## Overview

The AI Debate Companion allows users to engage in meaningful debates with AI, receive instant counterarguments, and review debate history. It serves as a personal debate trainer, helping users enhance logical reasoning and confidence. By using the IP address in API requests, the app ensures proper backend–frontend connectivity — especially useful when running on multiple systems or testing across devices.

## Key Features

- Real-Time Debates: Participate in live AI-powered debates on any topic.

- AI Responses: Uses NLP to generate realistic and context-aware arguments.

- Debate History: View previous debates with timestamps and results.

- Responsive Interface: Optimized for both desktop and mobile use.

- IP Address Integration: Frontend communicates with the backend via local IP for cross-device testing.

- Custom Topics: Users can input topics of their choice for personalized debate sessions.

## Project Structure

AI Debate Companion/

`│`

`├──`backend`/`

`│`  `├──` server.js

`│`   `├──` .env

`│`  `├──` package.json

`│`   `└──` node_modules/

`│`

`├──` frontend/

`│`  `├──` package.json

`│`   `├──` webpack.config.js

`│`   `├──` public/

`│`   `│`   `└──` index.html

`│`  `└──` src/

`│`       `├──` App.jsx

`│`       `├──` index.js

`│`       `├──` components/

`│`       `│`   `├──` DebateHistory.jsx

`│`       `│`   `├──` DebateSection.jsx

`│`       `│`   `└──` Navbar.jsx

`│`       `├──` styles/

`│`       `│`   `└──` App.css

`│`       `└──` api/

`│`           `└──` index.js

## Technologies Used

- Frontend: React, JavaScript, CSS, Webpack

- Backend: Node.js, Express

- Networking: IP-based local communication between client and server

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

### Frontend
- Open /frontend/src/api/index.js and replace your API base URL with your local IP address, for example:
- const API_BASE_URL = "http://192.168.1.10:5000";

Then run:
- cd frontend
- npm install
- npm start
Open http://localhost:3000 in your browser (or access from another device using the IP address).

### Future Enhancements

- Multi-user debate functionality

- AI scoring and analytics system

- User authentication and profiles

- Debate leaderboard and performance charts

- Option to download debate summaries as PDFs

## Author
Developed with passion by M. Janani Shree , K.Elamathi, M.Gayathri.
Team Name : server survivors.
AI Debate Companion – where technology meets intelligent conversation.

## Conclusion
The AI Debate Companion project showcases the power of combining artificial intelligence, web development, and networking concepts. By integrating IP-based communication, the application enables real-time connectivity between frontend and backend across different devices. This enhances flexibility in deployment and testing.

Overall, this project serves as both a learning platform and a practical debate training tool. It effectively merges React, Node.js, and AI technologies to provide a meaningful and interactive experience — encouraging users to think critically, argue effectively, and learn continuously through technology.

## Output
### Mobile
![WhatsApp Image 2025-10-24 at 1 28 20 PM](https://github.com/user-attachments/assets/69bb9b0b-ee39-4386-ae00-ee351739a0fb)
![WhatsApp Image 2025-10-24 at 2 30 15 PM](https://github.com/user-attachments/assets/1b0e6eab-ee2b-4bfd-a0b8-6c175970ca27)

### Desktop
<img width="1916" height="1131" alt="image" src="https://github.com/user-attachments/assets/3c54f757-41c1-4a25-b69a-81eaaf80c804" />
<img width="1897" height="291" alt="image" src="https://github.com/user-attachments/assets/8879aa89-10f9-472b-a018-5352b2b2a3c9" />
