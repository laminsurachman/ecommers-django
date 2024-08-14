import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
function Header() {
  return (
    <>
      <header>
        <Navbar
          expand="lg"
          bg="dark"
          variant="dark"
          collapseOnSelect
          className="bg-body-tertiary"
        >
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>Fazar Shop</Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <LinkContainer to="/cart">
                  <Nav.Link>
                    <i className="fa fa-shopping-cart"> </i>CART
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fa fa-user"></i>LOGIN
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}
export default Header;
