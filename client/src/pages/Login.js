import React, { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Row, Col } from "react-bootstrap";
import { DashboardContext1 } from "../context/DashboardProvider";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const { setLoading } = useContext(DashboardContext1);

  const handleLogin = async () => {
    setLoading(true);
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
