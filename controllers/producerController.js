// controllers/producerController.js
import Producer from '../models/producerModel.js';

export const getProducers = async (req, res) => {
  try {
    const producers = await Producer.find();
    res.json(producers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getProducerById = async (req, res) => {
  try {
    const producer = await Producer.findById(req.params.id);
    if (!producer) {
      return res.status(404).json({ error: 'Producer not found' });
    }
    res.json(producer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const addProducer = async (req, res) => {
  try {
    const { name } = req.body;
    const producer = new Producer({ name });
    await producer.save();
    res.json(producer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateProducer = async (req, res) => {
  try {
    const { name } = req.body;
    const updatedProducer = await Producer.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true }
    );
    if (!updatedProducer) {
      return res.status(404).json({ error: 'Producer not found' });
    }
    res.json(updatedProducer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteProducer = async (req, res) => {
  try {
    const deletedProducer = await Producer.findByIdAndDelete(req.params.id);
    if (!deletedProducer) {
      return res.status(404).json({ error: 'Producer not found' });
    }
    res.json(deletedProducer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
