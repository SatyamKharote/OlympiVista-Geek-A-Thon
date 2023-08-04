from data_preprocessing.data_load_preprocess import load_and_preprocess , push_data
from model_training.model_training import train_model
import pandas as pd
from flask import Flask , render_template , request
from datetime import datetime
from model_training.model_training import train_model
from flask_cors import CORS

model_train_data , push_data , = load_and_preprocess()

# push_data(push_data)

lr_model , rf_model = train_model(model_train_data)

app = Flask(__name__)
CORS(app)

# Define a dictionary to map the event_gender names to encoded values
event_gender_mapping = {
    'Men': 0,
    'Mixed': 1,
    'Open': 2,
    'Women': 3
}

# Define a dictionary to map the participant_type names to encoded values
participant_type_mapping = {
    'Athlete': 0,
    'GameTeam': 1
}

# Reverse mapping dictionaries to convert encoded values back to names for displaying results
reverse_event_gender_mapping = {v: k for k, v in event_gender_mapping.items()}
reverse_participant_type_mapping = {v: k for k, v in participant_type_mapping.items()}



# @app.route('/', methods=['GET', 'POST'])
# def home_page():
#     return render_template('index.html')

@app.route('/predict' , methods=['POST'])   
def predict():

    
    json_data = request.get_json()
   

    if not json_data:
        return "Error: No JSON data provided.", 400

    try:    
        if request.method == 'POST':
            print("pass try")
            # Get input data from the website form
            event_gender = json_data['event_gender']
            participant_type = json_data['participant_type']
            games_participations = int(json_data['games_participations'])
            age = int(json_data['age'])
            gold_medal = int(json_data['gold_medal'])
            silver_medal = int(json_data['silver_medal'])
            bronze_medal = int(json_data['bronze_medal'])
            first_game_played = int(json_data['first_game_played'])
            
            

            # Convert event_gender and participant_type names to encoded values
            event_gender_encoded = event_gender_mapping[event_gender]
            participant_type_encoded = participant_type_mapping[participant_type]

            # Calculate first_game_diff using first_game_played and the current year (2023)
            first_game_diff = datetime.now().year - int(first_game_played)

           

            # Create a custom input DataFrame
            custom_data = {
                'event_gender': [event_gender_encoded],
                'participant_type': [participant_type_encoded],
                'games_participations': [games_participations],
                'Age': [age],
                'Gold medal': [gold_medal],
                'Silver medal': [silver_medal],
                'Bronze medal': [bronze_medal],
                'first_game_diff': [first_game_diff]
            }

            custom_data_df = pd.DataFrame(custom_data)          

                

            # Make the prediction using the logistic regression model
            probability = rf_model.predict_proba(custom_data_df)[0][1]

           

            # Convert the prediction to percentage
            prediction_percentage = probability * 100

            # Convert the encoded values back to names for displaying results
            # event_gender_result = reverse_event_gender_mapping[event_gender_encoded]
            # participant_type_result = reverse_participant_type_mapping[participant_type_encoded]

            prediction_percentage = format(prediction_percentage, ".2f")

            return   str(prediction_percentage) #render_template('result.html', event_gender=event_gender_result,
                                # participant_type=participant_type_result, probability=prediction_percentage)

    except KeyError as e:
        return f"Error: Missing key in JSON data: {str(e)}", 400
    except Exception as e:
        return f"Error: {str(e)}", 500

if __name__ == '__main__':
    app.run(host="127.0.0.1" , port=5001)


