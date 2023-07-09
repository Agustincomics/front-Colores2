import React from 'react';
import ItemColor from './ItemColor';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { obtenerColores } from './helpers/queries';

const Admin = () => {
    const [colores, setColores] = useState([]);

    useEffect(()=>{
            obtenerColores().then((respuesta)=>{
            console.log(respuesta)
            setColores(respuesta);
            console.log(colores)
        })
    },[])

    return (
        <section className='with-background'>
                <section className="container mainSection " >
                    <div className="d-flex justify-content-between align-items-center mt-5">
                    <h1 className="display-4">Lista de Colores</h1>
                    <Link className="btn btn-primary" to="/crear">
                        Agregar
                    </Link>
                    </div>
                    <hr />
                    <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                        <th>Codigo</th>
                        <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            colores.map((color)=> <ItemColor key={color._id} color={color} setColores={setColores}></ItemColor>)
                        }
                    </tbody>
                    </Table>
                </section>
        </section>
    );
};

export default Admin;