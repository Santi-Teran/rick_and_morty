const postFav = (req, res) => {
    const { id, name, species, image, gender } = req.body;
  
    favs.push({ id, name, species, image, gender });
  
    res.status(200).json({ message: 'Personaje agregado a favoritos' });
};

export default postFav;