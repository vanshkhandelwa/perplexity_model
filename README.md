A modern, responsive AI chat interface with integrated web search functionality. Perplexity 2.0 provides a clean UI similar to Perplexity.ai, combining conversational AI with real-time search capabilities.

✨ Features

Real-time AI Responses - Stream AI responses as they're generated
Integrated Web Search - AI can search the web for up-to-date information
Conversation Memory - Maintains context throughout your conversation
Search Process Transparency - Visual indicators show searching, reading, and writing stages
Responsive Design - Clean, modern UI that works across devices

🏗️ Architecture

Perplexity 2.0 follows a client-server architecture:
Client (Next.js + React)

Modern React application built with Next.js
Real-time streaming updates using Server-Sent Events (SSE)
Components for message display, search status, and input handling

Server (FastAPI + LangGraph)

Python backend using FastAPI for API endpoints
LangGraph implementation for conversation flow with LLM and tools
Integration with Tavily Search API for web searching capabilities
Server-Sent Events for real-time streaming of AI responses

🚀 Getting Started

Prerequisites

Node.js 18+
Python 3.10+
OpenAI API key
Tavily API key

Installation

Clone the repository
bashgit clone https://github.com/harishneel1/perplexity_2.0.git
cd perplexity_2.0

Set up the server
bashcd server
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt

Configure environment variables
Create a .env file in the server directory:
OPENAI_API_KEY=your_openai_api_key
TAVILY_API_KEY=your_tavily_api_key

Set up the client
bashcd ../client
npm install

Running the Application

Start the server
bashcd server
uvicorn app:app --reload

Start the client
bashcd client
npm run dev

Open your browser and navigate to http://localhost:3000

🔍 How It Works

User sends a message through the chat interface
Server processes the message using GPT-4o
AI decides whether to use search or respond directly
If search is needed:

Search query is sent to Tavily API
Results are processed and provided back to the AI
AI uses this information to formulate a response


Response is streamed back to the client in real-time
Search stages are displayed to the user (searching, reading, writing)

🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

Fork the repository
Create your feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add some amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request

📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

🙏 Acknowledgments

Inspired by the UI and functionality of Perplexity.ai
Built with Next.js, React, FastAPI, and LangGraph
Powered by OpenAI GPT-4o and Tavily Search API