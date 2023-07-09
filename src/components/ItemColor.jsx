import React from 'react';
import { consultaBorrarColor, obtenerColores } from './helpers/queries';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ItemColor = ({color, setColores}) => {
    const borrarColor =()=>{
        Swal.fire({
            title: '¿Esta seguro de eliminar el color?',
            text: "No se puede revertir este paso",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Borrar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
            
              consultaBorrarColor(color._id).then( (respuesta) =>{
                if(respuesta.status === 200){
                  Swal.fire(
                    'Color eliminado',
                    `El Color ${color.nombreColor} fue eliminado`,
                    'success'
                  );
                  obtenerColores().then((respuesta)=> setColores(respuesta) )

                }else{
                  Swal.fire(
                    'Se produjo un error',
                    `Intente realizar esta operacion mas tarde`,
                    'error'
                  )
                }
              })
            }
          })
    }

    return (
        <tr>
            <td>{color.pickColor}</td>
            <td>{color.nombreColor}</td>
            <td>
                <Link className="btn btn-warning me-2" to={`/editar/${color._id}`}>Editar</Link>
                <Button variant="danger" onClick={borrarColor}>
                Borrar
                </Button>
            </td>
        </tr>
    );
};

export default ItemColor;