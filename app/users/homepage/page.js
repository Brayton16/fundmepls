"use client";  // Esto indica que es un Client Component
import React, { useState, useEffect } from 'react';
import UserNavBar from "@/components/userNavbar";
import {sendDonationEmail, sendGratitudeEmail} from "@/services/emailService"

export default function Homepage() {
    const [query, setQuery] = useState('');
    const [proyectos, setProyectos] = useState([]);
    const [categorias, setCategorias] = useState(['Tecnología', 'Salud', 'Educación', 'Arte', 'Energía']); // Ejemplo de categorías
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
    const [mostrarCategorias, setMostrarCategorias] = useState(false); // Estado para mostrar/ocultar el menú de categorías
    const [showMontoInput, setShowMontoInput] = useState(false); // Mostrar campo para monto
    const [montoRecaudado, setMontoRecaudado] = useState(''); // Valor del monto recaudado
    const [showFechaInput, setShowFechaInput] = useState(false); // Mostrar campo para fecha
    const [fechaLimite, setFechaLimite] = useState(''); // Valor de la fecha límite
    const [selectedProyecto, setSelectedProyecto] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [donacion, setDonacion] = useState(''); // Estado para el monto de la donación
    const [userID, setUserID] = useState(0); // Utilizamos useState para almacenar el userID
    var errorcito = false
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
        fetch(`http://localhost:3001/proyectos?query=${query}`)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Verifica los datos recibidos
                setProyectos(data);  // Actualiza el estado con los proyectos recibidos
            })
            .catch(error => console.error('Error fetching proyectos:', error));
    };

    const buscarProyectosPorCategoria = (query) => {
        console.log(query)
        fetch(`http://localhost:3001/proyectos/categoria?query=${query}`)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Verifica los datos recibidos
                setProyectos(data);  // Actualiza el estado con los proyectos recibidos
            })
            .catch(error => console.error('Error fetching proyectos:', error));
    };

    const buscarProyectosPorMontoRecaudado = (query) => {
        console.log(query)
        fetch(`http://localhost:3001/proyectos/recaudado?query=${query}`)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Verifica los datos recibidos
                setProyectos(data);  // Actualiza el estado con los proyectos recibidos
            })
            .catch(error => console.error('Error fetching proyectos:', error));
    };

    const buscarProyectosPorFechaLimite = (query) => {
        console.log(query)
        fetch(`http://localhost:3001/proyectos/fechaLimite?query=${query}`)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Verifica los datos recibidos
                setProyectos(data);  // Actualiza el estado con los proyectos recibidos
            })
            .catch(error => console.error('Error fetching proyectos:', error));
    };

    
    useEffect(() => {
        if (query) {
            buscarProyectos(query);
        } else if (categoriaSeleccionada) {
            buscarProyectosPorCategoria(categoriaSeleccionada);
        } else if (montoRecaudado) {
            buscarProyectosPorMontoRecaudado(montoRecaudado);
        }else if (fechaLimite) {
            buscarProyectosPorFechaLimite(fechaLimite);
        } else {
            buscarProyectos(query);
        }
    }, [query, categoriaSeleccionada, montoRecaudado]);

    const handleSearchChange = (e) => {
        setQuery(e.target.value);
        setCategoriaSeleccionada(''); // Limpiar la categoría cuando se busca por nombre
        setMontoRecaudado('');
        setFechaLimite('');
    };

    const toggleCategorias = () => {
        setMostrarCategorias(!mostrarCategorias); // Mostrar o ocultar las categorías
    };

    const handleCategoriaClick = (categoria) => {
        if (categoriaSeleccionada === categoria) {
            setCategoriaSeleccionada(null); // Deseleccionar si ya está seleccionada
        } else {
            setCategoriaSeleccionada(categoria); // Seleccionar nueva categoría
            setQuery(''); // Limpiar la búsqueda por nombre cuando se selecciona una categoría
            setMontoRecaudado('');
            setFechaLimite('');
        }
    };



    const toggleMontoInput = () => {
        setShowMontoInput(!showMontoInput);
    };

    const handleMontoChange = (e) => {
        setMontoRecaudado(e.target.value);
        setCategoriaSeleccionada(''); 
        setQuery(''); // Limpiar la búsqueda por nombre cuando se selecciona una categoría
        setFechaLimite(''); 
    };


    const toggleFechaInput = () => {
        setShowFechaInput(!showFechaInput);
    };
    const handleFechaChange = (e) => {
        setFechaLimite(e.target.value);
        setCategoriaSeleccionada(''); 
        setQuery(''); // Limpiar la búsqueda por nombre cuando se selecciona una categoría
        setMontoRecaudado('');
    };

    const openModal = (proyecto) => {
        setSelectedProyecto(proyecto);
        setShowModal(true);
    };
    
    const closeModal = () => {
        setSelectedProyecto(null);
        setShowModal(false);
    };

    const handleDonacion = (e) => {
        setDonacion(e.target.value); // Actualiza el estado con el valor ingresado
    };

    const handleDonation = () => {

        fetch('http://localhost:3001/users/donation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                projectId: selectedProyecto.ProjectID,
                donacion: donacion,
                UserId: userID
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Donación exitosa:', data);
            // Puedes realizar alguna acción adicional aquí, como cerrar el modal
            closeModal();
        })
        .catch(error => {
            console.error('Error al realizar la donación:', error);
            errorcito = true
        });
        alert("Se realizo la donacion correctamente")
        window.location.reload(); // O cualquier otra lógica para actualizar la UI

        if(!errorcito){
            
        }
    };

    useEffect(() => {
        obtenerUserID();
    }, []); 

    // Estilos en línea
    const containerStyle = {
        padding: '20px',
        backgroundColor: '#f8f9fa',
        minHeight: '100vh'
    };

    const galleryStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center'
    };

    const cardStyle = {
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '15px',
        width: '300px',
        textAlign: 'center',
        transition: 'transform 0.2s',
        cursor: 'pointer'
    };

    const cardHoverStyle = {
        transform: 'scale(1.05)'
    };

    const imgStyle = {
        maxWidth: '100%',
        borderRadius: '8px',
        marginBottom: '10px'
    };

    const titleStyle = {
        color: '#333',
        fontSize: '1.5rem',
        marginBottom: '10px'
    };

    const textStyle = {
        color: '#666',
        fontSize: '1rem',
        marginBottom: '8px'
    };

    
    const categoriaStyle = {
        padding: '10px',
        cursor: 'pointer',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        marginBottom: '5px',
        borderRadius: '5px',
    };

    const categoriaSeleccionadaStyle = {
        ...categoriaStyle,
        backgroundColor: '#007bff', // Cambiar el color cuando está seleccionada
        color: '#fff',
    };
    
    const modalOverlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Color más oscuro para el overlay
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
    };

    const modalContentStyle = {
        backgroundColor: '#ffffff', // Fondo blanco para el contenido
        borderRadius: '10px',
        padding: '20px',
        maxWidth: '600px',
        width: '90%',
        position: 'relative',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' // Agrega sombra para destacar el modal
    };

    const closeButtonStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        fontSize: '1.5rem',
        color: '#ff0000', // Color rojo para el botón de cerrar
        cursor: 'pointer',
        backgroundColor: '#ffffff',
        border: 'none',
        borderRadius: '50%',
        width: '30px',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    const inputStyle = {
        padding: '10px',
        width: '100%',
        marginBottom: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '16px'
    };

    const buttonStyle = {
        backgroundColor: '#007bff', // Color azul para el botón de donar
        color: '#ffffff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s'
    };

    const buttonHoverStyle = {
        backgroundColor: '#0056b3' // Color azul oscuro para el hover
    };

    return (
        <main style={{ color: "white" }}>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="container-fluid p-0">
                        <div className="row bg-white m-0">
                            <div className="col-3 p-0 text-dark"> 
                                <h2 className="p-1 py-3">Filtros</h2>
                                <div className="d-flex align-items-center">
                                    <h3 className="p-1" onClick={toggleCategorias} style={{ cursor: 'pointer' }}>Categorías</h3>
                                </div>
                                {mostrarCategorias && (
                                    <div>
                                        {categorias.map((categoria) => (
                                            <div
                                                key={categoria}
                                                style={categoriaSeleccionada === categoria ? categoriaSeleccionadaStyle : categoriaStyle}
                                                onClick={() => handleCategoriaClick(categoria)}
                                            >
                                                {categoria}
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {/* Filtro de Monto Recaudado */}
                                <div className="d-flex align-items-center">
                                    <h3 className="p-1" onClick={toggleMontoInput} style={{ cursor: 'pointer' }}>
                                        Monto Recaudado
                                    </h3>
                                </div>
                                {showMontoInput && (
                                    <div className="pl-3">
                                        <input
                                            type="number"
                                            value={montoRecaudado}
                                            onChange={handleMontoChange}
                                            placeholder="Ingresar monto"
                                            style={{
                                                padding: '5px',
                                                width: '100%',
                                                border: '1px solid #ddd',
                                                borderRadius: '4px'
                                            }}
                                        />
                                    </div>
                                )}
                                {/* Filtro de Fecha Límite */}
                                <div className="d-flex align-items-center">
                                    <h3 className="p-1" onClick={toggleFechaInput} style={{ cursor: 'pointer' }}>
                                        Fecha Límite
                                    </h3>
                                </div>
                                {showFechaInput && (
                                    <div className="pl-3">
                                        <input
                                            type="date"
                                            value={fechaLimite}
                                            onChange={handleFechaChange}
                                            placeholder="Seleccionar fecha"
                                            style={{
                                                padding: '5px',
                                                width: '100%',
                                                border: '1px solid #ddd',
                                                borderRadius: '4px'
                                            }}
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="col-9 p-4">
                                <form className="d-flex" role="search">
                                    <input
                                        className="form-control mb-4"
                                        type="search"
                                        placeholder="Buscar proyectos"
                                        aria-label="Search"
                                        value={query}
                                        onChange={handleSearchChange}
                                    />
                                </form>

                                {/* Contenedor donde se mostrarán los proyectos */}
                                <div id="proyecto-container" style={containerStyle}>
                                    <div style={galleryStyle}>
                                        {proyectos.length > 0 ? (
                                            proyectos.map((proyecto) => (
                                                <div 
                                                    key={proyecto.ProjectID} 
                                                    style={cardStyle}
                                                    onMouseEnter={(e) => e.currentTarget.style.transform = cardHoverStyle.transform}
                                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                                    onClick={() => openModal(proyecto)} // Abre el modal al hacer clic
                                                >
                                                    <img
                                                        src={proyecto.MediaURL || "https://via.placeholder.com/150"}
                                                        alt={`Imagen del proyecto ${proyecto.ProjectName}`}
                                                        style={imgStyle}
                                                    />
                                                    <h3 style={titleStyle}>{proyecto.ProjectName}</h3>
                                                    <p style={textStyle}>Descripción: {proyecto.ProjectDescription}</p>
                                                    <p style={textStyle}>Objetivo de Financiamiento: {proyecto.FundingGoal}</p>
                                                    <p style={textStyle}>Categoría: {proyecto.Category}</p>
                                                    <p style={textStyle}>Fecha Límite de Financiamiento: {new Date(proyecto.FundingDeadline).toLocaleDateString()}</p>
                                                </div>
                                            ))
                                        ) : (
                                            <p>No se encontraron proyectos</p>
                                        )}
                                    </div>
                                    
                                    {showModal && selectedProyecto && (
                                    <div style={modalOverlayStyle}>
                                        <div style={modalContentStyle}>
                                            <span style={closeButtonStyle} onClick={closeModal}>&times;</span>
                                            <h1 style={titleStyle}><strong>{selectedProyecto.ProjectName}</strong></h1>
                                            <p style={titleStyle}><strong>Descripción:</strong> {selectedProyecto.ProjectDescription}</p>
                                            <p style={titleStyle}><strong>Objetivo de Financiamiento:</strong> {selectedProyecto.FundingGoal}</p>
                                            <p style={titleStyle}><strong>Dinero recaudado:</strong> {selectedProyecto.CurrentCollection}</p>
                                            <p style={titleStyle}><strong>Categoría:</strong> {selectedProyecto.Category}</p>
                                            <p style={titleStyle}><strong>Fecha Límite de Financiamiento:</strong> {new Date(selectedProyecto.FundingDeadline).toLocaleDateString()}</p>

                                            <h3 style={titleStyle}>Realiza tu donación</h3>
                                            <input
                                                type="number"
                                                placeholder="Monto de la donación"
                                                value={donacion}
                                                onChange={handleDonacion}
                                                style={inputStyle}
                                            />
                                            <button 
                                                style={buttonStyle}
                                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                                                onClick={handleDonation}
                                            >
                                                Donar
                                            </button>
                                        </div>
                                    </div>
                                )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}


/*export default function login(){

    async function autenticarUsuario(event) {
        const formData = new FormData(event.target);
        event.preventDefault();
        const rawFormData = {
            Email: formData.get("Email"),
            Contraseña: formData.get("Contraseña"),
        };

        console.log(rawFormData);
    }

    return(
        <main style={{color: "white"}}>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong" >
                                <div className="card-body border-0 rounded p-5" style={{background: "#b80006e2"}}>
                                    <Form.Group className="mb-4">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" name="email" placeholder="Email"/>
                                    </Form.Group>
                                    <Form.Group className="mb-4">
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control type="password" name="contraseña" placeholder="Contraseña"/>
                                    </Form.Group>
                                    
                                    <Button className="mb-4 text-center" variant="dark" type="submit">Iniciar Sesion</Button>
                                    <p>¿No tienes cuenta? Registrate <Link href="/register">ahora</Link></p>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {<div className="container m-5 p-5">
                <Form onSubmit={autenticarUsuario}>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control placeholder="Email"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control placeholder="Contraseña"/>
                    </Form.Group>
                    <Button variant="danger" type="submit">Iniciar Sesion</Button>
                    <p>¿No tienes cuenta? Registrate <Link href="/register">ahora</Link></p>
                </Form>
            </div>}
        </main>
    );
}*/