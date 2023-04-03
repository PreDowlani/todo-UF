import React from "react";

const Contacto = () => {
  return (
    <div className="app-contacto">
      <h4>Puede contactar a nosotros a través de :</h4>
      <a href="telf:+3462541253">Móvil</a>
      <br />
      <a href="mailto:academia@estafadores.com">E-mail</a>

      <br />
      <div className="form">
        <h4>Tambien nos podemos poner en contacto con ustedes :</h4>
        <form action="">
          <label htmlFor="nombre">Nombre : </label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            placeholder="nombre y apellidos"
            required
          />
          <br />
          <label htmlFor="edad">Edad : </label>
          <input
            type="number"
            name="edad"
            id="edad"
            placeholder="edad entre 18-60"
            min={18}
            max={60}
            required
          />
          <br />
          <label htmlFor="sexo">Sexo : </label>
          <label htmlFor="hombre">Hombre </label>
          <input type="radio" name="sexo" id="sexo" />
          <label htmlFor="mujer"> Mujer </label>
          <input type="radio" name="sexo" id="sexo" />
          <br />
          <label htmlFor="movil">Móvil : </label>
          <input type="tel" name="movil" id="movil" placeholder="su movil" />
          <br />
          <label htmlFor="texto">Mensaje : </label>
          <br />
          <textarea
            name="mensaje"
            id="mensaje"
            cols="30"
            rows="10"
            placeholder="escriba brevemente la informacion que necesita"
            required
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
