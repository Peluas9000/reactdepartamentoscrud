import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios'; 
export default class ServiceHospital {
    getHospitales(){

    }
//prueba sincrona sin promise 
    async getDatos(){
        let url=Global.urlApiDepartamentos;
        let request="/api/departamentos";
        let response=await axios.get(url+request);
        console.log("Leyendo departamentos");
        return response.data;
    }

    getHospitalesPromise(){
        let url=Global.urlApiEjemplos;
        let request="api/hospitales";
        return new Promise(function(resolve){
            axios.get(url+request).then(response=>{
                resolve(response.data);
            })
        })
    } 

    async getHospitales(){
        let url=Global.urlApiEjemplos;
        let request="api/hospitales";
        let response=await axios.get(url+request);
        return response.data;

    }


    async getTrabajadores(idHospital){
        let url=Global.urlApiEjemplos;
        let request="api/trabajadores/trabajadoreshospitales?"+idHospital;
        let response=await axios.get(url+request);
        return response.data;
    }


}
