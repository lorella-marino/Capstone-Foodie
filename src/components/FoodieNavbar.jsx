import { Navbar, Nav, Container, Button, NavbarToggle } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const FoodieNavbar = () => {
  return (
    <Navbar expand="lg" fixed="top" style={{ backgroundColor: "#f1f6ea" }}>
      <Container>
        <Navbar.Brand href="/">
          <img alt="logoimg" src="src/assets/logo.png" className="d-inline-block align-top" />
        </Navbar.Brand>

        <NavbarToggle aria-controls="foodie-navbar" className="custom-toggler" />

        <Navbar.Collapse id="foodie-navbar">
          <Nav className="ms-auto" style={{ alignItems: "center" }}>
            <NavLink to="/chi-siamo" className="nav-link">
              CHI SIAMO
            </NavLink>
            <NavLink to="/menu" className="nav-link">
              MENU
            </NavLink>
            <NavLink to="/locations" className="nav-link">
              LOCATIONS
            </NavLink>
            <NavLink to="/contatti" className="nav-link">
              CONTATTI
            </NavLink>

            <Button href="/ordina" variant="danger" id="ordinabutton">
              ORDINA
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default FoodieNavbar;
