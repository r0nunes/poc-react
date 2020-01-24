import React, { useState } from "react";
import "./styles.css";

// Elemento
const elemento = <h2>Olá Renato O. Nunes</h2>; //JSX
const elemento2 = React.createElement(
  "div",
  null,
  React.createElement("h2", null, "Olá DevPleno!")
); //SEM JSX

// Forma de Atualizar um componente
const MostrarI = props => {
  return <p>{props.i}</p>;
};

// Componente: function component
export default function App(props) {
  // Outra forma de Atualizar um componente
  const [i, setI] = useState(1);

  const increment = () => {
    setI(i + 1);
  };

  return (
    <div className="App">
      <h1>
        Welcome {props.name} {i}
      </h1>
      <button onClick={increment}>Incrementar</button>
      <h2>You are doing Aulão React - DevPleno</h2>
      {elemento}
      {elemento2}
      <MostrarI i={i} />
    </div>
  );
}
