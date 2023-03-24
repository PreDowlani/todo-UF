import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Formulario = ({ onNewMascotas }) => {
  const [error, setError] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevoRaza, setNuevoRaza] = useState("");
  const [nuevoEdad, setNuevoEdad] = useState("");
  const [nuevoDiag, setNuevoDiag] = useState("");
  const [nuevoProp, setNuevoProp] = useState("");

  const gestorNombre = (event) => {
    setNuevoNombre(event.target.value);
  };

  const gestorRaza = (event) => {
    setNuevoRaza(event.target.value);
  };

  const gestorEdad = (event) => {
    setNuevoEdad(event.target.value);
  };

  const gestorDiag = (event) => {
    setNuevoDiag(event.target.value);
  };

  const gestorProp = (event) => {
    setNuevoProp(event.target.value);
  };

  const gestorAñadir = (e) => {
    e.preventDefault();
    if (
      nuevoNombre.trim() === "" ||
      nuevoRaza.trim() === "" ||
      nuevoEdad.trim() === "" ||
      nuevoDiag.trim() === "" ||
      nuevoProp.trim() === ""
    ) {
      setError(true);
      return;
    }

    const NewAnimal = {
      id: uuidv4(),
      nombre: nuevoNombre,
      raza: nuevoRaza,
      edad: nuevoEdad,
      diagnostico: nuevoDiag,
      propietario: nuevoProp,
    };
    console.log(NewAnimal);
    onNewMascotas(NewAnimal);
    setNuevoNombre("");
    setNuevoRaza("");
    setNuevoEdad("");
    setNuevoDiag("");
    setNuevoProp("");
  };

  return (
    <div className="cont-form">
      <div id="formu">
        <h3>Formulario para añadir a la mascota en la Base de Datos :</h3>
        {error ? <h4>Porfavor rellene todos los datos</h4> : null}
        <br />
        <form action="" onSubmit={gestorAñadir}>
          <label htmlFor="nombre">Nombre : </label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            onChange={gestorNombre}
            value={nuevoNombre}
          />
          <br />
          <label htmlFor="raza">Raza : </label>
          <input
            type="text"
            name="razo"
            id="raza"
            onChange={gestorRaza}
            value={nuevoRaza}
          />
          <br />
          <label htmlFor="edad">Edad : </label>
          <input
            type="number"
            name="edad"
            id="edad"
            max={20}
            onChange={gestorEdad}
            value={nuevoEdad}
          />
          <br />
          <label htmlFor="diag">Diagnóstico : </label>
          <input
            type="text"
            name="diag"
            id="diag"
            onChange={gestorDiag}
            value={nuevoDiag}
          />
          <br />
          <label htmlFor="prop">Propietario : </label>
          <input
            type="text"
            name="prop"
            id="prop"
            onChange={gestorProp}
            value={nuevoProp}
          />
          <br />
          <button type="submit">Añadir</button>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
