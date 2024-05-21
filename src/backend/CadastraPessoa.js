import express from 'express';
import cors from 'cors';
import connection from './db';

const app = express();
const PORTA = 3000;

app.use(express.json());
app.use(cors());

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ' + err.stack);
    return;
  }
  console.log('Conectado ao banco de dados com o ID ' + connection.threadId);
});

app.post('/CadastrarPessoa', (req, res) => {
  const { nome, idade, cpf, cep, logradouro, data_nascimento, bairro, email, telefone } = req.body;
  console.log("Dados recebidos", { nome, idade, cpf, cep, data_nascimento, logradouro, bairro, email, telefone });

  const sql = 'INSERT INTO pessoas_dados (nome, idade, cpf, cep, data_nascimento, logradouro, bairro, email, telefone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  connection.query(sql, [nome, idade, cpf, cep, data_nascimento, logradouro, bairro, email, telefone], (error, results, fields) => {
    if (error) {
      console.error('Erro ao inserir dados: ' + error.message);
      res.status(500).send('Erro ao inserir dados');
      return;
    }
    console.log('Dados inseridos com sucesso!');
    res.status(200).send('Dados inseridos com sucesso');
  });
});

app.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`);
});

export default app;
