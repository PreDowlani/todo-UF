import React from 'react'

const ElementoListado = ({datosSolos}) => {
  
  return (
    <div className='elementos'>
        <h3 key={datosSolos.id}> Dispocion de los elementos :</h3>
        <ul id='listas'>
            <li> <strong>Fase :</strong>  {datosSolos.fase}</li>
            <li> <strong>Proyecto :</strong>  {datosSolos.proyecto}</li>
            <li> <strong>Fecha Limite :</strong>  {datosSolos.fechalimite}</li>
            <li> <strong>Coder :</strong>  {datosSolos.coder}</li> 
        </ul>
        <br />
    </div>
    
  )
}

export default ElementoListado