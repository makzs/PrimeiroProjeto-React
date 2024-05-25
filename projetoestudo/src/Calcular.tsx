import React, { useState } from 'react';

function App() {
    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');
    const [resultadoSoma, setResultadoSoma] = useState(0);
    const [texto1, setTexto1] = useState('');
    const [texto2, setTexto2] = useState('');
    const [resultadoConcatenacao, setResultadoConcatenacao] = useState('');
    const [contador, setContador] = useState(0);

    function escreverNumero1(e : any) {
        setNumero1(e.target.value);
    }

    function escreverNumero2(e : any) {
        setNumero2(e.target.value);
    }

    function somar() {
        const soma = parseFloat(numero1) + parseFloat(numero2);
        setResultadoSoma(soma);
    }

    function concatenar() {
        const concatenacao = texto1 + texto2;
        setResultadoConcatenacao(concatenacao);
    }

    function incrementar() {
        setContador(contador + 1);
        console.log(contador);
    }

    return (
        <div>
            <h1>Aplicação Unificada</h1>
            <hr />
            <div>
                <h2>Soma</h2>
                <label>Numero 1: </label>
                <input
                    type="text"
                    value={numero1}
                    onChange={escreverNumero1}
                />
                <br />
                <label>Numero 2: </label>
                <input
                    type="text"
                    value={numero2}
                    onChange={escreverNumero2}
                />
                <br />
                <button onClick={somar}>Somar</button>
                <h3>Resultado: {resultadoSoma}</h3>
            </div>
            <hr />
            <div>
                <h2>Concatenar</h2>
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
                <button onClick={concatenar}>Concatenar</button>
                <h3>Resultado: {resultadoConcatenacao}</h3>
            </div>
            <hr />
            <div>
                <h2>Contador</h2>
                <button onClick={incrementar}>Contar</button>
                <p>{contador}</p>
            </div>
        </div>
    );
}

export default App;
