
import './App.css';
import Datos from './components/datos.js'
import Listado from './components/Listado';
import TodosElementos from './components/TodosElementos';

function App() {

  console.log(Datos);

   let pregunta = 'launch'; 

   let prueba = Datos.filter((desa) => {
    return desa.fase.includes(pregunta)
   })
   console.log(prueba)

  return (
    <div className="App">

      <div className='zona1'>
        <h1> UF1844 Prueba Práctica </h1>
        <br/>
        <h3>Pre Dowlani </h3>
        <br/>
        <TodosElementos datos={Datos} />
      </div>
      <div className='zona2'>
        <Listado datos={Datos} pruebas={prueba}/>
        
      </div>
      
      <div>
      </div>

    </div>
  );
}

export default App;
