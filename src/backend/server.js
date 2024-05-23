import express from 'express';
import cors from 'cors';
import router from './routes/pessoa.js';

const app = express();
const PORTA = 3000;

app.use(express.json());
app.use(cors());
app.use('/', router);

app.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`);
});

export default app;

