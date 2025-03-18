import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer mt-5 py-3 bg-dark text-white">
      <Container>
        <Row>
          <Col md={6}>
            <h5>1234.mn - Онлайн Видео Сургалт</h5>
            <p>
              Програмчлалын технологийн чиглэлээр төрөл бүрийн сонирхолтой
              мэдээллүүдийг хүргэж байна.
            </p>
          </Col>
          <Col md={3}>
            <h6>Холбоо барих</h6>
            <p>Email: info@1234.mn</p>
            <p>Phone: +976 1234-5678</p>
          </Col>
          <Col md={3}>
            <h6>Биднийг дагаарай</h6>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white me-3"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              Twitter
            </a>
          </Col>
        </Row>
        <hr className="mt-3 border-light" />
        <p className="text-center">
          &copy; {new Date().getFullYear()} 1234.mn. Бүх эрх хуулиар
          хамгаалагдсан.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
