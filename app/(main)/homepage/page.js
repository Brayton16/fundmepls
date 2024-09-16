"use client";  // Esto indica que es un Client Component
import React, { useState, useEffect } from 'react';
import UserNavBar from "@/components/userNavbar";


export default function Homepage() {
    const [query, setQuery] = useState('');
    const [proyectos, setProyectos] = useState([]);

    const buscarProyectos = (query) => {
        fetch(`http://localhost:3001/proyectos?query=${query}`)
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
        }else{
            buscarProyectos(query);
        }
    }, [query]);

    const handleSearchChange = (e) => {
        setQuery(e.target.value);
    };

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

    return (
        <main style={{ color: "white" }}>
            <header><UserNavBar /></header>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="container-fluid p-0">
                        <div className="row bg-white m-0">
                            <div className="col-3 p-0 text-dark">
                                <h2 className="p-3">Filtros</h2>
                                <div className="d-flex align-items-center">
                                    <h3 className="p-2">Todas las categorias</h3>
                                    <input type="checkbox" className="form-check-input"></input>
                                </div>
                                <div className="d-flex align-items-center">
                                    <h3 className="p-2">Todos los montos</h3>
                                    <input type="checkbox" className="form-check-input"></input>
                                </div>
                                <div className="d-flex align-items-center">
                                    <h3 className="p-2">Todas las fechas</h3>
                                    <input type="checkbox" className="form-check-input"></input>
                                </div>

                                <br></br>

                                <h2 className=" p-3">Personalizar</h2>

                                <div className="d-flex align-items-center">
                                    <h3 className="p-1">Categorias</h3>
                                </div>
                                <div className="d-flex align-items-center">
                                    <h3 className="p-1">Montos</h3>
                                </div>
                                <div className="d-flex align-items-center">
                                    <h3 className="p-1">Fechas</h3>
                                </div>
                            </div>
                            <div className="col-9 p-4">
                                <form className="d-flex" role="search">
                                    <input
                                        className="form-control me-2"
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