import './App.css';
import './Api/Api'
import { Header } from "./Header/Header";
import { Navbar } from "./Navbar/Navbar";
import Api from './Api/Api';
import { Pspotify ,Cancion ,getSounds} from './Api/Pspotify';
import { useEffect, useState } from 'react';

function App() {

  var [nombre, setNombre] = useState("");
  var [data, setDatas] = useState([]);

  const getAlbumNach = async () => {
    try {
      let token = await Pspotify(); 
      console.log(token);
      let listData = await getSounds(token);
      
      setDatas(listData.map(a => new Cancion(a.name, a.duration_ms, a.track_number)));
      
    } catch (error) {
      console.error("Error al obtener el token o sonidos:", error);
    }
  }
  var  filter  = data.filter( (a) => a.nombre.toLowerCase().includes( nombre.toLowerCase() ) )
  const manejarCambio = (event ) =>{
    setNombre(event.target.value)

  }



  return (
    <div className='app'>
      
      <input 
        type="text" 
        plaseholder="buscar nombres"
        value={nombre}
        onChange= {manejarCambio}
        
      />
     <ul>
      {    
        filter.length > 0 ?( filter.map( (a) => <li>  numero :  {a.id},  nombre : {a.nombre} ,  duracion :  {a.duration_ms} </li> ) )
        : ( filter.map( (a) => <li>  numero :  {a.id},  nombre : {a.nombre} ,  duracion :  {a.duration_ms} </li> ) )
         }
      
     </ul>
      <button onClick={() => getAlbumNach()}>update list</button>

    </div>
    
  );
}

export default App;