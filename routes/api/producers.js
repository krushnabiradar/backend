// routes/api/producers.js
import express from 'express';
const router = express.Router();
import {
  getProducers,
  getProducerById,
  addProducer,
  updateProducer,
  deleteProducer,
} from '../../controllers/producerController.js';

router.get('/', getProducers);
router.get('/:id', getProducerById);
router.post('/', addProducer);
router.put('/:id', updateProducer);
router.delete('/:id', deleteProducer);

export default router;
