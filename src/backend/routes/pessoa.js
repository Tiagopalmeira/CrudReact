import express from 'express';
import { getAllPessoas, createPessoa, updatePessoa, deletePessoa } from '../controller.js';


const router = express.Router();

router.get('/pessoa', getAllPessoas);
router.post('/pessoa', createPessoa);
router.put('/pessoa/:id', updatePessoa);
router.delete('/pessoa/:id', deletePessoa);

export default router;