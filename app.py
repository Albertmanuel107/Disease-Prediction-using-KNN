from flask import Flask, request, jsonify, render_template
import pickle
import pandas as pd

app = Flask(__name__)

# Load model and data
def load_model():
    with open("knn_model.pkl", "rb") as model_file:
        model = pickle.load(model_file)
    return model

model = load_model()
data = pd.read_csv('Training.csv')
symptom_list = list(data.columns[:-2])

def preprocess_input(user_input, symptom_list):
    input_symptoms = [symptom.strip().lower() for symptom in user_input.split(',')]
    binary_vector = [1 if symptom in input_symptoms else 0 for symptom in symptom_list]
    return binary_vector

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    try:
       
        user_input = request.json.get("symptoms", "")
        binary_vector = preprocess_input(user_input, symptom_list)
        predicted_disease = model.predict([binary_vector])[0]
        
        return jsonify({"status": "success", "disease": predicted_disease})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)})

if __name__ == "__main__":
    app.run(debug=True)
