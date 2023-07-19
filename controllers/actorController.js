// controllers/actorController.js
import Actor from '../models/actorModel.js';

export const getActors = async (req, res) => {
  try {
    const actors = await Actor.find();
    res.render('actor-list', { actors });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

export const getAddActor = (req, res) => {
  res.render('actor-add');
};

export const postAddActor = async (req, res) => {
  try {
    const { name } = req.body;
    const actor = new Actor({ name });
    await actor.save();
    req.flash('success_msg', 'Actor added successfully');
    res.redirect('/actors');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};
