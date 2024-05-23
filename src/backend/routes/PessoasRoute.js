import express from 'express';
import { getAllPessoas, createPessoa, updatePessoa, deletePessoa } from './pessoasController.js';

const router = express.Router();

router.get('/pessoas', getAllPessoas);
router.post('/pessoas', createPessoa);
router.put('/pessoas/:id', updatePessoa);
router.delete('/pessoas/:id', deletePessoa);

export default router;
