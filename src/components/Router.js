import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './Menu'
import Home from './Home'
import CreateDepartamento from './CreateDepartamento'
export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Menu/>
        <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/create" element={<CreateDepartamento/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
