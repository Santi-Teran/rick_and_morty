import Card from '../Card/Card';
import SearchBar from '../SearchBar/SearchBar.jsx';
import style from '../Cards/Cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   return (
      <div>
         <div>
         <SearchBar
                characters={props.characters} 
                setCharacters={props.setCharacters} 
                onSearch={props.onSearch} 
                AddRandom={props.AddRandom} 
                logout={props.logout}
            />  
         </div>
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
      </div>
   )
}
