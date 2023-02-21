import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (
      <div>
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
