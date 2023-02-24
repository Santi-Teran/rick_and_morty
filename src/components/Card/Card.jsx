import style from './Card.module.css'
import { Link } from 'react-router-dom';


export default function Card(props) {
   return (
      <div className={style.card}>
         <button className={style.button} onClick={props.onClose}>X</button>
         <Link to={`/detail/${props.id}`} className={style.navLink}>
            <h2 className={style.titleH2}>{props.name}</h2> 
            <div className={style.divTitles}>
               <h3 >{props.species}</h3>
               <h3 >{props.gender}</h3>
            </div>
            <img className={style.img} src={props.image} alt="props.name" />
         </Link>
      </div>
   );
}
