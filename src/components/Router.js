import React, { Component } from 'react'
import { BrowserRouter, Route, Routes,useParams } from 'react-router-dom'
import Menu from './Menu'
import Home from './Home'
import Update from './Update'
import CreateDepartamento from './CreateDepartamento'
import HospitalesMultiple from './HospitalesMultiple'

export default class Router extends Component {
  render() {
    function UpdateDepartamentoElement() {
        let{id,nombre,localidad}=useParams();

        return <Update id={id} nombre={nombre} localidad={localidad}/>
    }
    return (
      <BrowserRouter>
        <Menu/>
        <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/create" element={<CreateDepartamento/>}/>
            <Route path="/update/:id/:nombre/:localidad" element={<UpdateDepartamentoElement/>}/>
            <Route path="/hospitales" element={<HospitalesMultiple/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
