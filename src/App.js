import React,{useState,useEffect} from 'react';
import Character from "./components/Character";
import Button from "./components/Button"
import axios from 'axios';
import './App.css';
import styled from "styled-components";


const NameD = styled.div`
justify-content: space-between;
color: rgb(122, 84, 179);
&:hover {
  font-size: 20px;
  transition: 0.5s all ease-in-out;
  background-color: 'rgb(60, 58, 63)';
  fontColor: rgb(97, 16, 16);
  border: 5px solid #d2d2d2;
  box-shadow: '0px 1px 6px -2px #807f7f';
}
transition: 0.5s all ease-in-out;


`

const ButD = styled.div`
text-decoration: block;
color: rgb(122, 84, 179);
margin: 1px;
cursor: pointer;

&:hover {
  font-size: 20px;
  transition: 0.5s all ease-in-out;
  background-color: 'rgb(60, 58, 63)';
  color: rgb(97, 16, 16);
  border: 2px solid rgb(60, 58, 63);
  box-shadow: '0px 1px 6px -2px rgb(60, 58, 63)';
}
transition: 0.5s all ease-in-out;
`



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([]);
   
  useEffect(()=>{
    axios.get(`https://swapi.dev/api/people `)
    .then(res=>{
    setCharacters(res.data)
    console.log(characters)
     })
    .catch(err => console.log('something is fishy'))
  },[characters])
 
  


  return (
    <div className="App">
      <NameD>
      <h1 className="Header">REACT WARS</h1>
      </NameD>
      { 
     characters.map((character) => {
          return (
            <ButD>
              <Character name={character.name} /> 
              
               <button onClick={Button}>{character.birth_year}</button>
              
               </ButD>
          );
     })
      }
      
    </div>
  );
}

export default App;
