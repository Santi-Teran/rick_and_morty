import {useState} from 'react';
import VideoBackground from './components/Background Video/video.jsx'
import Nav from './components/Nav/Nav.jsx'
import Cards from './components/Cards/Cards.jsx'
import Detail from './components/Detail/Detail.jsx'
import About from './components/About/About.jsx'
import { Routes, Route } from 'react-router-dom';

function App () {
  const [characters, setCharacters] = useState([]);

  function onSearch(character) {
  
    fetch(`https://rickandmortyapi.com/api/character/${character.name}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
            const characterExists = characters.find(char => char.id === data.id);
            if (characterExists) {
              window.alert('El personaje ya fue agregado');
            } else {
              setCharacters((oldChars) => [...oldChars, data]);
              }
            } else {
             window.alert('No hay personajes con ese ID');
          }
       });
  }

  function AddRandom() {
    const randomID = Math.floor(Math.random() * 826) + 1;

    fetch(`https://rickandmortyapi.com/api/character/${randomID}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No se pudo agregar el personaje aleatorio');
         }
      });
  }
 
  const onClose = id => {
    setCharacters(characters.filter(char => char.id !== id))
  }

  return (
    <div>
      <VideoBackground/>
      <Nav onSearch={onSearch} AddRandom={AddRandom}/>
      <Routes>
        <Route path="/" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App
