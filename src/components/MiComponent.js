import React, {Component} from "react";

class MiComponent extends Component{
    render(){

          let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso', 'Jamon cocido'],
            calorias: 400
          };  





        return(
            <div className="mi-componente">
            <p>Hola soy el componente</p>
            <ol>
            {
                receta.ingredientes.map((ingredientes, i) => {
                   return(
                       <li key={i}>
                           {ingredientes}
                       </li>
                   );
            })
            }
             </ol>
             </div>
             );
    }
}

export default MiComponent;