import { useState } from "react";

// Exercicio: Somar dois numeros e exibir no HTML
// Exercicio: Somar dois textos e exibir no HTML
// dado o exemplo de um contador de console

function Soma(){

    const [contador, setContador] = useState(1);

    function clicar(){
        setContador(contador + 1);
        console.log(contador);
    }

    return (
      <div>
        <h1>Soma</h1>
        <hr />
        <label>Numero 1: </label>
        <input type="text" />
        <br></br>
        <label>Numero 2: </label>
        <input type="text" />
        <br></br>
        <button onClick={clicar}>Somar</button>
      </div>
    );
  }

  export default Soma;