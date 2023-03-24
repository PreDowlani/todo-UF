import React from 'react'

const Animal = ({mascota}) => {
  return (
    <div id ='listado'>
      <h2>El listado de las mascotas : </h2>
      <ul id='mascota'>
       <br />
        <li><strong>Nombre: </strong> <em>{mascota.nombre}</em></li>
        <li><strong>Raza: </strong>  <em>{mascota.raza}</em></li>
        <li><strong>Edad: </strong>  <em>{mascota.edad}</em></li>
        <li><strong>Diagnóstico: </strong> <em>{mascota.diagnostico}</em></li>
        <li><strong>Propietario: </strong>  <em>{mascota.propietario}</em></li>
        <br />
      </ul>
    </div>
  )
}

export default Animal