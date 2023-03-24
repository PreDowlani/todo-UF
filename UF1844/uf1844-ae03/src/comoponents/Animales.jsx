import React from 'react'
import Animal from './Animal'

const Animales = (lista) => {
    const nuevasMascotas = lista.animales
  return (
    <div>
        <div id='crear'>
            <h2>Crear una app sencilla en React que permita mostrar un listado de todas las mascotas existentes en la base de datos </h2>
            <br />
            {nuevasMascotas.map((nuevas) => {
                return (
                    <Animal key={nuevas.id} mascota = {nuevas} />
                )
            }

            )}

        

 
        </div>





    </div>
  )
}

export default Animales