const express = require("express");
const router = express.Router();
const cors = require("cors");
const { getAllPessoas, createPessoa, updatePessoa, deletePessoa } = require("./pessoasController.js");

router.use(express.json());
router.use(cors());

router.get('/pessoas', getAllPessoas);
router.post('/pessoas', createPessoa);
router.put('/pessoas/:id', updatePessoa); // Correção: o parâmetro da rota deve ser :id
router.delete('/pessoas/:id', deletePessoa);

module.exports = router;
