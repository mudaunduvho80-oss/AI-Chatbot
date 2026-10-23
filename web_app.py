
from flask import Flask, render_template, request, jsonify
from app import client, SYSTEM_INSTRUCTION

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    question = data.get("message", "").strip()

    if not question:
        return jsonify({"reply": "Please enter a question."}), 400

    try:
        response = client.chat.completions.create(
            model="openai/gpt-oss-20b",
            messages=[
                {"role": "system", "content": SYSTEM_INSTRUCTION},
                {"role": "user", "content": question}
            ]
        )

        answer = response.choices[0].message.content

        return jsonify({
            "reply": answer or "Sorry, I couldn't generate an answer."
        })

    except Exception as error:
        print("Chat error:", error)
        return jsonify({
            "reply": "Sorry, I couldn't answer right now. Please try again."
        }), 500


if __name__ == "__main__":
    app.run(debug=True)
