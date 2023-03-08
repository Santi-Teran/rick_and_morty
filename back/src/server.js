import http from "http";
import characters from './utils/data.js';

const PORT = 3001;

http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
  
    if (req.url.includes('rickandmorty/character')) {
  
        const id = req.url.split('/').pop();
        const character = characters.filter((char) => char.id === Number(id));

        res.writeHead(200, { 'Content-Type' : 'aplicattion-json'});
        res.end(JSON.stringify(character[0]));
    }
}).listen(PORT, 'localhost');
  
  
  
  
  
  