// routes/producers.js
import { Router } from "express";
import { getProducers, getAddProducer, postAddProducer } from '../controllers/producerController.js';

export const producerRouter = Router();
producerRouter.get('/', getProducers);
producerRouter.get('/add', getAddProducer);
producerRouter.post('/add', postAddProducer);


