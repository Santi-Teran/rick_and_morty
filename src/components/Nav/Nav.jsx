import React from 'react';
import styles from './Nav.module.css'
import SearchBar from './SearchBar/SearchBar';

export default function Nav(props) {
    return (
        <nav className={styles.nav}>
            <SearchBar characters={props.characters} setCharacters={props.setCharacters} onSearch={props.onSearch} AddRandom={props.AddRandom}/>
        </nav>   
    );
 }