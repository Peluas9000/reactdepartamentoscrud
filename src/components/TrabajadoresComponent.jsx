import React, { Component } from 'react'
import ServiceHospital from '../services/ServiceHospital';
export default class TrabajadoresComponent extends Component {

    servicio=new ServiceHospital();
    state={
        trabajadores:[]
    }
    loadTrabajadores = async ()=>{
    let idhospitales=this.props.idHospitales;
        let data="";
        //idHospital=17&idHospital=22
        for(let id of idhospitales){
        data+="idhospital="+id+"&";

        }
        
        data=data.substring(0,data.length-1);
        let datos=await this.servicio.getTrabajadores(data);
        this.setState({
            trabajadores:datos
        })
    
    }

    componentDidMount=async()=>{
        await this.loadTrabajadores();

    }

    componentDidUpdate=async(prevProps)=>{
        if(prevProps.idHospitales!==this.props.idHospitales){
            await this.loadTrabajadores();
        }
    }  
  

 async componentDidMount(){}

  render() {
    return (
      <div>
        <h1>  Trabajadores</h1>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>IdTrabajador</th>
                    <th>Apellidos</th>
                    <th>Salario</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.trabajadores.map((trabajador,index)=>{
                        return( 
                        <tr key={index}>
                            <td>{trabajador.idTrabajador}</td>
                            <td>{trabajador.apellido}</td>
                            <td>{trabajador.salario}</td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}
