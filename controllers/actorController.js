// controllers/actorController.js
import Actor from '../models/actorModel.js';

export const getActors = async (req, res) => {
  try {
    const actors = await Actor.find();
    res.json(actors);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getActorById = async (req, res) => {
  try {
    const actor = await Actor.findById(req.params.id);
    if (!actor) {
      return res.status(404).json({ error: 'Actor not found' });
    }
    res.json(actor);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const addActor = async (req, res) => {
  try {
    const { name } = req.body;
    const actor = new Actor({ name });
    await actor.save();
    res.json(actor);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateActor = async (req, res) => {
  try {
    const { name } = req.body;
    const updatedActor = await Actor.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true }
    );
    if (!updatedActor) {
      return res.status(404).json({ error: 'Actor not found' });
    }
    res.json(updatedActor);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteActor = async (req, res) => {
  try {
    const deletedActor = await Actor.findByIdAndDelete(req.params.id);
    if (!deletedActor) {
      return res.status(404).json({ error: 'Actor not found' });
    }
    res.json(deletedActor);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
