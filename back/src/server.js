import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from './routes/index.js';
import sequelize from './DB_connection.js';
import saveApiData from './controllers/saveApiData.js';

const server = express();
const PORT = 3001;

server.use(express.json());
server.use(cors());
server.use(morgan('dev'));
server.use('/rickandmorty', router);

async function startServer() {
  await sequelize.sequelize.sync({ force: true });
  await saveApiData();

  server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

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
  
  
  
  
  