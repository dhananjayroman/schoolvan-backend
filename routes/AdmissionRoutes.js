import express from 'express';
import { createAdmission, getAdmissions, deleteAdmission } from '../controllers/admissionController.js';

const router = express.Router();

router.post('/submit', createAdmission);
router.get('/', getAdmissions);
router.delete('/:id', deleteAdmission);

export default router;







