import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
function Header() {
  return (
    <div>
      <header>
        {" "}
        <Navbar
          expand="lg"
          bg="dark"
          variant="dark"
          collapseOnSelect
          className="bg-body-tertiary"
        >
          <Container>
            <Navbar.Brand href="/">Fazar Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/cart">
                  <i className="fa fa-shopping-cart"> </i>CART
                </Nav.Link>
                <Nav.Link href="/login">
                  <i className="fa fa-user"></i>LOGIN
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}

export default Header;
