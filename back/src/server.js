import express from 'express';
import router from './routes/index.js';

const server = express();
const PORT = 3001;

server.use(express.json);
server.use('/', router);

server.listen(PORT, () => {
    console.log('Server raised in port ' + PORT)
});

// import http from "http";
// import getCharById from "./controllers/getCharById.js";
// import getCharDetail from "./controllers/getCharDetail.js";

// const PORT = 3001;

// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     if (req.url.includes('/onsearch')) {
//         const id = req.url.split('/').pop();
//         getCharById(res, id);
//     } else if (req.url.includes('/detail')) {
//         const id = req.url.split('/').pop();
//         getCharDetail(res, id);
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('Not Found');
//     }
// }).listen(PORT, 'localhost');
  
  
  
  
  