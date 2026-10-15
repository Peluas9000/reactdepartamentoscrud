import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';

export default class ServiceDepartamentos {

    getDepartamentos=()=>{
        return new Promise(function(resolve,reject){
            let url=Global.urlApiDepartamentos;
            let request="/api/departamentos";
            axios.get(url+request).then(response=>{
                console.log("Leyendo departamentos");
                resolve(response.data)
            }).catch(error=>{
                console.log(error);
                reject(error)
            })

        }
    )
        ;
    }

    insertDepartamento=(departamento)=>{

        return new Promise(function(resolve,reject){
            let url=Global.urlApiDepartamentos;
            let request="api/departamentos";
            axios.post(url+request,departamento).then(response=>{
                console.log("Insertado departamento");
                resolve(response.data)  

            }).catch(error=>{
                console.log("Error al insertar");
                reject(error)
            })
        }
    )
    }


    updateDepartamento=(departamento)=>{
        return new Promise(function(resolve,reject){
        let url = Global.urlApiDepartamentos;
        let request="api/departamentos";
        axios.put(url+request,departamento).then(response=>{
            console.log("Actualizado departamento");
            resolve(response.data)
        }).catch(error=>{
            console.log("Error al actualizar");
            reject(error)
        })
        })
    }

    deleteDepartamento=(id)=>{
        return new Promise(function(resolve,reject){
        let url = Global.urlApiDepartamentos;
        let request="api/departamentos/" + id;
        axios.delete(url+request).then(response=>{
            console.log("Eliminado departamento");
            resolve(response.data)
        }).catch(error=>{
            console.log("Error al eliminar");
            reject(error)
        })
        })
    }

}
