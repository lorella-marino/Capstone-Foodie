import { Navbar, Nav, Container, Button, NavbarToggle } from "react-bootstrap";
import { BsPersonCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import UserPanel from "./user/UserPanel";
import { useState } from "react";

const FoodieNavbar = () => {
  const [showUserPanel, setShowUserPanel] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
        style={{ backgroundColor: "#f1f6ea" }}
      >
        <Container>
          <Navbar.Brand href="/">
            <img alt="logoimg" src="src/assets/logo.png" className="d-inline-block align-top" />
          </Navbar.Brand>

          <NavbarToggle className="custom-toggler" onClick={() => setExpanded(!expanded)} />

          <Navbar.Collapse>
            <Nav className="ms-auto" style={{ alignItems: "center" }}>
              <NavLink to="/chi-siamo" className="nav-link" onClick={() => setExpanded(false)}>
                CHI SIAMO
              </NavLink>
              <NavLink to="/menu" className="nav-link" onClick={() => setExpanded(false)}>
                MENU
              </NavLink>
              <NavLink to="/locations" className="nav-link" onClick={() => setExpanded(false)}>
                LOCATIONS
              </NavLink>
              <NavLink to="/contatti" className="nav-link" onClick={() => setExpanded(false)}>
                CONTATTI
              </NavLink>
              <Button
                variant="link"
                className="nav-link p-0"
                onClick={() => {
                  setExpanded(false);
                  setShowUserPanel(true);
                }}
              >
                <BsPersonCircle size={35} />
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <UserPanel show={showUserPanel} onHide={() => setShowUserPanel(false)} />
    </>
  );
};

export default FoodieNavbar;
