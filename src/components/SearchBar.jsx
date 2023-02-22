import searchStyle from './SearchBar.module.css'

export default function SearchBar(props) {
   return (
      <div className={searchStyle.div}>
         <input className={searchStyle.input}
            type= 'search'
            name= 'search'
            id= 'search'
            placeholder='ID del personaje'/>
         <button className={searchStyle.button} onClick={props.SearchBar}>Agregar</button> 
      </div>
   );
}
