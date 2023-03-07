import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCard, deleteCard } from '../../redux/action.js';
import style from './Card.module.css';


export function Card(props) {

   const [ isFav, setIsFav ] = useState(false)

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites, props.id]);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         props.deleteCard(props.id);
      } else {
         setIsFav(true);
         props.addCard({ ...props });
      }
   }
   return (
      <div className={style.container}>
         <div className={style.buttonContainer}>
            { isFav ? 
               (<button onClick={handleFavorite}>💚</button>) : 
               (<button onClick={handleFavorite}>🤍</button>)
            }
            <button onClick={props.onClose}>❌</button>
         </div>
         <h2>{props.name}</h2> 
         <div className={style.containerH}>
            <h3>{props.species}</h3>
            <h3>{props.gender}</h3>
         </div>
         <img className={style.image} src={props.image} alt="props.name" />
         <Link to={`/detail/${props.id}`} className={style.Link}>
            <button>More Detail</button>
         </Link>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addCard: (character) => dispatch(addCard(character)),
      deleteCard: (id) => dispatch(deleteCard(id))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
