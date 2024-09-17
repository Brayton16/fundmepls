"use client";
import Link from "next/link";
import styles from "./page.module.css";
import {Form,  Button, FormGroup } from "react-bootstrap";
//import { routeModule } from "next/dist/build/templates/app-page";
import { useRouter } from "next/navigation";

export default function LoginForm(){

    const router = useRouter();

    async function autenticarUsuario(event) {
        const formData = new FormData(event.target);
        event.preventDefault();
        const rawFormData = {
            Email: formData.get("email"),
            Contraseña: formData.get("contraseña"),
        };
        //Hay que usar variables de entorno para que no se vean las credenciales.
        if(rawFormData.Email !== "admin@itcr.ac.cr"){ //process.env.ADMIN_EMAIL
            //verificar si es un usuario normal
            try {
                const response = await fetch('http://fundmepls.vercel.app/users/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: rawFormData.Email,
                        password: rawFormData.Contraseña
                    })
                });
    
                const data = await response.json();
    
                if (response.ok) {
                    console.log(data);
                    router.push("/users/homepage");  // Redirigir al usuario a la página de inicio
                } else {
                    // Mostrar mensaje de error al usuario
                    console.error(data.msg || 'Error en la autenticación');
                    alert(data.msg || 'Error en la autenticación');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Error en la autenticación');
            }
        }else{
            if(rawFormData.Contraseña !== "Reque2024"){ //process.env.ADMIN_PASSWORD
                //error de datos incorrectos
            }else{
                router.push("/admin/homepage")
            }
        }
        
        console.log(rawFormData);
    }

    return(
        <Form onSubmit={autenticarUsuario}>
            <div className="text-center">
                <img
                src="/logo.png"
                href="/"
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
            <div className="row">
                <Button className="mb-4 m-2 text-center col" variant="dark" type="submit">Iniciar sesión</Button>
                <Button className="mb-4 m-2 text-center col" variant="dark" href="/">Volver</Button>
            </div>
            <p>¿No tienes cuenta? Registrate <Link href="/register">ahora</Link></p>    
        </Form>
    );
} 

 