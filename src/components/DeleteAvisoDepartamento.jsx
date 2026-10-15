import React, { Component } from 'react'
import ServiceDepartamentos from '../services/ServiceDepartamentos';
import { Navigate } from 'react-router-dom';
export default class DeleteDepartamento extends Component {
  servicio= new ServiceDepartamentos();

  state={
    mensaje:"",
    status:true
  }





  render() {
    if(this.state.status==false){
        return <Navigate to="/"/>
    }else{
    return (
      <div className="alert alert-danger" role="alert">
        <h1>Quieres eliminar este departamento?</h1>
          <ul className="list-group">
            <li className="list-group-item">ID: {this.props.idDepartamento}</li>
            <li className="list-group-item">Nombre: {this.props.nombre}</li>
            <li className="list-group-item">Localidad: {this.props.localidad}</li>

          </ul>
        <button className="btn btn-danger" style={{backgroundColor: 'red', border: '1px solid red'}} >Eliminar</button>
        <button className="btn btn-secondary"  style={{backgroundColor: 'blue', border: '1px solid blue'}} >Cancelar</button>
      </div>
    )
  }
  }
}
