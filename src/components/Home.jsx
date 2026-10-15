import React, { Component } from 'react'
import loading from './../assets/images/loading.png'
import ServiceDepartamentos from '../services/ServiceDepartamentos';
import { NavLink } from 'react-router-dom';
export default class Home extends Component {
    servicio= new ServiceDepartamentos();
    state={
        departamentos:[],
        status:false
    }

    loadDepartamentos=()=>{
        this.servicio.getDepartamentos().then((result)=>{
            this.setState({
                departamentos:result,
                status:true
            })
        })
    }
    deleteDepartamento=(idDepartamento)=>{
        this.servicio.deleteDepartamento(idDepartamento).then((result)=>{
           this.loadDepartamentos();
        })
    }
    componentDidMount=()=>{
        this.loadDepartamentos();
    }

  render() {
    if(this.state.status==true){
    return (
      <div>
        <h1>Bienvenido a la aplicación</h1>
        <h2>Listado de departamentos</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Localidad</th>
                </tr>
            </thead>
            <tbody>
                {this.state.departamentos.map((departamento) => (
                    <tr key={departamento.numero}>
                        <td>{departamento.nombre}</td>
                        <td>{departamento.localidad}</td>
                        <td><NavLink  to={"update/" + departamento.numero+"/"+departamento.nombre+"/"+departamento.localidad} className="btn btn-primary">Actualizar</NavLink></td>
                        <td><button className="btn btn-danger" onClick={() => this.deleteDepartamento(departamento.numero)}>Eliminar</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    )
  } else {
    return (
      <div>
        <img src={loading} alt="Loading..." />
      </div>
    )
  
  }}
}
