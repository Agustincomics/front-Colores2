import React from 'react';
import { useEffect } from 'react';
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {useParams, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import { consultaeditarColor, obtenerColor } from './helpers/queries';


const EditarColor = () => {
    const {id}= useParams();
    const navegacion = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue
      } = useForm();
      
      useEffect(()=>{
        obtenerColor(id).then( (respuesta)=>{
            console.log(respuesta);
            setValue('nombreColor', respuesta.nombreColor)
            setValue('pickColor', respuesta.pickColor)
        })  
        console.log(id)
      }, [])

      const onSubmit = (colorEditado) =>{
        console.log(colorEditado);
        consultaeditarColor(colorEditado, id).then((respuesta)=>{
            if (respuesta) {
                if (respuesta.status === 200) {
                    Swal.fire('Color actualizado', `El Color: ${colorEditado.nombreColor} fue editado correctamente`, 'success');
                    navegacion('/');
                }else{
                    Swal.fire('Se produjo un error', `El color: ${colorEditado.nombreColor} no fue editado, intentelo mas tarde`, 'error');
                }
            }else{
                Swal.fire('Se produjo un error', `El color: ${colorEditado.nombreColor} no fue editado, intentelo mas tarde`, 'error');
            }
            
        })
      }

    return (
        <section className="container mainSection">
            <h1 className="display-4 mt-5">Editar Color</h1>
            <hr />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formNombreColor">
                <Form.Label>Color*</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ej: Rojo"
                    {...register("nombreColor", {
                    required: "El nombre del color es obligatorio",
                    minLength: {
                        value: 2,
                        message: "La cantidad minima de caracteres es de 2 digitos",
                    },
                    maxLength: {
                        value: 100,
                        message: "La cantidad minima de caracteres es de 100 digitos",
                    },
                    })}
                />
                <Form.Text className="text-danger">
                    {errors.nombreColor?.message}
                </Form.Text>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formNombreReceta">
                <Form.Label>Color*</Form.Label>
                <Form.Control
                    type="color"
                    placeholder="Ej: #f3f3f5"
                    {...register("pickColor", {
                    required: "El color es obligatorio"
                    })}
                />
                <Form.Text className="text-danger">
                    {errors.pickColor?.message}
                </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                Guardar
                </Button>
            </Form>
        </section>
    );
};

export default EditarColor;