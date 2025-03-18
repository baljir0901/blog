import { Card, Image } from "react-bootstrap";

const AdminIntro = () => (
  <Card className="mb-4 admin-intro">
    <Card.Body className="d-flex">
      <Image
        roundedCircle
        width={64}
        height={64}
        className="mr-3"
        src="logo.jpg"
        alt="Generic placeholder"
      />
      <div>
        <h5 className="font-weight-bold mb-0">
          1234.mn - Онлайн видео сургалт
        </h5>
        <p className="welcome-text">
          Бид програмчлалын технологийн чиглэлээр төрөл бүрийн сонирхолтой
          мэдээллүүдийг энэхүү блогоор хүргэж байна.
        </p>
      </div>
    </Card.Body>
  </Card>
);

export default AdminIntro;
