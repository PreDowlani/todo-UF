import React from "react";

const Mascotas = (lista) => {
  const añadirMascota = lista.nuevoAnimal;
  return (
    <div>
      <h2>Mostramos la lista completa de las Mascotas.</h2>
      <br />
      {añadirMascota.map((añad) => {
        return (
          <div className="listas">
            <ul id="individual">
              <br />
              <h3>Datos de la mascota :</h3>
              <br />
              <li>
                <strong>Nombre: </strong> <em>{añad.nombre}</em>
              </li>
              <li>
                <strong>Raza: </strong> <em>{añad.raza}</em>
              </li>
              <li>
                <strong>Edad: </strong> <em>{añad.edad}</em>
              </li>
              <li>
                <strong>Diagnóstico: </strong> <em>{añad.diagnostico}</em>
              </li>
              <li>
                <strong>Propietario: </strong> <em>{añad.propietario}</em>
              </li>
              <br />
            </ul>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Mascotas;
