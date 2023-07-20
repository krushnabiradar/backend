// routes/api/movies.js
import express from 'express';
const router = express.Router();
import {
  getMovies,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie,
} from '../../controllers/movieController.js';

router.get('/', getMovies);
router.get('/:id', getMovieById);
router.post('/', addMovie);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);

export default router;
