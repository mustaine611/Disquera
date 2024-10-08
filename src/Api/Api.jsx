import { wait } from '@testing-library/user-event/dist/utils';


import { useEffect, useState } from 'react';


class Cancion{
  constructor( nombre , id ){
    this.nombre = nombre
    this.id     = id 
  }
}

function Api() {

 var [nombre,setNonbre] = useState("")
 let [data, setDatas] = useState([])
    const list = () => {
        fetch("https://jsonplaceholder.typicode.com/albums",{method:"GET"})
        
        .then((response) => {
          return response.json()
        }
        )
        .then(json => {
          setDatas( json.map( (a) => { return new Cancion(a.title ,  a.id) }  )  )
          console.log(json.map( (a) => {return new Cancion(a.title ,  a.id) } ) )
        }
        )
        .catch(error => console.error(error))
      }
  var  filter  = data.filter( (a) => a.nombre.toLowerCase().includes( nombre.toLowerCase() ) )
  const manejarCambio = (event ) =>{
    setNonbre(event.target.value)

  }

  return (
    <div className="App">
     
     <h2> buscador  de nombre </h2>
     <input 
        type="text" 
        plaseholder="buscar nombres"
        value={nombre}
        onChange= {manejarCambio}
        
      />
     <ul>
      {    
        filter.length > 0 ?( filter.map( (a) => <li> {a.nombre} </li> ) )
        : ( filter.map( (a) => <li> {a.nombre} </li> ) )
         }
      
     </ul>
     <button onClick={list}>update list </button>
    </div>
  );
}

export default Api;