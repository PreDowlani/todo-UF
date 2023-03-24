import { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import Mascotas from './components/Mascotas';

function App() {

  const mascotas = [{
    id : 1,
    nombre :'Flaffy',
    raza : 'Shetland Sheepdog', 
    edad : '5', 
    diagnostico : 'Loco Perdido', 
    propietario : 'Pre Dowlani'
  },
  {
    id : 2,
    nombre :'Pluto',
    raza : 'Bloodhound', 
    edad : '4', 
    diagnostico : 'Gastrointestinales', 
    propietario : 'Goffy'
  },
  {
    id : 3,
    nombre :'Scooby doo',
    raza : 'Great Dane', 
    edad : '9', 
    diagnostico : 'Respiratoria: Linguatulosis', 
    propietario : 'Shaggy'
  },
  {
    id : 4,
    nombre :'Nevado',
    raza : 'Bichon Maltes', 
    edad : '3', 
    diagnostico : 'Muscular: Toxoplasmosis', 
    propietario : 'Shin Chan'
  }]

    const[animal, setAnimales] = useState(mascotas)

    const crearNuevaMascota = (mascot) =>{
      setAnimales([...animal,mascot])
    }


  return (
    <div className="App">
            <h1>UF1845 - AE01 : REACT </h1>
            <br/>
            <h3>Prashanth Dowlani (No me gusta usar el CARD!)</h3>
            <br/>
          <div className='uf1845'>
            <div className='formulario'>
              <Formulario  onNewMascotas={crearNuevaMascota}/>
            </div>
              <div className='animales'>
                <Mascotas  nuevoAnimal={animal} />
              </div>
          </div>
    </div>
  );
}

export default App;
