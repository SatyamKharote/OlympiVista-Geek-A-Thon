//   const baseUrl = "http://localhost:5000";

//   const handleClick = async(id)=>{

//       console.log(id);
//       const option = {
//           method : "POST",
//           headers : {
//               "Content-type" : "application/json",
//           },
//           body: JSON.stringify({id:id}),
//         }

//         try {

//           const data =  await fetch(`${baseUrl}/api/athlete`, option);
//           const athelateDatas = await data.json();
//           console.log(athelateDatas);
//            <UserProfile />

//         } catch (error) {
//           console.log(error);
//         }

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Explore/Explore.css";
import img from "../../images/1.jpg";
import "../AthleteCard/AthleteCard.css";

const AthleteCard = ({ athlete, id, setAthleteData, setShowProfile }) => {
  const baseUrl = "http://localhost:5000";
  const { athelete_name, country_name, slug_game, athlete_full_name } = athlete;

  const handleClick = async (id) => {
    console.log(id);
    const option = {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ id: id })
    };

    try {
      const data = await fetch(`${baseUrl}/api/athlete`, option);
      const athleteDatas = await data.json();
      console.log(athleteDatas);

      setAthleteData(athleteDatas);
      setShowProfile(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {
        // showProfile ? <UserProfile data={athleteData} setShowProfile={setShowProfile} /> :

        <section className="cards">
          <article className="card card--1">
            <div className="card__img"></div>
            <a href="" className="card__img--hover">
              <div className="card__img--hover"></div>
            </a>
            <div className="card__info">
              <span className="card__category">{athlete_full_name}</span>
              <h3 className="card__title">{country_name}</h3>
              <span className="card__by">{slug_game}</span>
              <div className="view_profile">
                <button onClick={() => handleClick(id)} className="button">
                  View Profile
                </button>
              </div>
            </div>
          </article>
        </section>

        // <div className="athlete-card grid-item" style={{ color: "white" }}>
        //   <div className="athlete-image">
        //     <img
        //       src={img}
        //       alt="No Image"
        //       style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        //     />
        //   </div>
        //   <div className="athlete-info">
        //     <h2>{athelete_name}</h2>
        //     <p>fullName: {athlete_full_name}</p>
        //     <p>Country: {country_name}</p>
        //     <p>Game: {slug_game}</p>

        //   </div>

        //   {/* <Link to={`/explore/athletes/:id`}>View Profile</Link> */}
        //   <div>
        //     <button onClick={() => handleClick(id)}>ViewProfile</button>
        //   </div>
        // </div>
      }
    </>
  );
};

export default AthleteCard;
