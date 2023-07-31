import copy
import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score 
from sklearn.model_selection import train_test_split 
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import cross_val_score

def train_model(combined_df):

    rising_df = copy.deepcopy(combined_df)

    rising_df.drop(columns=['slug_game','event_title' , 'bio' , 'country_name' , 'country_code' , 'country_3_letter_code' , 'athlete_year_birth' , 'athlete_medals' , 'country_flag'] , inplace=True)


    new_rising_star = rising_df

    new_rising_star = new_rising_star.drop(columns=['discipline_title' , 'medal_type' , 'athlete_full_name' , 'first_game' , 'index'])

    encoder = LabelEncoder()


    # 0 for Men
    # 1 for Mixed
    # 2 for Open
    # 3 for Women
    new_rising_star['event_gender'] = encoder.fit_transform(new_rising_star['event_gender'])


    # 0 for Athlete
    # 1 for GameTeam
    new_rising_star['participant_type'] = encoder.fit_transform(new_rising_star['participant_type'])  



    X = new_rising_star.drop('rising_star' , axis = 1)

    Y = new_rising_star['rising_star']

    x_train , x_test , y_train , y_test = train_test_split(X , Y , test_size=0.2 )

    lr_model = LogisticRegression()

    lr_model.fit(x_train , y_train)

    lr_prediction = lr_model.predict(x_test)
    

    lr_accuracy = accuracy_score(y_test, lr_prediction)

    print(lr_accuracy)

    accuracy_scores = cross_val_score(lr_model, X, Y, cv=5, scoring='accuracy')

    mean_accuracy_score = np.mean(accuracy_scores)

    print("Mean Accuracy Score:", mean_accuracy_score) # 79 % approx

    return lr_model

