import React, { useState } from 'react';
import { BiPencil, BiShow } from 'react-icons/bi';
import FormularioCadastro from './components/FormularioCadastro';
import Grid from './components/grid';
import './public/css/opcao.css';

const Opcao = () => {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [exibirGrid, setExibirGrid] = useState(false); // Novo estado para controlar a exibição do Grid

    const toggleFormulario = () => {
        setMostrarFormulario(!mostrarFormulario);
        setExibirGrid(false); // Ao exibir o formulário, oculte o Grid
    };

    const toggleExibirGrid = () => {
        setExibirGrid(!exibirGrid); // Alternar a exibição do Grid
        setMostrarFormulario(false); // Ao exibir o Grid, oculte o formulário
    };

    return (
        <div className="container">
            <h2> Prefeitura municipal de Alto da Glória</h2>
            <div className="cabecalho">
                <div className="but">
                    <button onClick={toggleFormulario}>
                        Cadastrar <BiPencil />
                    </button>
                    <button onClick={toggleExibirGrid}>
                        Visualizar cadastros <BiShow />
                    </button>
                </div>
            </div>
            {mostrarFormulario && <FormularioCadastro />}
            {exibirGrid && <Grid />} {/* Renderize o Grid aqui */}
        </div>
    );
};

export default Opcao;
