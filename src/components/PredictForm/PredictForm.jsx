import React from "react";
import { useState } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../PredictForm/PredictForm.css";
const PredictForm = () => {
  const [formData, setFormData] = useState({
    event_gender: "",
    participant_type: "",
    games_participations: "",
    age: "",
    gold_medal: "",
    silver_medal: "",
    bronze_medal: "",
    first_game_played: ""
  });

  const [prediction, setPrediction] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // console.log("Sending JSON data:", formData);
      const response = await axios.post(
        "http://localhost:5001/predict",
        formData
      );

      setPrediction(response.data);
      // console.log(prediction)
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <Header />
      <div className="main-form">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Event Gender:</label>
            <select
              name="event_gender"
              value={formData.event_gender}
              onChange={handleChange}
              required
            >
              <option value=""></option>
              <option value="Men">Men</option>
              <option value="Mixed">Mixed</option>
              <option value="Open">Open</option>
              <option value="Women">Women</option>
            </select>
          </div>
          <div>
            <label>Participant Type:</label>
            <select
              name="participant_type"
              value={formData.participant_type}
              onChange={handleChange}
              required
            >
              <option value=""></option>
              <option value="Athlete">Athlete</option>
              <option value="GameTeam">GameTeam</option>
            </select>
          </div>
          <div>
            <label>Games Participations:</label>
            <input
              type="number"
              name="games_participations"
              value={formData.games_participations}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              min="13"
              max="33"
            />
          </div>
          <div>
            <label>Gold Medal:</label>
            <input
              type="number"
              name="gold_medal"
              value={formData.gold_medal}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Silver Medal:</label>
            <input
              type="number"
              name="silver_medal"
              value={formData.silver_medal}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Bronze Medal:</label>
            <input
              type="number"
              name="bronze_medal"
              value={formData.bronze_medal}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>First Game Played (year):</label>
            <input
              type="number"
              name="first_game_played"
              value={formData.first_game_played}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="button">
            Predict
          </button>
        </form>
        <div className="predict-result">
          {prediction && <p>The Percentage to become Rising Star {prediction.toFixed(2)}%</p>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PredictForm;
