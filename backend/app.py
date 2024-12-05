from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai

app = Flask(__name__)
CORS(app)
genai.configure(api_key="AIzaSyDMUrPfBTRZUnjiVz_Glt8rhcToVpYiyas")
model = genai.GenerativeModel("gemini-1.5-flash")

# Recieves query information from frontend
# Query request includes book_title, theme, number_questions, and input_additional
# Query data obtained through request.json.get("<key name>")
# Returns message generated through Gemini as string
@app.route("/query", methods = ['POST'])
def getAI():
    
    bookTitle = request.json.get("book_title")
    theme = request.json.get("theme")
    numQuestions = request.json.get("number_questions")
    additional = request.json.get("input_additional")
    
    prompt = f"Generate {numQuestions} discussion questions on {bookTitle} related to {theme}. Here are some additional notes: {additional}. The more open ended the question, the better. Provide just the questions and no other text separating the text with only a '|'."
    
    print(f"Prompt: {prompt}")
    
    response = parseResponse(model.generate_content(prompt).text)
    print(f"Response: {response}")

    return jsonify({"message": response})


# Function to parse Gemini string repsonse into an array
def parseResponse(response):
    questions = []
    question = ""
    for c in response:
        if c == '|':
            if question != "":
                questions.append(question)
            question = ""
        if c != '|':
            question += c
    questions.append(question)
    return questions

app.run(port=5050)
