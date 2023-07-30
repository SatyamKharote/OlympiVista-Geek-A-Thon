import React from "react";
import { Link } from "react-router-dom";

const AthleteCard = ({ athlete }) => {
  const { athlete_full_name, country_name, slug_game } = athlete;

  return (
    <div className="athlete-card">
      <div className="athlete-info">
        <h2>{athlete_full_name}</h2>
        <p>Country: {country_name}</p>
        <p>Game: {slug_game}</p>
      </div>
      <div className="athlete-image">
        {/* Add athlete image here */}
      </div>
      <Link to={`/explore/athletes/${encodeURIComponent(athlete_full_name)}`}>View Profile</Link>
    </div>
  );
};

export default AthleteCard;
