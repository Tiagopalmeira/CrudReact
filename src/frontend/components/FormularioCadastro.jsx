import React, { useState } from 'react';
import "../public/css/form.css";
import { GiModernCity } from "react-icons/gi";

function FormularioCadastro() {
    const [formValores, setFormValores] = useState({
        nome: '',
        idade: '',
        cpf: '',
        cep: '',
        data_nascimento: '',
        logradouro: '',
        bairro: '',
        email: '',
        telefone: '',
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
            console.log(json);
            alert(json.message);
        } catch (err) {
            console.error("Erro ao enviar", err);
        }
    }

    return (
        <div className='container'>
            <span style={{ fontSize: '3em' }}>
                <br />
                <GiModernCity />
            </span>
            <form className='formulario' onSubmit={handleSubmit}>
                <div className='grid-container'>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" name="nome" id="nome" value={formValores.nome} onChange={handleChange} />

                    <label htmlFor="idade">Idade:</label>
                    <input type="text" name="idade" id="idade" value={formValores.idade} onChange={handleChange} />

                    <label htmlFor="cpf">CPF:</label>
                    <input type="text" name="cpf" id="cpf" value={formValores.cpf} onChange={handleChange} />

                    <label htmlFor="cep">CEP:</label>
                    <input type="text" name="cep" id="cep" value={formValores.cep} onChange={handleChange} />

                    <label htmlFor="data_nascimento">Data de Nascimento:</label>
                    <input type="date" name="data_nascimento" id="data_nascimento" value={formValores.data_nascimento} onChange={handleChange} />

                    <label jsonFor="logradouro">Logradouro:</label>
                    <input type="text" name="logradouro" id="logradouro" value={formValores.logradouro} onChange={handleChange} />

                    <label htmlFor="bairro">Bairro:</label>
                    <input type="text" name="bairro" id="bairro" value={formValores.bairro} onChange={handleChange} />

                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" value={formValores.email} onChange={handleChange} />

                    <label htmlFor="telefone">Telefone:</label>
                    <input type="text" name="telefone" id="telefone" value={formValores.telefone} onChange={handleChange} />
                </div>
                <button className="but" type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default FormularioCadastro;
