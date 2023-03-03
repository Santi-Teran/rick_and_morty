import React, { useState} from 'react';
import style from './SearchBar.module.css'

export default function SearchBar(props) {

   const [character, setCharacter] = useState("");

   const handleChange = (event) => {
     const{value} = event.target;
     setCharacter(value);
   }

   function handleClick() {
      const newCharacter = {
        name: character,
      };  
      props.onSearch(newCharacter);
      setCharacter("");
   }
   
   return (
      <div className={style.container}>
         <input className={style.button} placeholder='ID del personaje' type='search' name='search' id='search' onChange={handleChange}/>
         <button className={style.button} onClick={handleClick}>Add</button>
         <button className={style.button} onClick={props.AddRandom}>Random</button>
      </div>
   );
}
