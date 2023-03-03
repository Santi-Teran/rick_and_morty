import React from 'react';
import style from './Nav.module.css'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'



export default function Nav(props) {

    const [isOpen, setIsOpen] = React.useState(false);

    function handleToggleClick() {
        setIsOpen(!isOpen);
      }

    function handleLogout() {
        props.logout()
    }

    return (
        <nav className={style.container}>
            <h1>Rick & Morty Cards</h1>
            <div className={style.navLinksContainer}>
                <NavLink exact to="/home" className={style.navLink}>Home</NavLink>
                <NavLink exact to="/about" className={style.navLink}>About</NavLink>
                <NavLink exact to="/favorites" className={style.navLink}>Favorites</NavLink>
                <NavLink exact to="/portfolio" className={style.navLink}>Portfolio</NavLink>
                <NavLink onClick={handleLogout} className={style.navLink}>Logout</NavLink>
            </div>
            <div className={style.toggle}><FontAwesomeIcon icon={ faBars } onClick={handleToggleClick}/></div>
            <div className={`${style.dropDownMenu} ${isOpen ? style.open : ''}`}>
                <NavLink exact to="/home" className={style.navMenu}>Home</NavLink>
                <NavLink exact to="/about" className={style.navMenu}>About</NavLink>
                <NavLink exact to="/favorites" className={style.navMenu}>Favorites</NavLink>
                <NavLink exact to="/portfolio" className={style.navMenu}>Portfolio</NavLink>
                <NavLink onClick={handleLogout} className={style.navMenu}>Logout</NavLink>
            </div>
        </nav>   
    );
}