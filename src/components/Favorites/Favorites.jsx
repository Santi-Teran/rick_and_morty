import React from 'react';
import { connect } from 'react-redux';
import style from './Favorites.module.css';
import Card from '../Card/Card';


export function Favorites({ myFavorites, props }) {
  return (
    <div className={style.container}>
      <h1>My Favorites</h1>
      <div className={style.cards}>
        {myFavorites.map((character) => (
          <Card className={style.card}
               key={character.id}
               id= {character.id} 
               name= {character.name} 
               species= {character.species} 
               gender= {character.gender} 
               image= {character.image} 
               onClose= {() => props.onClose(character.id)}
               /> ))
         }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps)(Favorites);