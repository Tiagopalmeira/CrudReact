import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'person',
});

export function connectToDatabase() {
    connection.connect((err) => {
        if (err) {
            console.error('Erro ao realizar conexão com BD:', err);
            return err;
        }
        console.log('Conexão com banco de dados estabelecida com sucesso');
    });
}

export default connection;
