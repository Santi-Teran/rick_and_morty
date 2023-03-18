import axios from 'axios';

const URL = 'https://rickandmortyapi.com/api/character/';

const getCharDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.get(`${URL}${id}`);
        const { name, species, image, gender, status, origin } = response.data;
        const character = { id, name, species, image, gender, status, origin };
        res.status(200).json(character);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default getCharDetail;

//------------------------------------------------------------------------

// import axios from 'axios';

// const URL = 'https://rickandmortyapi.com/api/character/';

// const getCharDetail = (req, res) => {
//     const { id } = req.params;
//     axios
//         .get(`${URL}${id}`)
//         .then((response) => {
//             const { id, name, species, image, gender, status, origin } = response.data;
//             const character = { id, name, species, image, gender, status, origin };
//             res.status(200).json(character);
//         })
//         .catch((error) => {
//             res.status(500).json({ message: error.message });
//         });
//     };

// export default getCharDetail;

//------------------------------------------------------------------------

// import axios from "axios";

// const getCharDetail = (res, id) => {
//     axios
//         .get(`https://rickandmortyapi.com/api/character/${id}`)
//         .then((response) => {
//             const { image, name, gender, status, origin, species } = response.data;
//             const character = { image, name, gender, status, origin, species };
//             res.writeHead(200, { 'Content-Type': 'application/json' });
//             res.end(JSON.stringify(character));
//         })
//         .catch((error) => {
//             res.writeHead(500, { 'Content-Type': 'text/plain' });
//             res.end(error.message);
//         });
// }

// export default getCharDetail;