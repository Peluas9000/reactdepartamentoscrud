import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function DeleteDepartamento({
  departamento,
  deleteDepartamento,
  cancelarEliminacion
}) {
  const navigate = useNavigate();

  return (
    <div className="alert alert-danger" role="alert">
      <h1>Quieres eliminar este departamento?</h1>
      <ul className="list-group">
        <li className="list-group-item">ID: {departamento.numero}</li>
        <li className="list-group-item">Nombre: {departamento.nombre}</li>
        <li className="list-group-item">Localidad: {departamento.localidad}</li>
      </ul>
      <button
        className="btn btn-danger"
        style={{backgroundColor: 'red', border: '1px solid red'}}
        onClick={() => deleteDepartamento(departamento)}
      >
        Eliminar
      </button>
      <button
        className="btn btn-secondary"
        style={{backgroundColor: 'blue', border: '1px solid blue'}}
        onClick={() => {
          cancelarEliminacion()
          navigate('/')
        }}
      >
        Cancelar
      </button>
    </div>
  )
}
