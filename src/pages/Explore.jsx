import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AthleteCard from "../components/AthleteCard/AthleteCard";
import "../components/Explore/Explore.css";
import { useContext } from "react";
import AthleteContext from "../Contexts/AthleteContext"; 
import UserProfile from "../components/UserProfile/UserProfile";

const Explore = () => {

  const {athletes} = useContext(AthleteContext);
  const [showProfile, setShowProfile] = useState(false);
  const [athleteData, setAthleteData] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [showAthletes, setAthletes] = useState(athletes);

  

  useEffect(() => {
    (searchText.trim() === "") || !searchText ? setAthletes(athletes) :
    setAthletes(
      athletes.filter((athle) => {
        return athle.Name[0].athlete_full_name.toLowerCase().includes(searchText.toLowerCase().trim());
      })
    )
  }, [searchText]);
     
  const handleSearch =(e)=>{
    
    setSearchText(e.target.value);
     
  }
  return (
<>
{
  
  showProfile ? <><Header />
   <UserProfile data={athleteData} setShowProfile={setShowProfile} />
   <Footer />
   </> : 
    <>
      <Header />

      <div style={{display:"flex", justifyContent:"center",margin: "30px 0px"}}>
      <label htmlFor="searchBox">Search</label>
      <input type="text" id="searchBox" onChange={handleSearch} value={searchText}/>
      </div>

      <div className="athlete-list gridBox container">
        {showAthletes.map((athlete) => (
          <AthleteCard key={athlete._id} athlete={athlete.Name[0]} id={athlete._id}  setShowProfile={setShowProfile} setAthleteData={setAthleteData} />
        ))}
      </div>
      <Footer />
    </>
}
</>
  );
};

export default Explore;
