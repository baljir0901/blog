import { Container, Row, Col, Navbar, Nav, Media, Image, Card } from "react-bootstrap";

const AdminIntro = () => (
  <Media className="mb-4 admin-intro">
    <Image
      roundedCircle
      width={64}
      height={64}
      className="mr-3"
      src="logo.jpg"
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5 className="font-weight-bold mb-0">1234.mn - Онлайн видео сургалт</h5>
      <p className="welcome-text">
        Бид програмчлалын технологийн чиглэлээр төрөл бүрийн сонирхолтой
        мэдээллүүдийг энэхүү блогоор хүргэж байна.
      </p>
    </Media.Body>
  </Media>
);

export default function Intro() {
  return (
    <div>
      <h1>Welcome to 1234.mn Blog!</h1>
    </div>
  );
}
