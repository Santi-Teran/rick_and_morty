const deleteFav = (req, res) => {
    const { id } = req.params;
  
    const index = favs.findIndex((p) => p.id === parseInt(id));
  
    if (index !== -1) {
        favs.splice(index, 1);
        res.status(200).json({ message: 'Personaje eliminado de favoritos' });
    } else {
        res.status(404).json({ message: 'Personaje no encontrado en favoritos' });
    }
};

export default deleteFav;