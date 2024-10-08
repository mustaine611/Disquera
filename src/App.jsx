import './App.css';
import './Api/Api'
import { Header } from "./Header/Header";
import { Navbar } from "./Navbar/Navbar";
import Api from './Api/Api';



function App() {
  return (
    <div className='app'>
       
        <Navbar/>
        <Header/>
        <Api/>
        

    </div>
    
  );
}

export default App;
