import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect();
  };

  return (
    <Row style={{ marginTop: "350px" }}>
      <Col></Col>
      <Col>
        <div className="d-grid gap-2">
          {" "}
          <Button onClick={handleLogin} size="lg">
            Log In
          </Button>
        </div>
      </Col>

      <Col></Col>
    </Row>
  );
};

export default LoginButton;
