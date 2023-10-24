import React, { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Row, Col, Card, Container } from "react-bootstrap";
import { DashboardContext1 } from "../context/DashboardProvider";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const { setLoading } = useContext(DashboardContext1);

  const handleLogin = async () => {
    setLoading(true);
    await loginWithRedirect();
  };

  return (
    <Container className="mt-3 d-flex align-items-center">
      <Row className="justify-content-md-center" style={{ marginTop: "140px" }}>
        <Col></Col>
        <Col>
          <Card border="dark" className="text-center">
            <Card.Img variant="top" src="digital-spine.jpeg" />
            <Card.Body>
              <Card.Title>Welcome!</Card.Title>
              <Card.Text>Please login to check dashboard</Card.Text>
              <Button variant="outline-danger" onClick={handleLogin}>
                Login
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default LoginButton;
