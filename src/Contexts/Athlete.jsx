import React, { useState, useEffect } from 'react'
import AthleteContext from './AthleteContext'

 
const baseUrl = "http://localhost:5000";


function Athlete(props) {
   
    const [athletes, setAthletes] = useState([]); 
    useEffect( ()=>{
            getAthletes();
        
      },[])
    
      const getAthletes = async () =>{
    
        const option = {
            method : "GET",
            headers : {
                "Content-type" : "application/json",
            }
        }
    
        try {
            
           const data =  await fetch(`${baseUrl}/api/athletes`, option);
            const athelateDatas = await data.json();
            console.log(athelateDatas); 
            setAthletes(athelateDatas);
    
        } catch (error) {
            console.log(error);
        }
      }

 




  return (
    <AthleteContext.Provider value={{athletes}}>
      {props.children}
    </AthleteContext.Provider>
 
  )
}

export default Athlete
