import { Container, Row, Col, Card } from "react-bootstrap";
import MyNavbar from "@/components/Navbar";

const blogPosts = [
  { id: 1, title: "React Basics", content: "Learn React from scratch." },
  { id: 2, title: "Next.js vs React", content: "Which one should you choose?" },
];

export default function Blog() {
  return (
    <Container>
      <MyNavbar />
      <Row>
        {blogPosts.map((post) => (
          <Col md={6} key={post.id}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
