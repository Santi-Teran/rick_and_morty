import Nav from '../Nav/Nav.jsx';
import Cards from '../Cards/Cards.jsx';

function Home({ characters, onClose }) {
    return (
      <div>
        <Nav/>
        <Cards characters={characters} onClose={onClose} />
      </div>
    );
  }

export default Home;
