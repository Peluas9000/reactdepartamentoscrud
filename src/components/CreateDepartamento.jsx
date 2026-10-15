import React, { Component } from 'react'
import ServiceDepartamentos from '../services/ServiceDepartamentos';
import { Navigate } from 'react-router-dom';

export default class CreateDepartamento extends Component {
    cajaNumero=React.createRef();
    cajaNombre=React.createRef()
    cajaLocalidad=React.createRef()
    servicio=new ServiceDepartamentos();
    
    state={
        mensaje:"",
        status:false,
        error:false
    }

    insertDepartamento=(event)=> {
        event.preventDefault();
        const numero = Number(this.cajaNumero.current.value);
        const nombre = this.cajaNombre.current.value.trim();
        const localidad = this.cajaLocalidad.current.value.trim();

        if(!Number.isInteger(numero) || !nombre || !localidad){
            this.setState({
                mensaje:"Introduce un número entero, un nombre y una localidad.",
                error:true
            });
            return;
        }

        let departamento={
            numero: numero,
            nombre: nombre,
            localidad: localidad
        }

        this.servicio.insertDepartamento(departamento).then((result)=>{
            this.setState({
                mensaje:"Departamento insertado",
                status:true,
                error:false
            })
        }).catch((error)=>{
            const mensaje = error.response && error.response.data
                ? (typeof error.response.data === "string"
                    ? error.response.data
                    : error.response.data.message || error.response.data.title)
                : error.message;
            this.setState({
                mensaje:mensaje || "No se pudo insertar el departamento.",
                status:false,
                error:true
            })
        })

    }

    
  render() {

    if(this.state.status===true){
        return <Navigate to="/"/>

    }else{

    
    return (
       
      <div>
        {
            this.state.mensaje &&
            (
                <div className={`alert ${this.state.error ? "alert-danger" : "alert-success"}`} role="alert">
                    {this.state.mensaje}
                </div>
            )
        }
        <h1>Insertar departamento </h1>
        <form onSubmit={this.insertDepartamento}>
            <label >Número:</label>
            <input type="number" id="numero" className="form-control" ref={this.cajaNumero} required />
            <label >Nombre:</label>
            <input type="text" id="nombre" className="form-control" ref={this.cajaNombre} required />
            <label >Localidad:</label>
            <input type="text" id="localidad" className="form-control" ref={this.cajaLocalidad} required />
            <button type="submit" className="btn btn-primary">Insertar</button>

        </form>
      </div>
    )}
  }
}
