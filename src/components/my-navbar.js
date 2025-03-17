import { Container, Navbar, Nav } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="shadow-sm"
      style={{ backgroundColor: "#e9ecef" }}
    >
      <Container>
        <Navbar.Brand href="#home">1234.mn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Нүүр</Nav.Link>
            <Nav.Link href="#blog">Блог</Nav.Link>
            <Nav.Link href="#contact">Холбоо барих</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
