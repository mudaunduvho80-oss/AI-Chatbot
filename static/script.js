
const welcomeScreen = document.getElementById("welcomeScreen");
const chatScreen = document.getElementById("chatScreen");
const chatButton = document.getElementById("chatButton");
const backButton = document.getElementById("backButton");
const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");
const chatMessages = document.getElementById("chatMessages");

// Open the chat screen
chatButton.addEventListener("click", () => {
    welcomeScreen.hidden = true;
    chatScreen.hidden = false;
    userInput.focus();
});

// Return to the welcome screen
backButton.addEventListener("click", () => {
    chatScreen.hidden = true;
    welcomeScreen.hidden = false;
});

// Display a message in the chat
function addMessage(text, sender) {
    const message = document.createElement("div");
    message.classList.add("message");

    if (sender === "user") {
        message.classList.add("user-message");
    } else {
        message.classList.add("bot-message");
    }

    message.textContent = text;
    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    return message;
}

// Send the question to the Python backend
chatForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const question = userInput.value.trim();

    if (!question) return;

    addMessage(question, "user");
    userInput.value = "";
    userInput.disabled = true;

    const loadingMessage = addMessage("Thinking...", "bot");

    try {
        const response = await fetch("/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: question
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.reply || "The request failed.");
        }

        loadingMessage.textContent =
            data.reply || "Sorry, I couldn't generate an answer.";

    } catch (error) {
        loadingMessage.textContent =
            "Sorry, I couldn't connect to the AI. Please try again.";

        console.error("Chat error:", error);
    } finally {
        userInput.disabled = false;
        userInput.focus();
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
