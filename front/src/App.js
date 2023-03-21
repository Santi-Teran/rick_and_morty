import {useState, useEffect} from 'react';
import Nav from './components/Nav/Nav.jsx'
import Form from './components/Form/Form.jsx';
import Cards from './components/Cards/Cards.jsx'
import Detail from './components/Detail/Detail.jsx'
import About from './components/About/About.jsx'
import Favorites from './components/Favorites/Favorites.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';

function App () {

  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const username = 'username@gmail.com';
  const password = 'ejemplo1';
  const navigate = useNavigate();

  const onSearch = (character) => {
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character.id}`)
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

  const AddRandom = () => {
    const randomID = Math.floor(Math.random() * 826) + 1;
    fetch(`http://localhost:3001/rickandmorty/onsearch/${randomID}`)
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

  const login = (userData) => {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    }
  }

  const logout = () => {
    setAccess(false);
    navigate('/');
  }

  useEffect(() => {
    !access && navigate('/');
    // eslint-disable-next-line
 }, [access]);

  return (
    <div>
      {location.pathname !== '/' && <Nav logout={logout}/>}
      <Routes>
        <Route path="/" element={<Form login={login}/>}/>
        <Route path="/home" element={<Cards onSearch={onSearch} AddRandom={AddRandom} characters={characters} onClose={onClose} />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path= "/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  )
}

export default App
