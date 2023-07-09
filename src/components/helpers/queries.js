const URL_COLOR = import.meta.env.VITE_API_COLOR;

export const obtenerColores = async()=>{
    try {
        const respuesta = await fetch(URL_COLOR)
        const listaColores = await respuesta.json();
        return listaColores;
    } catch (error) {
        console.log(error);
    }
}

export const obtenerColor = async(id)=>{
    try {
        const respuesta = await fetch(`${URL_COLOR}/${id}`)
        const colorEditar = await respuesta.json();
        return colorEditar;
    } catch (error) {
        console.log(error);
    }
}

export const consultaBorrarColor = async(id)=>{
    try {
        const respuesta = await fetch(`${URL_COLOR}/${id}`, {
            method: "DELETE"
        });
        return respuesta;
    } catch (error) {
        console.log(error);
    }
}

export const consultaCrearColor = async(color)=>{
    try {
        const respuesta = await fetch(URL_COLOR, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(color)
        });
        return respuesta;
    } catch (error) {
        console.log(error);
    }
}

export const consultaeditarColor = async(color, id)=>{
    try {
        const respuesta = await fetch(`${URL_COLOR}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(color)
        });
        return respuesta;
    } catch (error) {
        console.log(error);
    }
}