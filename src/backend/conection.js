import connection from "./db.js";

export function read(callback) {
    connection.query('SELECT * FROM cadastro_pessoa', callback);
}

export function create(nome, idade, cpf, cep, logradouro, bairro, email, data_nascimento, telefone, callback) {
    connection.query('INSERT INTO cadastro_pessoa (nome, idade, cpf, cep, logradouro, bairro, data_nascimento, email, telefone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) ', [nome, idade, cpf, cep, logradouro, bairro, data_nascimento, email, telefone], callback);
}

export function update(id, novosDados, callback) {
    connection.query('UPDATE cadastro_pessoa SET ? WHERE id = ?', [novosDados, id], callback);
}

export function deletePes(id, callback) {
    connection.query('UPDATE cadastro_pessoa SET status = "inativo" WHERE id = ?', [id], callback);
}

export default connection;
