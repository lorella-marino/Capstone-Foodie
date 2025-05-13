import { Navbar, Nav, Container, Button } from "react-bootstrap";

const FoodieNavbar = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#f1f6ea" }}>
      <Container>
        <Navbar.Brand href="/">
          <img alt="logoimg" src="src/assets/logo.png" className="d-inline-block align-top " />
        </Navbar.Brand>
        <Nav className="ms-auto" style={{ alignItems: "center" }}>
          <Nav.Link href="/chi-siamo">CHI SIAMO</Nav.Link>
          <Nav.Link href="/menu">MENU</Nav.Link>
          <Nav.Link href="/locations">LOCATIONS</Nav.Link>
          <Nav.Link href="/contatti">CONTATTI</Nav.Link>
          <Button
            variant="danger"
            style={{
              backgroundColor: "#b56475",
              border: "none",
              borderRadius: "20px",
              marginLeft: "1rem",
              padding: "0",
            }}
          >
            <Nav.Link href="#ordina">ORDINA</Nav.Link>
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default FoodieNavbar;
