import React from 'react';
import { connect, useDispatch } from 'react-redux';
import style from './Favorites.module.css';
import Card from '../Card/Card';
import { filterCards, orderCards } from '../../redux/action';


export function Favorites({ filteredFavorites, props }) {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(filterCards('all'));
  }, [dispatch]);

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value))
  }

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value))
  }

  return (
    <div className={style.container}>
      <h1>My Favorites</h1>
      <div>
        <select className={style.button} onChange={handleOrder}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select className={style.button} onChange={handleFilter}>
          <option value="all">Todos</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless ">Genderless </option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <div className={style.cards}>
        {filteredFavorites.map((character) => (
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
    filteredFavorites: state.filteredFavorites,
  };
};

export default connect(mapStateToProps)(Favorites);