import React from 'react';
// import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Agro</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Shop</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Blog1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Blog2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;