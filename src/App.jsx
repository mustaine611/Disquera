import './App.css';
import './Api/Api'
import { Header } from "./Header/Header";
import { Navbar } from "./Navbar/Navbar";
import Api from './Api/Api';
import { Pspotify } from './Api/Pspotify';


function App() {




  return (
    <div className='app'>
      
      
      <button onClick={Pspotify()}>update list </button>

    </div>
    
  );
}

export default App;
