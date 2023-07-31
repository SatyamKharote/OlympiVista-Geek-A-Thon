import React from "react";
import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../UserProfile/UserProfile.css";
import img from "../../images/olympic.jpg";
function UserProfile({ data, setShowProfile }) {
  console.log(data);
  const countryFlagPath = data.Name[0].country_flag.replace(/\\/g, "/");
  const [showFullBio, setShowFullBio] = useState(false);

  const toggleBio = () => {
    setShowFullBio(!showFullBio);
  };
  return (
    <>
      <div className="user-profile">
        <figure className="snip0056">
          <figcaption>
            <h2>
              {data.Name[0].athlete_full_name}
              <img src={countryFlagPath} alt="country_name" />
              <h5>{data.Name[0].country_name}</h5>
            </h2>
            <div className="bio">
              <p className={`bio-summary ${showFullBio ? "hide-bio-summary" : ""}`}>
                {data.Name[0].bio}
              </p>
              {showFullBio && (
                <div className="bio-full">
                  <p>{data.Name[0].bio}</p>
                </div>
              )}
            </div>
            <div className="athlete-info">
              <table>
                <tbody>
                  <tr>
                    <td>Discipline:</td>
                    <td>{data.Name[0].discipline_title}</td>
                  </tr>
                  <tr>
                    <td>Game Participations:</td>
                    <td>{data.Name[0].games_participations}</td>
                  </tr>
                  <tr>
                    <td>First Olympic Game:</td>
                    <td>{data.Name[0].first_game}</td>
                  </tr>
                  <tr>
                    <td>Year of Birth:</td>
                    <td>{data.Name[0].athlete_year_birth}</td>
                  </tr>
                  <tr>
                    <td>Rising Star:</td>
                    <td>{data.Name[0].rising_star ? "Yes" : "No"}</td>
                  </tr>
                  <tr>
                    <td>Medals:</td>
                    <td>
                      <div className="medals">
                        <div>
                          <i
                            className="fa fa-medal"
                            style={{ color: "#FFD700" }}
                          ></i>
                          <div className="medal-count">
                            {data.Name[0]["Gold medal"]}
                          </div>
                        </div>
                        <div>
                          <i
                            className="fa fa-medal"
                            style={{ color: "silver" }}
                          ></i>
                          <div className="medal-count">
                            {data.Name[0]["Silver medal"]}
                          </div>
                        </div>
                        <div>
                          <i
                            className="fa fa-medal"
                            style={{ color: "#CD7F32" }}
                          ></i>
                          <div className="medal-count">
                            {data.Name[0]["Bronze medal"]}
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <button
              className="button"
              style={{ marginTop: "5px" }}
              onClick={() => setShowProfile(false)}
            >
              Back
            </button>
          </figcaption>

          <img src={img} alt="sample8" />
          <div className="position"></div>
        </figure>
      </div>

      {/* <div className="App" >
        <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
          <div className="white-gradient" />

          <h1>{data.Name[0].discipline_title}</h1>
          <h1>{data.Name[0].athlete_full_name}</h1>
          <h1>{data.Name[0].country_name}</h1>
          <h1>{data.Name[0].games_participations}</h1>
          <h1>{data.Name[0].first_game}</h1>
          <h1>{data.Name[0].athlete_year_birth}</h1>
          <h1>{data.Name[0].rising_star}</h1>
          <h1>{data.Name[0]["Gold medal"]}</h1>
          <h1>{data.Name[0]["Silver medal"]}</h1>
          <h1>{data.Name[0]["Bronze medal"]}</h1>
          <h1>{data.Name[0].bio}</h1>
          <h1>{data.Name[0]["Bronze medal"]}</h1>
          
        
        </div>
      </div>  */}
    </>
  );
}

export default UserProfile;
