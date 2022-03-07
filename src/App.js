import logo from './logo.svg';
import './App.css';
import MiComponent from './components/MiComponent';



function HolaMundo(nombre, edad){
  var presentacion = (<div><h2>Hola soy {nombre}</h2>
                      <h3>Tengo {edad} años</h3>
                      </div>
                      );
                        return presentacion;
                                  }

function App() {
  var nombre = "Jhonatan";
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
         {/*alert("Hola mundo con react!!")*/}  
         
         <p>
         {HolaMundo(nombre, 32)}
        </p>

      <section className='componentes'>
        <MiComponent />
      </section>
         
      </header>
    </div>
  );
}

export default App;
