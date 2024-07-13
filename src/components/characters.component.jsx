import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import CharacterTable from './characterTable.component'

const Character = () => {
  const inputRef = useRef()
  const [data, setData] = useState([])
  const [singleData, setSingleData] = useState({})
  useEffect(()=>{
    async function fetchData(){
      const result = await axios(
        'https://swapi.dev/api/people/',
      );
      setData(result.data.results)
    }
    fetchData()   
  }, [])
  const fetchButtonClicked = () =>{
    async function fetchSingleData(){
      const result = await axios(
        `https://swapi.dev/api/people/?search=${inputRef.current.value}`,
      );
      setSingleData(result.data)
      //setData(result.data.results)
    }
    fetchSingleData()
  }
  return (
    <div className="controls">
      <div className="input-container p-3">
        <span>Character Name:</span>
        <input ref={inputRef} type="text" className="text-input" />
        <button onClick={()=>{fetchButtonClicked()}} className="fetch-button">Fetch</button>
      </div>
      {singleData.count >=1 && singleData ? 
      singleData.results.map((result,index)=>{
        return (
          <div className="card" style={{width: `18rem`}}>
            <div className="card-body">
              <h5 className="card-title">{`Name: ${result.name}`}</h5>
              <p className="card-text">{`Gender: ${result.gender}`}</p>
              <p className="card-text">{`Height: ${result.height}`}</p>
            </div>
          </div> 
        )
      })
      : null}
      {singleData.count === 0 && singleData ?
      <div style={{color:`red`}}>Data Not Found!!!</div>:null}
      {data.length > 0 ? 
      <div>
        <CharacterTable items={data}></CharacterTable> 
      </div>   
      : null}
    </div>
    // Display list of all characters here when page loads
    // Once a character name is entered and fetch button is clicked, fetch it's details (name, gender, height)  and display character details in a card
  );
};

export default Character;
