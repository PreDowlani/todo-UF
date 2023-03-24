
import ElementoListado from './ElementoListado'

const Listado = (nuevaLista) => {
    const masDatos = nuevaLista.pruebas
    
  return (
    <div id='crear'>
            <h2>Crear un Componentes :</h2>
        <div>
          <br />
          <div>
                        {masDatos.map((mas)=>(
                <ElementoListado key={mas.id} datosSolos ={mas} />
            ))}
          </div>

        </div>
 

    </div>
  )
}


export default Listado