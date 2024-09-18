"use client";  // Esto indica que es un Client Component
import React, { useState, useEffect } from 'react';

export default function CrearProyecto() {

    const [userID, setUserID] = useState(0); // Utilizamos useState para almacenar el userID

    const obtenerUserID = () => {
        fetch(`http://localhost:3001/users/current`)
            .then(response => response.json())
            .then(data => {
                console.log("jaja", data, "user", data.UserID); // Verifica los datos recibidos
                setUserID(data.UserID); // Actualiza el userID en el estado
            })
            .catch(error => console.error('Error fetching proyectos:', error));
    };

    async function crearProyecto(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
        const formData = new FormData(event.target);
        const rawFormData = {
            idUser: userID,
            titulo: formData.get("titulo"),
            descripcion: formData.get("descripcion"),
            ubicacion: formData.get("ubicacion"),
            categoria: formData.get("categoria"), // Corrección: "categoria" en lugar de "categotia"
            dinero: formData.get("dinero"),
            fechaHora: formData.get("fechaHora") ,
            historial: formData.get("historia")
        };
        try {
            const response = await fetch(`http://localhost:3001/proyecto`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    idUser: rawFormData.idUser,
                    titulo: rawFormData.titulo,
                    descripcion: rawFormData.descripcion,
                    ubicacion: rawFormData.ubicacion,
                    categoria: rawFormData.categoria,
                    dinero: rawFormData.dinero,
                    fechaHora: rawFormData.fechaHora,
                    historial: rawFormData.historial
                }) 
            });

            const data = await response.json();
            console.log(data); // Maneja la respuesta del servidor
            alert("Proyecto creado exitosamente")
        } 
        catch (error) {
            console.error('Error:', error);
            alert('Error al crear un proyecto');
        }

        console.log(rawFormData);
    }

    useEffect(() => {
        obtenerUserID();
    }, []); 

    return (
        <main>
            <div className="container mt-5 p-5 bg-light">
                <form className="" onSubmit={crearProyecto}> {/* Cambio a onSubmit */}
                    <div className="row m-5">
                        <div className="col-4">
                            <h3>Título del proyecto</h3>
                            <p>Este título debe ser llamativo para que logres atraer donadores.</p>
                        </div>
                        <input className="col form-control" type="text" name="titulo" placeholder="Título" required />
                    </div>
                    <div className="row m-5">
                        <div className="col-4">
                            <h3>Descripción general</h3>
                            <p>Describe de manera clara de qué se trata tu proyecto.</p>
                        </div>
                        <textarea className="col form-control" name="descripcion" placeholder="Descripción" required></textarea>
                    </div>
                    <div className="row m-5">
                        <div className="col-4">
                            <h3>Ubicación del proyecto</h3>
                            <p>Indica de qué país o lugar viene tu proyecto.</p>
                        </div>
                        <input className="col form-control" type="text" name="ubicacion" placeholder="Ubicación" required />
                    </div>

                    <div className="row m-5">
                        <div className="col-4">
                            <h3>Categoría del proyecto</h3>
                            <p>Selecciona la categoría que mejor describa tu proyecto.</p>
                        </div>
                        <select className="col form-control" name="categoria" required>
                            <option value="tecnologia">Tecnología</option>
                            <option value="salud">Salud</option>
                            <option value="educacion">Educación</option>
                            <option value="arte">Arte</option>
                            <option value="energia">Energía</option>
                        </select>
                    </div>

                    <div className="row m-5">
                        <div className="col-4">
                            <h3>Meta de dinero recaudado</h3>
                            <p>Indica la cantidad de dinero que necesita recaudar.</p>
                        </div>
                        <input className="col form-control" type="number" name="dinero" placeholder="Dinero" required /> {/* Cambiado a tipo "number" */}
                    </div>

                    <div className="row m-5">
                        <div className="col-4">
                            <h3>Fecha y Hora del Proyecto</h3>
                            <p>Indica la fecha y hora relevante para tu proyecto.</p>
                        </div>
                        <input className="col form-control" type="datetime-local" name="fechaHora" required />
                    </div>

                    <div className="row m-5">
                        <div className="col-4">
                            <h3>Imágenes del proyecto</h3>
                            <p>Agrega imágenes correspondientes a tu proyecto.</p>
                        </div>
                        <input className="col form-control" type="file" multiple />
                    </div>
                    <div className="row m-5">
                        <div className="col-4">
                            <h3>Historia del proyecto</h3>
                            <p>
                                Escribe de manera clara cómo se van a emplear los fondos recaudados, 
                                la importancia del proyecto, etc. Todo aquello lo cuál tenga que ver con el proyecto.
                            </p>
                        </div>
                        <textarea className="col form-control" name="historia" placeholder="Redacta todo acerca del proyecto" required></textarea>
                    </div>
                    <button className="btn btn-dark m-3 mx-5" type="submit">Guardar</button> {/* Cambiado a tipo "submit" */}
                </form>
            </div>
        </main>
    );
}
