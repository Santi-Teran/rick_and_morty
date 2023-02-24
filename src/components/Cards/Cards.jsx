import Card from '../Card/Card';
import cardsStyle from '../Cards/Cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   return (
      <div className={cardsStyle.cards}>
         {characters.map((character) => (
            <Card className={cardsStyle.card}
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
