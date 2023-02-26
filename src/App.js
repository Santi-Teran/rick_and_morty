import {useState, useEffect} from 'react';
import VideoBackground from './components/Background Video/video.jsx'
import Nav from './components/Nav/Nav.jsx'
import Form from './components/Form/Form.jsx';
import Cards from './components/Cards/Cards.jsx'
import Detail from './components/Detail/Detail.jsx'
import About from './components/About/About.jsx'
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';

function App () {

  const location = useLocation();

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

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'santiagoteranmatias@gmail.com';
  const password = 'ediporey05';

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    }
  }

  useEffect(() => {
    // eslint-disable-next-line
    !access && navigate('/');
    // eslint-disable-next-line
  }, [access]);

  return (
    <div>
      <VideoBackground/>
      {access && location.pathname !== '/' && <Nav onSearch={onSearch} AddRandom={AddRandom}/>}
      <Routes>
        <Route path="/" element={<Form login={login}/>}/>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App
