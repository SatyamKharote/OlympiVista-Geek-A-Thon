import copy
import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score 
from sklearn.model_selection import train_test_split 
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import cross_val_score

def train_model(new_rising_star):

    X = new_rising_star.drop('rising_star' , axis = 1)

    Y = new_rising_star['rising_star']

    x_train , x_test , y_train , y_test = train_test_split(X , Y , test_size=0.2 )

    lr_model = LogisticRegression()

    rf_clf = RandomForestClassifier()

    rf_clf.fit(x_train, y_train)

    lr_model.fit(x_train , y_train)

    rf_prediction = rf_clf.predict(x_test)

    lr_prediction = lr_model.predict(x_test)
    

    lr_accuracy = accuracy_score(y_test, lr_prediction)

    rf_accuracy = accuracy_score(y_test, rf_prediction)

    print(lr_accuracy , rf_accuracy)

    lg_accuracy_scores = cross_val_score(lr_model, X, Y, cv=5, scoring='accuracy')

    rf_accuracy_scores = cross_val_score(rf_clf, X, Y, cv=5, scoring='accuracy')


    lg_mean_accuracy_score = np.mean(lg_accuracy_scores)
    rf_mean_accuracy_score = np.mean(rf_accuracy_scores)

    print("Mean Accuracy Score:", lg_mean_accuracy_score) # 79 % approx
    print("Mean Accuracy Score:", rf_mean_accuracy_score) 

    return lr_model , rf_clf




    



