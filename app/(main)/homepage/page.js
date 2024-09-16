import Link from "next/link";
import styles from "./page.module.css";
import {Form,  Button, FormGroup, Navbar } from "react-bootstrap";
import UserNavBar from "@/components/userNavbar";

export default function homepage(){





    return(
        
        <main style={{color: "white"}}>
            <header><UserNavBar/></header>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="container-fluid p-0">
                        <div className="row bg-white m-0">
                            <div className=" col-3 p-0 text-dark">
                                <h2 className=" p-3">Filtros</h2>

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
                            <div className=" col-9 p-4">

                            <form className="d-flex" role="search"> 
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>


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