// controllers/producerController.js
import Producer from '../models/producerModel.js';

export const getProducers = async (req, res) => {
  try {
    const producers = await Producer.find();
    res.render('producer-list', { producers });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

export const getAddProducer = (req, res) => {
  res.render('producer-add');
};

export const postAddProducer = async (req, res) => {
  try {
    const { name } = req.body;
    const producer = new Producer({ name });
    await producer.save();
    req.flash('success_msg', 'Producer added successfully');
    res.redirect('/producers');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};
