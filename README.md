🎓 PU Assistant — Poornima University Chatbot

An AI-powered campus assistant chatbot designed for Poornima University that helps students get instant information about admissions, courses, fees, placements, and more — all in one place.

🚀 Built using HTML, CSS, JavaScript + Google Gemini AI API

🌟 Features

🎓 Campus Assistant Bot

Admissions, courses, fees, placements, scholarships

🤖 AI Integration (Gemini API)

Real-time intelligent responses

🧠 Smart Fallback System

Works even when AI is offline (local knowledge base + fuzzy matching)

🔍 Fuzzy Search

Handles typos like fes → fees

🎤 Voice Input Support

Speak queries using microphone

💬 Modern Chat UI

Glassmorphism + animated interface

⚡ Quick Suggestions

Pre-built buttons for common queries

📱 Responsive Design

Works on desktop & mobile

🖼️ Preview

UI includes:

Splash screen

Animated chatbot interface

Quick action buttons

Typing indicator

Voice input button

🛠️ Tech Stack

Frontend: HTML, CSS, JavaScript

AI API: Google Gemini API

Design: Glassmorphism UI + Animations

Hosting: GitHub Pages / Netlify

📂 Project Structure
📁 PU-Assistant
│── index.html   # Main UI
│── PU.css       # Styling & animations
│── PU.js        # Chatbot logic + AI integration
⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/pu-assistant.git
cd pu-assistant
2️⃣ Open project

Just open index.html in your browser
(No backend required)

🔑 Add Gemini API Key (Important)

Open PU.js and replace:

const GEMINI_API_KEY = 'YOUR_API_KEY_HERE';

👉 Get API key from: https://ai.google.dev/

🚀 How It Works

User enters query

App sends request to Gemini API

If API fails → fallback to:

Local knowledge base

Fuzzy matching algorithm

Response displayed in chat UI

🧠 Smart Features Explained
🔍 Fuzzy Matching

Handles spelling mistakes

Uses Levenshtein Distance Algorithm

⚡ Hybrid AI System

Online AI → smart answers

Offline fallback → reliable answers

🎯 Use Cases

University websites

Student support systems

Admission helpdesk bots

College projects / startups

📌 Future Improvements

🔐 User login system

📊 Admin dashboard

📅 Assignment & reminder system

📍 Campus map integration

📱 Mobile app version

👨‍💻 Author

Siddharth Kumawat ❤️

⭐ Support

If you like this project:

👉 Star the repository
👉 Share with your friends

📜 License

This project is open-source and free to use.
