import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { ProductConsumer } from "../ContextData";

export default class MyNavbar extends Component {
  render() {
    return (
      <Navbar
        bg="light"
        variant="dark"
        expand="lg"
        className="shadow-sm mb-4"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ color: "#088178", fontWeight: "bold" }}>
            Find your product
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" style={{ color: "Black" }}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/cart" style={{ color: "Black" }}>
                Cart
              </Nav.Link>
              <ProductConsumer>
                {(value) => (
                  <Nav.Link as={Link} to="/cart" style={{ color: "#088178" }}>
                    My Cart <Badge bg="dark" text="light">{value.cart.length}</Badge>
                  </Nav.Link>
                )}
              </ProductConsumer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

 