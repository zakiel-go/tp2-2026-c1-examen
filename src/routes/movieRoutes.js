import express from "express";
import { getAllMoviesController, getMovieController, getAwardWinnersController, searchMoviesController } from "../controllers/movieController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// ⚠️ IMPORTANTE: las rutas con path fijo (/winners, /search) deben definirse
//    ANTES de la ruta dinámica (/:id), porque Express las evalúa en orden.
//    Si /:id se define primero, "winners" y "search" serán interpretados como un id.

router.get("/", getAllMoviesController);
router.get("/winners", getAwardWinnersController);
router.get("/search", searchMoviesController);
router.get("/:id", authMiddleware, getMovieController);

export default router;
