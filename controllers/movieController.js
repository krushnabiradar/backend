// controllers/movieController.js
import Movie from '../models/movieModel.js';

export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find().populate('producer actors').exec();
    res.json(movies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id).populate('producer actors').exec();
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.json(movie);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const addMovie = async (req, res) => {
  try {
    const { name, yearOfRelease, producer, actors } = req.body;
    const movie = new Movie({ name, yearOfRelease, producer, actors });
    await movie.save();
     res.status(201).json(movie);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateMovie = async (req, res) => {
  try {
    const { name, yearOfRelease, producer, actors } = req.body;
    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.id,
      { name, yearOfRelease, producer, actors },
      { new: true }
    ).populate('producer actors').exec();
    if (!updatedMovie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.json(updatedMovie);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteMovie = async (req, res) => {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.id).exec();
    if (!deletedMovie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.json(deletedMovie);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
