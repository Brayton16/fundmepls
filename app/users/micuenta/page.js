"use client";
import UserNavBar from "@/components/userNavbar";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function micuenta() {
    const [userID, setUserID] = useState(0); // Utilizamos useState para almacenar el userID
    const [user, setUser] = useState(null); // Estado para almacenar la información del usuario
    const [transactions, setTransactions] = useState([]); // Estado para almacenar el historial de transacciones
    const [showTransactions, setShowTransactions] = useState(false); // Estado para controlar el panel desplegable

    const toggleTransactions = () => {
        setShowTransactions(!showTransactions); // Alterna el panel desplegable
    };

    const obtenerUserID = () => {
        fetch(`http://localhost:3001/users/current`)
            .then(response => response.json())
            .then(data => {
                console.log("User Data:", data); // Verifica los datos recibidos
                setUserID(data.UserID); // Actualiza el userID en el estado
            })
            .catch(error => console.error('Error fetching user:', error));
    };

    const obtenerInfoUser = () => {
        if (userID === 0) return; // Evita realizar la petición si el userID no está disponible aún

        fetch(`http://localhost:3001/users/id?userID=${userID}`)
            .then(response => response.json())
            .then(data => {
                console.log("Información del usuario:", data); // Verifica los datos recibidos
                setUser(data[0]);  // Actualiza el estado con la información del usuario
            })
            .catch(error => console.error('Error fetching user info:', error));
    };

    const obtenerTransacciones = () => {
        if (userID === 0) return; // Evita realizar la petición si el userID no está disponible aún

        fetch(`http://localhost:3001/users/donation?userID=${userID}`)
            .then(response => response.json())
            .then(data => {
                console.log("Historial de transacciones:", data); // Verifica los datos recibidos
                setTransactions(data);  // Actualiza el estado con el historial de transacciones
            })
            .catch(error => console.error('Error fetching transactions:', error));
    };

    useEffect(() => {
        obtenerUserID(); // Obtenemos el userID al montar el componente
    }, []);

    useEffect(() => {
        if (userID !== 0) { // Solo buscamos la información si el userID ya se ha obtenido
            obtenerInfoUser();
            obtenerTransacciones();
        }
    }, [userID]);

    return (
        <main className="m-0">
            <section className="vh-100">
                <div className="container py-0 h-100">
                    <div className="container-fluid p-0">
                        <div className="row bg-white m-0">
                            <div className="container container-fluid text-white w-100% p-4" style={{ background: "#35303D" }}>
                                <div className="row">
                                    <div className="col-6">
                                        <h2>Mi cuenta</h2>
                                    </div>

                                    <div className="col-6">
                                        <div className="row">
                                            <div className="col-4">
                                                <h4>Saldo disponible</h4>
                                            </div>
                                            <div className="col-4 text-center">
                                                <h2>{user ? user.DigitalMoney : '0'}</h2> {/* Mostrar el saldo del usuario */}
                                            </div>
                                            <div className="col-4">
                                                <img
                                                    href="/"
                                                    src="/goofycoin.png"
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
                            <div className="col-6 text-white pt-3 p-5" style={{ background: "#49454F" }}>
                                <div className="row m-0">
                                    <div className="col-7">
                                        <h3>Nombre:</h3>
                                        <h5>{user ? user.FirstName : 'Cargando...'}</h5> {/* Nombre */}
                                        <br />
                                        <h3>Apellidos:</h3>
                                        <h5>{user ? user.LastName : 'Cargando...'}</h5> {/* Apellidos */}
                                        <br />
                                        <h3>Email:</h3>
                                        <h5>{user ? user.Email : 'Cargando...'}</h5> {/* Email */}
                                        <br />
                                        <h3>Contraseña:</h3>
                                        <h5>******</h5> {/* No mostramos la contraseña por seguridad */}
                                        <br />
                                        <h3>Teléfono:</h3>
                                        <h5>{user ? user.PhoneNumber : 'Cargando...'}</h5> {/* Teléfono */}
                                        <br />
                                        <h3>Cédula:</h3>
                                        <h5>{user ? user.Cedula : 'Cargando...'}</h5> {/* Cédula */}
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
                                <h3>Operaciones de billetera:</h3>

                                <h4 
                                    className="p-2 text-primary" 
                                    style={{ cursor: 'pointer' }} 
                                    onClick={toggleTransactions}
                                >
                                    Recargar Goofycoins
                                </h4>

                                <h4 
                                    className="p-2 text-primary" 
                                    style={{ cursor: 'pointer' }} 
                                    onClick={toggleTransactions}
                                >
                                    Historial de transacciones
                                </h4>

                                {showTransactions && (
                                    <div className="transaction-history">
                                        {transactions.length > 0 ? (
                                            <ul>
                                                {transactions.map((transaction, index) => (
                                                    <li key={index}>
                                                        <p><strong>Fecha:</strong> {transaction.DonationDate}</p>
                                                        <p><strong>Proyecto:</strong> {transaction.ProjectName}</p>
                                                        <p><strong>Monto:</strong> {transaction.Amount}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p>No hay transacciones disponibles.</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
