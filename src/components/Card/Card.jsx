import style from './Card.module.css'
import { Link } from 'react-router-dom';


export default function Card(props) {
   return (
      <div className={style.container}>
         <div className={style.buttonContainer}>
            <button onClick={props.onClose}>X</button>
         </div>
         <h2>{props.name}</h2> 
         <div className={style.containerH}>
            <h3>{props.species}</h3>
            <h3>{props.gender}</h3>
         </div>
         <img className={style.image} src={props.image} alt="props.name" />
         <Link to={`/detail/${props.id}`} className={style.Link}>
            <button>View Detail</button>
         </Link>
      </div>
   );
}
