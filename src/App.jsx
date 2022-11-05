import { useState,useEffect} from 'react'
import './App.css'
import axios from 'axios'
import img1 from "./assets/background1.png"
import ResidentInfo from './components/ResidentInfo';

function App() {
  const [location,setLocation]=useState({});
  const [locationId,setLocationId] =useState("");

  useEffect(() =>{
      const randomId =Math.floor(Math.random() * 125) + 1;
       axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
         .then(res => setLocation(res.data))
  },[])
  const searchLocation = () =>{
      axios.get(`https://rickandmortyapi.com/api/location/${locationId}`)
       .then(res => setLocation(res.data))
  }

console.log(locationId);
  return (
    <div className="App">
      <div className='header'>
        <h1>Rick and Morty Wiki</h1>
    </div>
       <div className='title'>
         <h2 className='dimension-title-1'>Search a dimension</h2>
       <input 
            type="text" 
            value ={locationId} 
            onChange={e =>setLocationId(e.target.value)}
            placeholder="Introduce a number"
            />
            <button onClick={searchLocation}>Search</button>
         <h2>{location.name}</h2>
         <div>
           <h2><b>type:</b>{location.type}</h2>
           <h2><b>dimension:</b>{location.dimension}</h2>
           <h2><b>population:</b>{location.residents?.length}</h2>
         </div>
       </div>
            <ul className='grid-box'>
                {
                location.residents?.map(location=>(
                    //<li key ={location}>{location}</li>
                <ResidentInfo location={location}
                 key={location}
                />
            ))
                }
            </ul>
    </div>
  )
}

export default App
