const getFav = (req, res) => {
    res.status(200).json(favs)
};

export default getFav;