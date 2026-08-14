import pandas as pd
import numpy as np
import sys
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import confusion_matrix,classification_report,accuracy_score

# Load training data
df = pd.read_csv("Training.csv")

# List of symptoms
l1 = df.columns[:-1].tolist()
disease_labels = df["prognosis"].unique().tolist()

# Encode disease labels
df.replace({'prognosis': {d: i for i, d in enumerate(disease_labels)}}, inplace=True)

X = df[l1]
y = df["prognosis"]

# Train model
model = RandomForestClassifier()
model.fit(X, y)

# print("Model Accuracy:", accuracy_score(y_test, model.predict(X_test)))
# Save model and related data
import pickle
# Save model and symptom list
import pickle

with open("model.pkl", "wb") as f:
    pickle.dump(model, f)

with open("symptom_list.pkl", "wb") as f:
    pickle.dump(l1, f)

"""
with open("model.pkl", "wb") as f:
    pickle.dump({
        "model": model,
        "symptoms": l1,
        "diseases": disease_labels
    }, f)
print(type(model))
# print(model.keys())"""

print("Model trained and saved to model.pkl.")