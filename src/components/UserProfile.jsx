import React from "react"; 

function UserProfile({ data, setShowProfile }) {
  console.log(data);
  return (
    <>
      <div className="App" >
        <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
          <div className="white-gradient" />

          <h1>{data.Name[0].athlete_full_name}</h1>
          <h1>{data.Name[0].participant_type}</h1>
          <h1>{data.Name[0].country_name}</h1>
          <h1>{data.Name[0].athlete_medals}</h1>
          <h1>{data.Name[0].athlete_year_birth}</h1>
          <h1>{data.Name[0].country_code}</h1>
          <h1>{data.Name[0].country_name}</h1>
          <h1>{data.Name[0].event_title}</h1>
          <h1>{data.Name[0].first_game_diff}</h1>
          <h1>{data.Name[0].rising_star}</h1>
          <h1>{data.Name[0]["Bronze medal"]}</h1>
          <button onClick={() => setShowProfile(false)}>close</button>
        
        </div>
      </div>
    </>
  );
}

export default UserProfile;
