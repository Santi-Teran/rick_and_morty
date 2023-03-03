import Card from '../Card/Card';
import style from '../Cards/Cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   return (
      <div className={style.cards}>
         {characters.map((character) => (
            <Card 
               className={style.card}
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
   )
}
