"use client";
import Link from "next/link";
import styles from "./page.module.css";
import {Form,  Button, FormGroup } from "react-bootstrap";

export default function login(){

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
                                <div className="card-body border-0 rounded p-5 text-light" style={{background: "#b80006e2"}}>
                                    
                                    <Form onSubmit={autenticarUsuario}>
                                        <div className="text-center">
                                            <img
                                            src="/logo.png"
                                            />
                                        </div>
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
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className="container m-5 p-5">
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
            </div> */}
        </main>
    );
}