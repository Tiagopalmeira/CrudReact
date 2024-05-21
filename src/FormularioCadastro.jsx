import React, { useState } from 'react';

function FormularioCadastro() {
    const [formValores, setFormValores] = useState({
        nome: '',
        idade: '',
        CPF: '',
        CEP: '',
        Logradouro: '',
        Bairro: '',
        Telefone: '',
        Email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValores(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log("Dados a serem enviados:", formValores);
            const response = await fetch('http://localhost:3000/pessoas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formValores)
            });
            const json = await response.json();
            console.log(response);
            console.log(json);
            // alert(json.pessoa)
        } catch (err) {
            console.error("Erro ao enviar", err);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                Nome:
                <input type="text" name="nome" value={formValores.nome} onChange={handleChange} /> <br />
                Idade:
                <input type="text" name="idade" value={formValores.idade} onChange={handleChange} /> <br />
                CPF:
                <input type="text" name="CPF" value={formValores.CPF} onChange={handleChange} /> <br />
                CEP:
                <input type="text" name="CEP" value={formValores.CEP} onChange={handleChange} /> <br />
                Logradouro:
                <input type="text" name="Logradouro" value={formValores.Logradouro} onChange={handleChange} /> <br />
                Bairro:
                <input type="text" name="Bairro" value={formValores.Bairro} onChange={handleChange} /> <br />
                Telefone:
                <input type="text" name="Telefone" value={formValores.Telefone} onChange={handleChange} /> <br />
                Email:
                <input type="text" name="Email" value={formValores.Email} onChange={handleChange} /> <br />
                Verifique se seus dados estão inseridos <br />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default FormularioCadastro;