import React from "react";
import "./Navigation.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navigation() {
  return (
    <div className="navigation">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/home" className="ash">
          Repairer's Life Chapel
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-sm-2">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/sermon">SERMON</Nav.Link>
            {/* <Nav.Link href="/podcast">PODCAST</Nav.Link>
            <Nav.Link href="/others">Others</Nav.Link> */}
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
