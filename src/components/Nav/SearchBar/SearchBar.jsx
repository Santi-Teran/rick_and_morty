import React, { useState} from 'react';
import style from './SearchBar.module.css'
import { NavLink } from 'react-router-dom';



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

   function handleLogout() {
      props.logout();
   }
   
   return (
      <div className={style.div}>
         <ul className={style.menu}>
            <div className={style.options}>
               <div className={style.home}>
                  <li>
                     <button> <NavLink to="/home" exact className={style.navLink}>Home</NavLink></button>
                  </li>
                  <li>
                     <button><NavLink to="/about" className={style.navLink}>About</NavLink></button>
                  </li>
                  <li>
                     <button onClick={handleLogout}>Logout</button>
                  </li>
               </div>
               <div className={style.divH1}>
                  <li>
                     <h1>Rick and Morty Cards</h1>
                  </li>
               </div>
               <div className={style.add}>
                  <li>
                     <button className={style.buttonRandom} onClick={props.AddRandom}>Random</button>
                  </li>
                  <li>
                     <input placeholder='ID del personaje' type='search' name='search' id='search' onChange={handleChange}/>
                  </li>
                  <li>
                     <button className={style.buttonAdd} onClick={handleClick}>Add</button>
                  </li>
               </div>
            </div>
         </ul>
      </div>
   );
}
