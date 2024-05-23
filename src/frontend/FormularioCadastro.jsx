import React, { useState } from 'react';
import "./public/css/form.css"
import { GiModernCity } from "react-icons/gi";

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
            const response = await fetch('http://localhost:3000/CadastrarPessoa', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formValores)
            });
            const json = await response.json();
            console.log(response);
            console.log(json);
            alert(json.pessoa)
        } catch (err) {
            console.error("Erro ao enviar", err);
        }
    };

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

                    <label htmlFor="CPF">CPF:</label>
                    <input type="text" name="CPF" id="CPF" value={formValores.CPF} onChange={handleChange} />

                    <label htmlFor="CEP">CEP:</label>
                    <input type="text" name="CEP" id="CEP" value={formValores.CEP} onChange={handleChange} />

                    <label htmlFor="Logradouro">Logradouro:</label>
                    <input type="text" name="Logradouro" id="Logradouro" value={formValores.Logradouro} onChange={handleChange} />

                    <label htmlFor="Bairro">Bairro:</label>
                    <input type="text" name="Bairro" id="Bairro" value={formValores.Bairro} onChange={handleChange} />

                    <label htmlFor="Telefone">Telefone:</label>
                    <input type="text" name="Telefone" id="Telefone" value={formValores.Telefone} onChange={handleChange} />

                    <label htmlFor="Email">Email:</label>
                    <input type="text" name="Email" id="Email" value={formValores.Email} onChange={handleChange} />
                </div>

                <button className= "but" type="submit">Cadastrar</button>
            </form>
        </div>
    );
}


export default FormularioCadastro;