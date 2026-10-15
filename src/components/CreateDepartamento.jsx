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
        status:false
    }

    insertDepartamento=(event)=> {
        event.preventDefault();
        let departamento={
            numero: parseInt(this.cajaNumero.current.value),
            nombre: this.cajaNombre.current.value,
            localidad: this.cajaLocalidad.current.value
        }

        this.servicio.insertDepartamento(departamento).then((result)=>{
            this.setState({
                mensaje:"Departamento insertado",
                status:true
            })
        }).catch((error)=>{
            this.setState({
                mensaje:error.mensaje,
                status:false
            })
        })

    }

    
  render() {

    if(this.state.status==true){
        return <Navigate to="/"/>

    }else{

    
    return (
       
      <div>
        {
            this.state.mensaje &&
            (
                <div className="alert alert-success" role="alert">
                    {this.state.mensaje}
                </div>
            )
        }
        <h1>Insertar departamento </h1>
        <form >
            <label >Número:</label>
            <input type="text" id="numero" className="form-control" ref={this.cajaNumero} />
            <label >Nombre:</label>
            <input type="text" id="nombre" className="form-control" ref={this.cajaNombre} />
            <label >Localidad:</label>
            <input type="text" id="localidad" className="form-control" ref={this.cajaLocalidad} />
            <button type="submit" onClick={this.insertDepartamento} className="btn btn-primary">Insertar</button>

        </form>
      </div>
    )}
  }
}
