import React from 'react';
import {useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { Form, Button } from 'react-bootstrap';
import { consultaCrearColor } from './helpers/queries';
import Swal from 'sweetalert2'

const CrearColor = () => {
    const navegacion = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm();

      const onSubmit = (colorNuevo) => {
        console.log(colorNuevo);
        consultaCrearColor(colorNuevo).then((respuesta)=>{
          if(respuesta.status === 201){
            Swal.fire(
              'Color Creado',
              `El Color ${colorNuevo.nombreColor} fue creado`,
              'success'
            );
            navegacion('/');
            reset();
          }else{
            Swal.fire(
              'Se produjo un error',
              `Intente realizar esta operacion mas tarde`,
              'error'
            )
          }
        })
      };

    return (
        <section className="container mainSection">
            <h1 className="display-4 mt-5">Nuevo Color</h1>
            <hr />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formNombreReceta">
                <Form.Label>Color*</Form.Label>
                <Form.Control
                    type="color"
                    placeholder="Ej: rojito"
                    {...register("pickColor", {
                    required: "El color es obligatorio"
                    })}
                />
                <Form.Text className="text-danger">
                    {errors.pickColor?.message}
                </Form.Text>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formInstruccionesReceta">
                <Form.Label>Nombre*</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ej: rojillo"
                    {...register("nombreColor", {
                    required: "El nombre del color es obligatorio",
                    minLength: {
                        value: 2,
                        message: "La cantidad minima de caracteres es de 2 digitos",
                    },
                    maxLength: {
                        value: 100,
                        message: "La cantidad maxima es de 100 caracteres",
                    },
                    })}
                />
                <Form.Text className="text-danger">
                    {errors.nombreColor?.message}
                </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                Guardar
                </Button>
            </Form>
        </section>
    );
};

export default CrearColor;