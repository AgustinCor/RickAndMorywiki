import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ResidentInfo = ({location}) => {

    const [character,setCharacter]=useState({});

    useEffect(() =>{
      axios.get(location)
        .then(res => setCharacter(res.data));
    },[])


    const isAlive =()=>{
      if (character.status === "Dead"){
         return(
          <div className='burble' style={{background:"#f00"}}></div>
         )
      } else if (character.status === "Alive"){
        return(
          <div className='burble' style={{background:"#0f0"}}></div>
        )
     } else if (character.status === "unknown"){
      return(
        <div className='burble' style={{background:"#555"}}></div>
      )
   }
    }

    return (
        <>
           <div className='cards'>
               <img src={character.image} alt="" />
            <div className='card-text'>
              <div>
                <li className='li-1'>{isAlive()}<h3>{character.status}</h3></li>
                <li><b>Name :</b>{character.name}</li>
                <li><b>Origin place:</b>{character.origin?.name}</li>
                <li><b>Chapters appeared:</b>{character.episode?.length}</li>
              </div>
            </div>
          </div>
        </>
    );
};

export default ResidentInfo;