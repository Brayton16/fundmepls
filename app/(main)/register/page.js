"use client";
import Link from "next/link";
import styles from "./page.module.css";
import {Form,  Button, FormGroup } from "react-bootstrap";

export default function signUp(){

    async function ingresarUsuario(event) {
        const formData = new FormData(event.target);
        event.preventDefault();
        const rawFormData = {
            nombre: formData.get("nombre"),
            apellidos: formData.get("apellidos"),
            cedula: formData.get("cédula"),
            email: formData.get("email"),
            area: formData.get("area"),
            telefono: formData.get("teléfono"),
            dinero: formData.get("dinero"),
            contrasena: formData.get("contraseña"),
            confirmar: formData.get("confirmar"),
        };

        if(rawFormData.contrasena != rawFormData.confirmar){
            alert("Las contraseñas no coinciden");
            return;
        }

        if(!rawFormData.email.includes("@estudiantec.cr")){
            alert("El correo no corresponde al dominio estudiantec");
            return;
        }


        fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify({
                nombre: rawFormData.nombre,
                apellidos: rawFormData.apellidos,
                cedula: rawFormData.cedula,
                email: rawFormData.email,
                area: rawFormData.area,
                dinero: rawFormData.dinero,
                telefono: rawFormData.telefono,
                contrasena: rawFormData.contrasena
            })
                
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert("Usuario registrado con éxito")
            router.push("/login");
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Hubo un problema al registrar al usuario");
        });
        
    
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
                                <Form onSubmit={ingresarUsuario}>
                                        <div className="row">
                                            <div className="text-center col">
                                                <img
                                                href="/"
                                                className="m-3"
                                                src="/logo.png"
                                                />
                                            </div>
                                            <Form.Group className="mb-4 col">
                                                <Form.Label>Nombre</Form.Label>
                                                <Form.Control type="text" name="nombre" placeholder="Nombre" required/>
                                            </Form.Group>
                                        </div>
                                        <div className="row">
                                            <Form.Group className="mb-4 col">
                                                <Form.Label>Apellidos</Form.Label>
                                                <Form.Control type="text" name="apellidos" placeholder="Apellidos" required/>
                                            </Form.Group>
                                            <Form.Group className="mb-4 col">
                                                <Form.Label>Cédula</Form.Label>
                                                <Form.Control type="text" name="cédula" placeholder="Cédula" required/>
                                            </Form.Group>
                                        </div>
                                        <div className="row">
                                            <Form.Group className="mb-4 col">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" name="email" placeholder="Email" required/>
                                            </Form.Group>
                                            <Form.Group className="mb-4 col">
                                                <Form.Label>Área de trabajo</Form.Label>
                                                <Form.Select name="area" placeholder="Contraseña">
                                                    <option value="computación">Computación</option>
                                                    <option value="entretenimiento">Entretenimiento</option>
                                                    <option value="investigación">Investigación</option>
                                                    <option value="arquitectura">Arquitectura</option>
                                                    <option value="ingenieria">Ingeniería</option>
                                                    <option value="publicidad">Publicidad</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                        <div className="row">
                                            <Form.Group className="mb-4 col">
                                                <Form.Label>Teléfono</Form.Label>
                                                <Form.Control type="number" name="teléfono" placeholder="Teléfono" required pattern="\d+"/>
                                            </Form.Group>
                                            <Form.Group className="mb-4 col">
                                                <Form.Label>Dinero inicial</Form.Label>
                                                <Form.Control type="number" name="dinero" placeholder="Dinero inicial" required pattern="\d+"/>
                                            </Form.Group>
                                        </div>
                                        <div className="row">
                                            <Form.Group className="mb-4 col">
                                                <Form.Label>Contraseña</Form.Label>
                                                <Form.Control type="password" name="contraseña" placeholder="Contraseña" required/>
                                            </Form.Group>
                                            <Form.Group className="mb-4 col">
                                                <Form.Label>Confirmar contraseña</Form.Label>
                                                <Form.Control type="password" name="confirmar" placeholder="Confirmar contraseña" required/>
                                            </Form.Group>
                                        </div>
                                        <div className="text-center">
                                            <div className="row">
                                                <Button className="mb-4 m-2 text-center col" variant="dark" type="submit">Registrarse</Button>
                                                <Button className="mb-4 m-2 text-center col" variant="dark" href="/">Volver</Button>
                                            </div>
                                            <p>¿Ya tienes cuenta? Inicia <Link href="/login">sesión</Link></p>    
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}