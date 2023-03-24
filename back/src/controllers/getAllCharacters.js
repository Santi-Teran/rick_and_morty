import character from '../DB_connection.js' 

const getAllCharacters = async(req, res) => {
    try {
        const allCharacters = await character.findAll();
        res.status(200).json(allCharacters)
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export default getAllCharacters;