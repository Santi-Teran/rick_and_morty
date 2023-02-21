export default function SearchBar(props) {
   return (
      <div>
         <input 
            type= 'search'
            name= 'search'
            id= 'search'
            placeholder='ID del personaje'/>
         <button onClick={props.SearchBar}>Agregar</button> 
      </div>
   );
}
