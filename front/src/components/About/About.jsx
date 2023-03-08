import React from 'react';
import style from './About.module.css'
import imagenes from '../../imagenes/fotoPerfil.png'

export default function About() {
  return (
    <div className={style.container}>
      <h2>Acerca de la aplicación</h2>
      <p>Esta aplicación permite agregar cartas de Rick y Morty a una colección personal. Cada carta contiene información sobre un personaje de la serie, como su nombre,   imagen y descripción. Se pueden agregar personajes, escribiendo su Id en el input, y apretando en Agregar, o tambien directamente apretando en Random, el cual agregara un personaje al azar.</p>
      <h3>Acerca del creador</h3>
      <p>La aplicación fue creada por Santiago Teran.</p>
      <img src={imagenes} alt="Foto de Santiago Teran" />
    </div>
  );
}
