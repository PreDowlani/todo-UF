import React, { useState } from "react";

const TodosElementos = ({ datos }) => {
  const [nuevoBuscar, setNuevoBuscar] = useState([]);

  const gestorBuscar = (event) => {
    setNuevoBuscar(event.target.value);
    console.log(nuevoBuscar);
  };

  const prueba = datos.filter((prue) => {
    return prue.fase.includes(nuevoBuscar);
  });

  return (
    <div className="todoEl">
      <div className="search">
        <form action="">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="buscar por fase.."
            onChange={gestorBuscar}
            value={nuevoBuscar}
          />
        </form>
      </div>
      <h1>Todos los elementos</h1>
      {prueba.map((elemnt) => (
        <ul id="listas2">
          <li>
            <strong>Fase :</strong> {elemnt.fase}
          </li>
          <li>
            <strong>Proyecto :</strong>
            {elemnt.proyecto}
          </li>
          <li>
            <strong>Fecha Limite :</strong>
            {elemnt.fechalimite}
          </li>
          <li>
            <strong>Coder :</strong>
            {elemnt.coder}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default TodosElementos;
