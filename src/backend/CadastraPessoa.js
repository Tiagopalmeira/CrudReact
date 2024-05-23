import express from 'express';
import cors from 'cors';
import pessoasRouter from './pessoasRouter.js';

const app = express();
const PORTA = 3000;

app.use(express.json());
app.use(cors());

app.use('/', pessoasRouter);

app.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`);
});

export default app;
