// routes/movies.js
import { Router } from "express";
import {
  getMovies,
  getAddMovie,
  postAddMovie,
  getEditMovie,
  postEditMovie,
} from '../controllers/movieController.js';

export const movieRouter = Router();
movieRouter.get('/', getMovies);
movieRouter.get('/add', getAddMovie);
movieRouter.post('/add', postAddMovie);
movieRouter.get('/edit/:id', getEditMovie);
movieRouter.post('/edit/:id', postEditMovie);


