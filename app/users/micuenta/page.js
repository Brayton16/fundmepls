"use client"
import UserNavBar from "@/components/userNavbar";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Placeholder } from "react-bootstrap";

export default function micuenta(){

    const [userID, setUserID] = useState(0); // Utilizamos useState para almacenar el userID
    const [query, setQuery] = useState('');
    const [proyectos, setProyectos] = useState([]);
    const [categorias, setCategorias] = useState(['Tecnología', 'Salud', 'Educación', 'Arte', 'Energía']); // Ejemplo de categorías
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
    const [mostrarCategorias, setMostrarCategorias] = useState(false); // Estado para mostrar/ocultar el menú de categorías
    const [showMontoInput, setShowMontoInput] = useState(false); // Mostrar campo para monto
    const [montoRecaudado, setMontoRecaudado] = useState(''); // Valor del monto recaudado
    const [showFechaInput, setShowFechaInput] = useState(false); // Mostrar campo para fecha
    const [fechaLimite, setFechaLimite] = useState(''); // Valor de la fecha límite
    //const [userID, setUserID] = useState(null); // Estado para almacenar el userID

    
    const obtenerUserID = () => {
        fetch(`http://localhost:3001/users/current`)
            .then(response => response.json())
            .then(data => {
                console.log("jaja", data, "user", data.UserID); // Verifica los datos recibidos
                setUserID(data.UserID); // Actualiza el userID en el estado
            })
            .catch(error => console.error('Error fetching proyectos:', error));
    };
    

    const buscarProyectos = (query) => {
        console.log("Lo que sea", userID)

        fetch(`http://localhost:3001/proyecto?userID=${userID}&query=${query}`)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Verifica los datos recibidos
                setProyectos(data);  // Actualiza el estado con los proyectos recibidos
            })
            .catch(error => console.error('Error fetching proyectos:', error));
    };


    return(

        <main className="m-0">
            <section className="vh-100">
                <div className="container py-0 h-100">
                    <div className="container-fluid p-0">
                        <div className="row bg-white m-0">
                            <div className="container container-fluid text-white w-100% p-4" style={{background: "#35303D"}}>
                                <div className="row">
                                    <div className="col-6 ">
                                        <h2>Mi cuenta</h2>
                                    </div>

                                <div className=" col-6 ">
                                    <div className="row">
                                        <div className=" col-4 ">
                                            <h4>Saldo disponible</h4>
                                        </div>
                                        <div className=" col-4 text-center">
                                            <h2> 500 </h2>
                                        </div>
                                        <div className=" col-4">
                                            <img
                                            href = "/"
                                            src = "/goofycoin.png"
                                            alt="Goofycoins"
                                            width={70}
                                            height={70}
                                            />
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="row m-0">
                            <div className="col-6 text-white pt-3 p-5" style={{background: "#49454F"}}>
                                <div className=" row m-0">
                                    <div className="col-7">
                                        <h3>Nombre:</h3>
                                        <h5>Placeholder</h5>
                                        <br></br>
                                        <h3>Apellidos:</h3>
                                        <h5>Placeholder</h5>
                                        <br></br>
                                        <h3>Email:</h3>
                                        <h5>Placeholder</h5>
                                        <br></br>
                                        <h3>Contraseña:</h3>
                                        <h5>Placeholder</h5>
                                        <br></br>
                                        <h3>Teléfono:</h3>
                                        <h5>Placeholder</h5>
                                        <br></br>
                                        <h3>Cédula:</h3>
                                        <h5>Placeholder</h5>
                                    </div>
                                    <div className="col-5">
                                    <img
                                        href = "/"
                                        src = "/default.jpg"
                                        width={170}
                                        height={170}
                                        style={{borderRadius: "50%"}}
                                        alt="Foto de perfil"
                                        />
                                    
                                    <p className="text-primary mt-3">Cambiar foto de perfil</p>
                                    </div>
                                </div>
                                

                            </div>

                            <div className="col-6 pt-3 p-5" style={{background: "#D9D9D9"}}>
                                <h3>Operaciones debilletera:</h3>
                                <h4 className="p-2 text-primary">Recargar Goofycoins</h4>
                                <h4 className="p-2 text-primary">Historial de Transacciones</h4>
                                <br></br>
                                <br></br>
                                <h3>Cambiar Preferencias</h3>
                                <h4 className="p-2 text-primary">Notificaciones al correo</h4>
                                <h4 className="p-2 text-primary">Mostrar lista negra</h4>
                                <br></br>
                                <br></br>
                                <h3>Soporte</h3>
                                <h4 className="p-2 text-primary">Ayuda</h4>
                                <h4 className="p-2 text-primary">Soporte</h4>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </main>

    );
}