import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Main/Home';
import CarStore from './Components/Inventory/CarStore';
import MainStore from './Components/Inventory/MainStore';
import Login from './Components/Credential/Login';
import Register from './Components/Credential/Register';
import AboutUs from './Components/About/AboutUs';
import MainUsers from './Components/User/MainUsers';
import Services from './Components/About/Services';
import MyCarts from './Components/User/Mycart/MyCarts';
import Profile from './Components/User/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/inventoryStore' element={<MainStore/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/user' element={<MainUsers/>}/>
        <Route path='/cart' element={<MyCarts/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    
        
    </div>
  );
}

export default App;
