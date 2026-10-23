#  NDUVHO AI Chatbot

## About the Project

NDUVHO AI Chatbot is an AI-powered learning assistant designed to help students understand different topics and find answers to their questions. It uses the Groq API to generate responses and provides a simple, user-friendly web interface.

The chatbot aims to make learning easier by explaining concepts in simple English and helping users understand rather than just memorise information.

## Features

- AI-generated answers using the Groq API.
- Interactive web-based chat interface.
- Simple and understandable explanations.
- Python backend using Flask.
- Responsive interface built with HTML and CSS.
- JavaScript for interactive chat functionality.
- Environment variable support for API key security.
- Voice interaction is a planned feature and is still being developed.

## Technologies Used

- **Python** — chatbot logic and backend.
- **Flask** — web application framework.
- **Groq API** — AI-generated responses.
- **HTML5** — web page structure.
- **CSS3** — interface styling.
- **JavaScript** — chat functionality.
- **python-dotenv** — loading environment variables.

## Project Structure

```text
AI CHATBOT/
│
├── app.py
├── web_app.py
├── .env
├── .gitignore
├── requirements.txt
│
├── templates/
│   └── index.htm
│
└── static/
    ├── style.css
    └── script.js
```

## Requirements

Before running the project, ensure that you have:

- Python 3.10 or later.
- A Groq API key.
- An internet connection.
- A modern web browser, such as Google Chrome.

## Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your repository's actual URL.

### 2. Open the project folder

```bash
cd "AI CHATBOT"
```

Use the actual folder name created when you cloned the repository.

### 3. Install the dependencies

```bash
python -m pip install -r requirements.txt
```

If Flask or the Groq package is missing, install them using:

```bash
python -m pip install flask groq python-dotenv
```

### 4. Configure your API key

Create a file named `.env` in the project root and add:

```text
GROQ_API_KEY=your_groq_api_key_here
```

Replace the placeholder with your own Groq API key. Never publish your real API key on GitHub.

### 5. Run the web application

```bash
python web_app.py
```

Open the local address displayed in your terminal, usually:

```text
http://127.0.0.1:5000
```

You can now use the website to ask the AI Tutor questions.

## Security

- Keep your `.env` file private.
- Add `.env` to `.gitignore`.
- Never commit API keys or other secret credentials to GitHub.
- Each user should configure their own API key when running the project locally.

## Future Improvements

- Complete voice input and spoken AI responses.
- Improve error handling and response loading indicators.
- Add conversation history.
- Improve mobile responsiveness.
- Add additional learning features.

## Author

**Nduvho Mudau**

## License

This project is available for educational and learning purposes. A formal open-source license can be added to the repository if required.