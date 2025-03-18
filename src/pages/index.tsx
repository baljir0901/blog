import { Container, Row, Col } from "react-bootstrap";
import MyNavbar from "@/components/Navbar";
import AdminIntro from "@/components/AdminIntro";

export default function Home() {
  return (
    <Container>
      <MyNavbar /> {/* Navbar at the top */}
      <Row>
        <Col md={8}>
          <AdminIntro /> {/* Blog intro section */}
          <h2>Welcome to Our Blog</h2>
          <p>Explore our latest articles and tutorials.</p>
        </Col>
      </Row>
    </Container>
  );
}
