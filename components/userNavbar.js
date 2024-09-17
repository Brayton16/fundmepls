"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function userNavBar() {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="mx-2 text-light" href="/users/misProyectos">Mis proyectos</Nav.Link>
            <Nav.Link className="mx-2 text-light" href="/users/crearProyecto">Crear publicación</Nav.Link>
            <Nav.Link className="mx-2 text-light" href="/users/homepage">Donar</Nav.Link>
            <Nav.Link className="mx-2 text-light" href="/users/micuenta">Mi cuenta</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default userNavBar;
