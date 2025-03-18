import { Container, Row, Col, Image, Stack } from "react-bootstrap";
import MyNavbar from "@/components/my-navbar";
import Intro from "@/components/intro";

export default function Home() {
  return (
    <Container>
      {/* 🔹 Navbar */}
      <MyNavbar /> {/* ✅ Use PascalCase component */}
      {/* 🔹 Blog Header Section */}
      <div className="blog-detail-page">
        <Row>
          <Col md="8">
            <Intro />
            <Stack direction="horizontal" gap={3} className="mb-4 admin-intro">
              <Image
                roundedCircles
                width={64}
                height={64}
                className="mr-3"
                src="/logo.jpg"
                alt="Generic placeholder"
              />
              <div>
                <h5 className="font-weight-bold mb-0">
                  1234.mn - Онлайн видео сургалт
                </h5>
                <p className="welcome-text">
                  Бид програмчлалын технологийн чиглэлээр төрөл бүрийн
                  сонирхолтой мэдээллүүдийг энэхүү блогоор хүргэж байна.
                </p>
              </div>
            </Stack>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
