
import './App.css';
import Animales from './comoponents/Animales';

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

 
  return (
    <div className="App">
      <div className='zona1'>
        <h1> UF1844 - Actividad Evaluable 3 </h1>
      </div>
        <br/>
      <div className='zona2'>
        <Animales animales = {mascotas} />
        
 
      </div>
    </div>
  );
}

export default App;
