import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from './Detail.module.css'

export default function Detail(props) {
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setDetail(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
  }, [id]);

  return (
    <div className={style.container}>
      <div className={style.div}>
        <h1>{detail.name}</h1>
        <p>STATUS: {detail.status}</p>
        <p>SPECIES: {detail.species}</p>
        <p>GENDER: {detail.gender}</p>
        <p>ORIGIN: {detail.origin?.name}</p>
      </div>
      <img src={detail.image} alt={detail.name} />
    </div>
  );
}