import cardStyle from './Card.module.css'


export default function Card(props) {
   return (
      <div className={cardStyle.card}>
         <button className={cardStyle.button} onClick={props.onClose}>X</button>
         <h2 className={cardStyle.titleH2}>{props.name}</h2>
         <div className={cardStyle.divTitles}>
            <h3 >{props.species}</h3>
            <h3 >{props.gender}</h3>
         </div>
         <img className={cardStyle.img} src={props.image} alt="props.name" />
      </div>
   );
}
