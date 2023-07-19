// controllers/movieController.js
import Movie from '../models/movieModel.js';

export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find().populate('producer actors').exec();
    res.render('movie-list', { movies });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

export const getAddMovie = async (req, res) => {
  try {
    const actors = await Actor.find();
    const producers = await Producer.find();
    res.render('movie-add', { actors, producers });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

export const postAddMovie = async (req, res) => {
  try {
    const { name, yearOfRelease, producer, actors } = req.body;
    const movie = new Movie({ name, yearOfRelease, producer, actors });
    await movie.save();
    req.flash('success_msg', 'Movie added successfully');
    res.redirect('/movies');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

export const getEditMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id).populate('producer actors').exec();
    const actors = await Actor.find();
    const producers = await Producer.find();
    res.render('movie-edit', { movie, actors, producers });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

export const postEditMovie = async (req, res) => {
  try {
    const { name, yearOfRelease, producer, actors } = req.body;
    await Movie.findByIdAndUpdate(req.params.id, { name, yearOfRelease, producer, actors });
    req.flash('success_msg', 'Movie updated successfully');
    res.redirect('/movies');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};
