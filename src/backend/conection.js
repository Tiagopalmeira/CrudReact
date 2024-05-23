import pool from './db.js';

export const getAllPessoas = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM pessoas_dados');
        res.status(200).json(result);
    } catch (error) {
        console.error('Erro ao buscar pessoas:', error);
        res.status(500).send('Erro ao buscar pessoas');
    }
};

export const createPessoa = async (req, res) => {
    const { nome, idade, cpf, cep, logradouro, data_nascimento, bairro, email, telefone } = req.body;
    try {
        await pool.query('INSERT INTO pessoas_dados (nome, idade, cpf, cep, data_nascimento, logradouro, bairro, email, telefone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', 
            [nome, idade, cpf, cep, data_nascimento, logradouro, bairro, email, telefone]);
        res.status(201).send('Pessoa criada com sucesso');
    } catch (error) {
        console.error('Erro ao criar pessoa:', error);
        res.status(500).send('Erro ao criar pessoa');
    }
};

export const updatePessoa = async (req, res) => {
    const id = req.params.id;
    const { nome, idade, cpf, cep, logradouro, data_nascimento, bairro, email, telefone } = req.body;
    try {
        await pool.query('UPDATE pessoas_dados SET nome = ?, idade = ?, cpf = ?, cep = ?, data_nascimento = ?, logradouro = ?, bairro = ?, email = ?, telefone = ? WHERE id = ?', 
            [nome, idade, cpf, cep, data_nascimento, logradouro, bairro, email, telefone, id]);
        res.status(200).send('Pessoa atualizada com sucesso');
    } catch (error) {
        console.error('Erro ao atualizar pessoa:', error);
        res.status(500).send('Erro ao atualizar pessoa');
    }
};

export const deletePessoa = async (req, res) => {
    const id = req.params.id;
    try {
        await pool.query('DELETE FROM pessoas_dados WHERE id = ?', [id]);
        res.status(200).send('Pessoa excluída com sucesso');
    } catch (error) {
        console.error('Erro ao excluir pessoa:', error);
        res.status(500).send('Erro ao excluir pessoa');
    }
};
