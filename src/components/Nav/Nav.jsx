import React from 'react';
import style from './Nav.module.css'
import './icons.css'
import SearchBar from '../SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';


export default function Nav(props) {

    function handleLogout() {
        props.logout()
    }

    return (
        <nav className={style.container}>   
            <div className={style.navLinksContainer}>
                <NavLink exact to="/home" className={style.navLink}>Home</NavLink>
                <NavLink exact to="/about" className={style.navLink}>About</NavLink>
                <NavLink exact to="/favorites" className={style.navLink}>Favorites</NavLink>
                <NavLink exact to="/portfolio" className={style.navLink}>Portfolio</NavLink>
                <NavLink onClick={handleLogout} className={style.navLink}>Logout</NavLink>
            </div>
            <SearchBar
                characters={props.characters} 
                setCharacters={props.setCharacters} 
                onSearch={props.onSearch} 
                AddRandom={props.AddRandom} 
                logout={props.logout}
            />
        </nav>   
    );
}