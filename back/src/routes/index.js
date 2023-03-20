import { Router } from "express";
import getCharById from "../controllers/getCharById.js";
import getCharDetail from "../controllers/getCharDetail.js";
import getFav from "../controllers/getFav.js";
import postFav from "../controllers/postFav.js";
import deleteFav from "../controllers/deleteFavs.js";

const router = Router();

router.get('/onsearch/:id', getCharById);

router.get('/detail/:id', getCharDetail);

router.get('/favorites', getFav);

router.post('/favorites', postFav);

router.delete('/favorites/:id', deleteFav);

export default router;