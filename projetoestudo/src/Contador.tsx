import { useState } from "react";

function Contador(){

    const [contador, setContador] = useState(0);

    function clicar(){
        setContador(contador + 1);
        console.log(contador);
    }

    return (
      <div>
        <h1>Contador</h1>
        <hr />
        <br></br>
        <button onClick={clicar}>Contar</button>
        <p>
            {contador}
        </p>
      </div>
    );
  }

  export default Contador;