import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AthleteCard from "../components/AthleteCard/AthleteCard";
import "../components/Explore/Explore.css";
const Explore = () => {
  const [athletes, setAthletes] = useState([]);

  useEffect(() => {
    // Function to fetch athletes data from the backend
    const fetchAthletes = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/athletes");
        if (!response.ok) {
          throw new Error("Error fetching athletes");
        }
        const data = await response.json();
        setAthletes(data);
        console.log(athletes)
      } catch (error) {
        console.error("Error fetching athletes:", error.message);
      }
    };

    // Call the fetchAthletes function to fetch the data
    fetchAthletes();
  }, []);

  return (
    <div>
      <Header />
      <div className="athlete-list">
        {athletes.map((athlete, index) => (
          <AthleteCard key={`${athlete._id}-${index}`} athlete={athlete} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Explore;