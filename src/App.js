// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
// import Home from './components/Home';
import About from './components/About';
// import AddVehicle from './components/AddVehicle';
import VehicleList from './components/VehicleList';
import Footer from './components/Footer';
import HomeT from './components/HomeT';
import AddVehicle_day22 from './components/Addvehicle_day22';
import UpdateVehicle_day22 from './components/UpdateVehicle_day22';

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="" element={<HomeT />} />
          <Route path="/home" element={<HomeT />} />
          <Route path="/about" element={<About />} />
          <Route path="/addvehicle" element={<AddVehicle_day22 />} />
          <Route path="/vehiclelist" element={<VehicleList />} />
          <Route path="/updatevehicle/:id" element={<UpdateVehicle_day22 />} />
        </Routes>
      </BrowserRouter>
      <br/>
      <Footer/>

    </>
  )
}

export default App;
