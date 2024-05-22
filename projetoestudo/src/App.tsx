import React from 'react';
import Soma from './Soma';
import Concatenar from './SomaTexto';

// criar um componente:
// 1- todo componente precisa ser nomeado com a primeira letra Maiscula!
// 2- Um componente deve ser uma função! (ele pode ser uma classe tbm mas isso é mais avançado)
// 3- Um componente deve retornar apenas um elemento pai HTML (como por exemplo uma div) (se tiver <> no lugar se chama fragmento e é possivel)
// 4- O componente deve ser exportado "export default App;" (para que ele possa ser importado e utilizado em outros lugares)


function App() {
  return (
    <div>
      <h1>Minha primeira aplicação em React</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus officiis quisquam sed, velit nulla nemo accusamus rerum culpa atque quis necessitatibus suscipit vel architecto possimus omnis facere hic ut nobis?</p>
      <h2>Titulo 2</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit distinctio nostrum aspernatur sapiente tempore at soluta repellat? Nulla corporis quos vitae reiciendis beatae odit adipisci, ratione at ab, amet quasi.</p>
      <hr></hr>
      <Soma></Soma>
      <Concatenar></Concatenar>
    </div>
  );
}


export default App;
