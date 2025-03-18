import { Stack, Image } from "react-bootstrap";

const AdminIntro = () => {
  return (
    <Stack direction="horizontal" gap={3} className="mb-4 admin-intro">
      <Image
        roundedCircle
        width={64}
        height={64}
        src="/logo.jpg"
        alt="Admin Image"
      />
      <div>
        <h5 className="fw-bold mb-0">1234.mn - Онлайн видео сургалт</h5>
        <p className="welcome-text">
          Бид програмчлалын технологийн чиглэлээр төрөл бүрийн сонирхолтой
          мэдээллүүдийг энэхүү блогоор хүргэж байна.
        </p>
      </div>
    </Stack>
  );
};

export default AdminIntro;
