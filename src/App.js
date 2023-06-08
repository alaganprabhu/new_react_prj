
import './App.css';

import Home from './Components/Home';
import About from './Components/About';
import Service from './Components/Service';

import {Routes,Route,Link} from 'react-router-dom'

function App() {
  return (
    <div>
      <div className="App">
       <div className="logo">
      <img src="./img/Logo.svg" id='log'/>
      <img src="./img/Interno.svg"/>
      </div>

      <div className='nav'>
        <Link to='/' id="Link">Home</Link>
        <Link to='/about' id="Link">About</Link>
        <Link to='/service' id="Link">Services</Link>
        <Link to='/' id="Link">Project</Link>
        <Link to='/' id="Link">Blog</Link>
        <Link to='/' id="Link">Contact</Link>
        
      </div>
    </div>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='service' element={<Service/>} />
      </Routes>
      
    </div>
  );
}

export default App;
