import React from "react";

const PorFase = ({ elementos }) => {
  return (
    <div>
      <h1>PorFase</h1>
      <ul>
        <li>
          <strong>Fase :</strong>
          {elementos.fase}
        </li>
        <li>
          <strong>Proyecto :</strong>
          {elementos.proyecto}
        </li>
        <li>
          <strong>Fecha Limite :</strong>
          {elementos.fechalimite}
        </li>
        <li>
          <strong>Coder :</strong>
          {elementos.coder}
        </li>
      </ul>
    </div>
  );
};

export default PorFase;
