import { useState } from "react";

// Exercicio: Somar dois numeros e exibir no HTML -
// Exercicio: Somar dois textos e exibir no HTML  -
// dado o exemplo de um contador de console -

function Soma() {
    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');
    const [resultado, setResultado] = useState(0);

    function escreverNumero1(e : any){
        setNumero1(e.target.value);
    }

    function escreverNumero2(e : any){
        setNumero2(e.target.value);
    }

    function clicar() {
        const soma = parseFloat(numero1) + parseFloat(numero2);
        setResultado(soma);
    }

    return (
        <div>
            <h1>Soma</h1>
            <hr />
            <label>Numero 1: </label>
            <input
                type="text"
                value={numero1}
                // onChange={(e) => setNumero1{e.target.value}}
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
            <button onClick={clicar}>Somar</button>
            <h2>Resultado: {resultado}</h2>
        </div>
    );
}

export default Soma;