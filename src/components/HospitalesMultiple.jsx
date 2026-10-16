import React, { Component } from 'react'
import ServiceHospital from '../services/ServiceHospital';
import TrabajadoresComponent from './TrabajadoresComponent';
export default class HospitalesMultiple extends Component {
    servicio = new ServiceHospital();
    seleccion= React.createRef();

    state={
        hospitalesSeleccionados:[],
        hospitales:[]
    }

     loadHospitales=async ()=>{
        let datos= await this.servicio.getHospitales();
        this.setState({
            hospitales:datos
        })
    }
    getHospitalesSeleccionado=(event)=>{
        event.preventDefault();
        let aux=[];
        let opciones=this.seleccion.current.options;
        for (let i = 0; i < opciones.length; i++) {
            if(opciones[i].selected){
                aux.push(opciones[i].value);
            }
        }
        console.log(aux);
        this.setState({
            hospitalesSeleccionados:aux
        })
    }

    componentDidMount=async()=>{
        await this.loadHospitales();
    }

  render() {
    return (
      <div>
        <h1>Hola Mundo</h1>
       {/* <table className='table table-striped'>
            <tbody>
                {this.state.hospitales.map((hospital, index) => {
                    return (
                        <tr key={index}>
                            <td>{hospital.idHospital}</td>
                            <td>{hospital.nombre}</td>
                            <td>{hospital.direccion}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>*/}

        <form>
            <label>Seleccionar Hospital</label>
            <select ref={this.seleccion} className='form-select' size={5} multiple>
                {
                    this.state.hospitales.map((hospital, index) => {
                        return (
                            <option key={index} value={hospital.idHospital}>
                                {hospital.nombre}
                            </option>
                        )
                    })
                
                }
            </select>
            <button className='btn btn-primary' onClick={this.getHospitalesSeleccionado}>Mostrar trabajadores</button>
                {
                    this.state.hospitalesSeleccionados.length>0 &&
                    (<TrabajadoresComponent idHospitales={this.state.hospitalesSeleccionados}/>)
                }
        </form>
      </div>
    )
  }
}
