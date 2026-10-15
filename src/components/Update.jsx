import React, { Component } from 'react'
import ServiceDepartamentos from '../services/ServiceDepartamentos';
import { Navigate } from 'react-router-dom';
export default class Update extends Component {
    servicio=new ServiceDepartamentos();
    cajaNumero=React.createRef();
    cajaNombre=React.createRef()
    cajaLocalidad=React.createRef()
    state={
        status:false
    }

    updateDepartamento=(event)=>{
        event.preventDefault();
         let departamento={
            numero: parseInt(this.cajaNumero.current.value),
            nombre: this.cajaNombre.current.value,
            localidad: this.cajaLocalidad.current.value
        }
        console.log(departamento);
        this.servicio.updateDepartamento(departamento).then(result=>{
            
            this.setState({
                status:true
            })
        }).catch(error=>{
            console.log("Error al actualizar");
        })
}

  render() {
    if(this.state.status==true){
        return <Navigate to="/" />    
    }else{
    return (
      <div>
            <h1>Formulario de Actualización</h1>
            <form>
                <label >ID:</label>
                <input type="text" className="form-control" defaultValue={this.props.id} ref={this.cajaNumero} disabled/>
                <label >Nombre:</label>
                <input type="text" className="form-control" defaultValue={this.props.nombre} ref={this.cajaNombre} />
                <label >Localidad:</label>
                <input type="text" className="form-control" defaultValue={this.props.localidad}  ref={this.cajaLocalidad} />
                <button className="btn btn-primary" onClick={this.updateDepartamento} >Actualizar</button>
            </form>
      </div>
    )
}
  }
}
