import { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
//Pages Import
import Components from "../pages/Components";
import Home from "../pages/Home";
import Service from "../pages/Service";
//Dom Import
import { Route, Routes } from "react-router-dom";



class Hero extends Component{
  render(){
    return(
      <div>
        <Navbar />
          <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='service' element={<Service />} />
            <Route path='components' element={<Components />} />
          </Routes>
          </div>
        <Footer />
      </div>
    )
  }
}

export default Hero