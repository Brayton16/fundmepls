"use client";  // Esto indica que es un Client Component
import React, { useState, useEffect } from 'react';
import UserNavBar from "@/components/userNavbar";


export default function misProyectos() {
    return (
        <main>
            <h1>Hola</h1>
            {/* <section className="vh-100">
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
                                )} */}
                                {/* Filtro de Monto Recaudado */}
                                {/* <div className="d-flex align-items-center">
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
                                )} */}
                                {/* Filtro de Fecha Límite */}
                                {/* <div className="d-flex align-items-center">
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
                                </form> */}

                                {/* Contenedor donde se mostrarán los proyectos */}
                                {/* <div id="proyecto-container" style={containerStyle}>
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
            </section> */}
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