import { useState } from 'react';

function Concatenar() {
    const [texto1, setTexto1] = useState('');
    const [texto2, setTexto2] = useState('');
    const [resultado, setResultado] = useState('');

    function clicar() {
        const concatenacao = texto1 + texto2;
        setResultado(concatenacao);
    }

    return (
        <div>
            <h1>Concatenar</h1>
            <hr />
            <label>Texto 1: </label>
            <input
                type="text"
                value={texto1}
                onChange={(e) => setTexto1(e.target.value)}
            />
            <br />
            <label>Texto 2: </label>
            <input
                type="text"
                value={texto2}
                onChange={(e) => setTexto2(e.target.value)}
            />
            <br />
            <button onClick={clicar}>Concatenar</button>
            <h2>Resultado: {resultado}</h2>
        </div>
    );
}

export default Concatenar;
