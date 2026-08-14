# app.py (Streamlit)

import streamlit as st
import numpy as np
import pandas as pd
import pickle



# Load the trained model
model = pickle.load(open("model.pkl", "rb"))

# Load symptom list
symptoms = pickle.load(open("symptom_list.pkl", "rb"))  # assume you saved this list earlier

disease = ['Fungal infection','Allergy','GERD','Chronic cholestasis','Drug Reaction',
           'Peptic ulcer diseae','AIDS','Diabetes','Gastroenteritis','Bronchial Asthma',
           'Hypertension','Migraine','Cervical spondylosis','Paralysis (brain hemorrhage)',
           'Jaundice','Malaria','Chicken pox','Dengue','Typhoid','hepatitis A','Hepatitis B',
           'Hepatitis C','Hepatitis D','Hepatitis E','Alcoholic hepatitis','Tuberculosis',
           'Common Cold','Pneumonia','Dimorphic hemmorhoids(piles)','Heart attack',
           'Varicose veins','Hypothyroidism','Hyperthyroidism','Hypoglycemia','Osteoarthristis',
           'Arthritis','(vertigo) Paroymsal  Positional Vertigo','Acne','Urinary tract infection',
           'Psoriasis','Impetigo']

st.set_page_config(page_title="Disease Predictor", layout="centered")

st.title("🧠 Disease Predictor ")

name = st.text_input("Enter Patient Name")

selected_symptoms = [st.selectbox(f"Select Symptom {i+1}", ["None"] + symptoms) for i in range(5)]

if st.button("Predict Disease"):
    input_data = [0] * len(symptoms)
    for symptom in selected_symptoms:
        if symptom != "None" and symptom in symptoms:
            index = symptoms.index(symptom)
            input_data[index] = 1

    prediction = model.predict([input_data])[0]
    st.success(f"**Predicted Disease for {name} : {disease[prediction]}**")
