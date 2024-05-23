import React, { useState } from 'react';
import { GiModernCity } from 'react-icons/gi';

const Grid = ({ dados }) => {
    return (
        <div className='container'>
            <span style={{ fontSize: '3em' }}>
                <br />
                <GiModernCity />
            </span>
            <div className='lista-dados'>
                <h2>Dados Cadastrados</h2>
                <ul>
                    {dados.map((item, index) => (
                        <li key={index}>
                            <strong>Nome:</strong> {item.nome} <br />
                            <strong>Idade:</strong> {item.idade} <br />
                            <strong>CPF:</strong> {item.CPF} <br />
                            <strong>CEP:</strong> {item.CEP} <br />
                            <strong>Logradouro:</strong> {item.Logradouro} <br />
                            <strong>Bairro:</strong> {item.Bairro} <br />
                            <strong>Telefone:</strong> {item.Telefone} <br />
                            <strong>Email:</strong> {item.Email}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Grid;
