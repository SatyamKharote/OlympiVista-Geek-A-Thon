import pandas as pd
import numpy as np
from datetime import datetime
import copy
from pymongo.mongo_client import MongoClient
import os


def load_and_preprocess():

    df = pd.read_csv('medals.csv')

    df['athlete_full_name'] = df['athlete_full_name'].apply(lambda x : str(x).strip().lower().replace(" ", "-"))

    new_df =df.drop(df[(df['athlete_url'].isnull() | df['athlete_url'] == 'nan') & (df['athlete_full_name'].isnull() | df['athlete_full_name'] == 'nan')].index)

    new_df.drop(columns=['participant_title'] , inplace=True)

    new_df.dropna(subset=['athlete_full_name'])

    gk = new_df.groupby('athlete_full_name')

    nan_df = gk.get_group('nan')

    new_df = new_df[~ new_df.index.isin(nan_df.index)]

    new_df.drop(columns=['athlete_url'] , inplace=True)

    ath2_df = pd.read_csv("olympic_athletes.csv")

    ath2_df['athlete_full_name'] = [ x.lower().strip().replace(" " , "-") for x in ath2_df['athlete_full_name']]

    combined_df = pd.merge(new_df , ath2_df , on='athlete_full_name' , how='inner')

    combined_df.dropna(subset=['athlete_year_birth'], inplace = True)

    combined_df['Age'] = datetime.now().year - combined_df['athlete_year_birth']

    combined_df = combined_df[combined_df['Age'] < 40]

    combined_df.drop(columns=['athlete_url'] , inplace=True)

    combined_df['athlete_medals'] = combined_df['athlete_medals'].str.replace("\n" , "").replace("\t" , "")

    combined_df['bio'] = combined_df['bio'].str.replace("\n" , "").replace("\t" , "")

    combined_df['Gold medal'], combined_df['Silver medal'], combined_df['Bronze medal'] = zip(*combined_df['athlete_medals'].apply(medal_count))

    combined_df['games_participations'] = combined_df['games_participations'].astype(int)

    combined_df['Gold medal'] = combined_df['Gold medal'].astype(int)

    combined_df['Silver medal'] = combined_df['Silver medal'].astype(int)

    combined_df['Bronze medal'] = combined_df['Bronze medal'].astype(int)

    combined_df['Age'] = combined_df['Age'].astype(int)

    combined_df['rising_star'] = 0

    combined_df.loc[
        (combined_df['games_participations'] >= 2) &
        ((combined_df['Gold medal'] >= 1) | (combined_df['Silver medal'] >= 2) | (combined_df['Bronze medal'] >= 3)) &
        (combined_df['Age'] <= 33),
        'rising_star'
    ] = 1

    combined_df.dropna(subset=['first_game'] , inplace=True)

    combined_df['first_game_diff'] = combined_df['first_game'].apply(lambda x : datetime.now().year - int(x.split(' ')[len(x.split(' '))-1]))

    combined_df = combined_df[combined_df['first_game_diff'] <= 30]

    combined_df['country_flag'] = combined_df['country_name'].apply(get_country_flag)

    combined_df.reset_index(inplace=True)

    combined_df['new_bio'] = combined_df['athlete_full_name']

    for i in range(0 , combined_df.shape[0]):
        name = combined_df['athlete_full_name'][i].replace("-" , " ").capitalize()
        birth_year =  int(combined_df['athlete_year_birth'][i])
        first_game = combined_df['first_game'][i]
        game_participation = combined_df['games_participations'][i]
        bio = name + " is a talented Olympic athlete, born in " + str(birth_year) + ". With an unwavering passion for sports and made debut at the Olympic Games in " + str(first_game) + " and has been a remarkable presence in the sporting world ever since. Throughout " + name + "'s career, " + name + " has participated in " + str(game_participation) + " Olympic Games, showcasing exceptional skills and determination in chosen discipline. With each appearance, " + name + " has not only achieved personal milestones but also inspired countless aspiring athletes worldwide. " + name + "'s journey to excellence serves as a testament to the power of perseverance, hard work, and dedication in the pursuit of greatness. As " + name + " continues to grace the Olympic stage, and their performances inspire the world and cement the legacy as one of the finest athletes of its generation."
        combined_df['new_bio'][i] = bio

    combined_df.drop(columns=['bio'] , inplace=True)

    combined_df.rename(columns={
        'new_bio': 'bio'    
    }, inplace=True)

    return combined_df


def push_data(combined_df):

    name_grp = combined_df.groupby('athlete_full_name')

    mongo_uri = "mongodb+srv://yorulatte:root@cluster0.drxkeyo.mongodb.net/?retryWrites=true&w=majority"

    client = MongoClient(mongo_uri)
    db = client['Athlete_info']

    for i in list(combined_df['athlete_full_name'].unique()):

        temp_df =name_grp.get_group(i)

        dict_tm = temp_df.to_dict(orient='records')

        dict_tm2 = { "Name" : dict_tm}       

        coll_demo = db['athlete_data2']

        coll_demo.insert_one(dict_tm2)



def medal_count(stri):
    gold,silver,bronze = 0,0,0
    if (stri is None or pd.isna(stri)):
        return gold,silver,bronze
    stri = str(stri)
    for i in range(0,len(stri)-1,2):
        
        if stri[i+1] == 'G':
            gold = stri[i]       
        elif stri[i+1] == 'S':
            silver = stri[i]        
        elif stri[i+1] == 'B':
            bronze = stri[i]

    return gold , silver , bronze





def get_country_flag(country_name):
    image_folder = 'flag_images'
    image_extension = '.png'
    flag_image_path = os.path.join(image_folder, country_name + image_extension)

    return flag_image_path