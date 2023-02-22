import Card from './Card';
import cardsStyle from './Cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   return (
      <div className={cardsStyle.cards}>
         {characters.map((item) => (
            <Card 
               id= {item.id} 
               name= {item.name} 
               species= {item.species} 
               gender= {item.gender} 
               image= {item.image} /> ))
         }
      </div>
   )
}
