import React, { useState } from "react";

function App() {

  const [contador, definirContador] = useState(0);

  function aumentarValor() {
    definirContador(contador + 1);
  }
  function diminuirValor() {
    definirContador(contador - 1);
  }

  return (
    <div>
      <div className="container">
        <div className="itens">
          <h1> {contador} </h1>
          <button onClick={aumentarValor}> + </button>
          <button onClick={diminuirValor}> - </button>
        </div>
      </div>
    </div>

  )
}
export default App;