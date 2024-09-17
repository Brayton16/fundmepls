"use client";
import UserNavBar from "@/components/userNavbar";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Placeholder } from "react-bootstrap";

export default function micuenta() {

    const [nUsuarios, setNUsuarios] = useState(0);
    const [nProyectos, setNProyectos] = useState(0);
    const [nDonaciones, setNDonaciones] = useState(0);

    const contarUsuariosActivos = () => {
        fetch(`http://localhost:3001/users/activate/count`)
            .then(response => response.json())
            .then(data => {
                console.log("User Data:", data); // Verifica los datos recibidos
                setNUsuarios(data.activeUserCount); // Actualiza el número de usuarios
            })
            .catch(error => console.error('Error fetching user count:', error));
    };

    const contarProyectosActivos = () => {
        fetch(`http://localhost:3001/proyecto/active/count`) // Asegúrate de que esta URL sea correcta
            .then(response => response.json())
            .then(data => {
                console.log("Project Data:", data); // Verifica los datos recibidos
                setNProyectos(data.activeProjectCount); // Actualiza el número de proyectos
            })
            .catch(error => console.error('Error fetching project count:', error));
    };

    const contarDonaciones = () => {
        fetch(`http://localhost:3001/users/donation/count`) // Asegúrate de que esta URL sea correcta
            .then(response => response.json())
            .then(data => {
                console.log("Donation Data:", data); // Verifica los datos recibidos
                setNDonaciones(data.donationsCount); // Actualiza el número de donaciones
            })
            .catch(error => console.error('Error fetching donation count:', error));
    };

    useEffect(() => {
        contarUsuariosActivos();
        contarProyectosActivos();
        contarDonaciones();
    }, []);

    return (
        <main className="m-0">
            <section className="vh-100">
                <div className="container py-0 h-100">
                    <div className="container-fluid p-0">
                        <div className="row bg-white m-0">
                            <div className="container container-fluid text-white w-100% p-4" style={{ background: "#35303D" }}>
                                <div className="row">
                                    <div className="col-6 ">
                                        <h2>Mi cuenta</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row m-0">
                            <div className="col-6 text-white pt-3 p-5" style={{ background: "#49454F" }}>
                                <div className=" row m-0">
                                    <div className="col-7">
                                        <h3>Nombre:</h3>
                                        <h5>Brayton</h5>
                                        <br />
                                        <h3>Apellidos:</h3>
                                        <h5>Solano</h5>
                                        <br />
                                        <h3>Email:</h3>
                                        <h5>admin@itcr.ac.cr</h5>
                                        <br />
                                        <h3>Contraseña:</h3>
                                        <h5>****</h5>
                                        <br />
                                        <h3>Teléfono:</h3>
                                        <h5>96341285</h5>
                                        <br />
                                        <h3>Cédula:</h3>
                                        <h5>852741963</h5>
                                    </div>
                                    <div className="col-5">
                                        <img
                                            href="/"
                                            src="/default.jpg"
                                            width={170}
                                            height={170}
                                            style={{ borderRadius: "50%" }}
                                            alt="Foto de perfil"
                                        />
                                        <p className="text-primary mt-3">Cambiar foto de perfil</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 pt-3 p-5" style={{ background: "#D9D9D9" }}>
                                <h3>Estadísticas del sistema:</h3>
                                <h4 className="p-2 text-primary">Cantidad de usuarios activos: {nUsuarios}</h4>
                                <h4 className="p-2 text-primary">Cantidad de proyectos activos: {nProyectos}</h4>
                                <h4 className="p-2 text-primary">Cantidad de donaciones: {nDonaciones}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
