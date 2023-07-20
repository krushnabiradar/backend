// routes/api/actors.js
import express from 'express';
const router = express.Router();
import {
  getActors,
  getActorById,
  addActor,
  updateActor,
  deleteActor,
} from '../../controllers/actorController.js';

router.get('/', getActors);
router.get('/:id', getActorById);
router.post('/', addActor);
router.put('/:id', updateActor);
router.delete('/:id', deleteActor);

export default router;
