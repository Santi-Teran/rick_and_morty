import http from "http";
import data from './utils/data'

const PORT = 3001;

module.exports =

http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
  
    if (req.url.includes('rickandmorty/character')) {
  
        const characterId = req.url.split('/')[2];
        const character = data.find((character) => character.id === characterId);
  
        if (character) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(character));
        }
    }
}).listen(PORT, 'localhost');
  
  
  
  
  
  