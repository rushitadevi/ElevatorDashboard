import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

import { useEffect, useState, useContext } from "react";
import { DashboardContext1 } from "../context/DashboardProvider";
import ListOfSelectedState from "./List";
import { State } from "../enum";
import "../Dashboard.css";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./Logout";

const Home = () => {
  const {
    warningList,
    outOfOrderList,
    operationalList,
    setAccessToken,
    setLoggedInUser,
  } = useContext(DashboardContext1);

  const { getAccessTokenSilently, isAuthenticated, user } = useAuth0();

  const [data, setData] = useState(undefined);
  const [disabledWarning, setDisabledWarning] = useState(false);
  const [disabledOperational, setDisabledOperational] = useState(false);
  const [disabledOutOfOrder, setDisabledOutOfOrder] = useState(false);

  useEffect(() => {}, [warningList, outOfOrderList, operationalList]);

  useEffect(() => {
    // if (isAuthenticated) {
    getAccessTokenSilently().then((accessToken) => {
      setAccessToken(accessToken);
      setLoggedInUser(user);
    });

    // }
  }, []);

  useEffect(() => {
    setLoggedInUser(user);
  }, [user]);

  const setDisabledValue = (operational, outOfOrder, warning) => {
    setDisabledOperational(operational);
    setDisabledOutOfOrder(outOfOrder);
    setDisabledWarning(warning);
  };

  const setSelectedData = (type) => {
    if (type === State.OPERATIONAL) {
      setData(operationalList);
      setDisabledValue(true, false, false);
    } else if (type === State.WARNING) {
      setData(warningList);
      setDisabledValue(false, false, true);
    } else if (type === State.OUT_OF_ORDER) {
      setData(outOfOrderList);
      setDisabledValue(false, true, false);
    }
  };

  return (
    <>
      <Row>
        <Col></Col>
        <Col>
          {" "}
          <h4 className="user-name"> Welcome!! {user?.email}</h4>
        </Col>
        <Col>
          <LogoutButton />
        </Col>
      </Row>
      <Row
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "20vh",
        }}
      >
        <Col md={3} lg={3}></Col>
        <Col>
          <Row
            style={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Col>
              <Stack direction="horizontal" gap={2}>
                <Button
                  variant="outline-success"
                  onClick={() => setSelectedData(State.OPERATIONAL)}
                  size="sm"
                  text="dark"
                  disabled={disabledOperational}
                >
                  Operational{" "}
                  <Badge bg="success" text="light" pill>
                    {operationalList?.length}
                  </Badge>
                </Button>
              </Stack>
            </Col>
            <Col>
              <Stack direction="horizontal" gap={2}>
                <Button
                  variant="outline-warning"
                  onClick={() => setSelectedData(State.WARNING)}
                  size="sm"
                  text="dark"
                  disabled={disabledWarning}
                >
                  {"Warning"}{" "}
                  <Badge bg="warning" text="light" pill>
                    {warningList?.length}
                  </Badge>
                </Button>
              </Stack>
            </Col>
            <Col>
              <Stack direction="horizontal" gap={2}>
                <Button
                  variant="outline-danger"
                  onClick={() => setSelectedData(State.OUT_OF_ORDER)}
                  size="sm"
                  text="dark"
                  disabled={disabledOutOfOrder}
                >
                  {"Out of order "}
                  <Badge bg="danger" text="light" pill>
                    {outOfOrderList?.length}
                  </Badge>
                </Button>
              </Stack>
            </Col>
          </Row>
        </Col>
        <Col md={3} lg={3}></Col>
      </Row>
      <Row>
        <Col md={3} lg={3}></Col>
        <Col>
          <ListOfSelectedState data={data} />
        </Col>

        <Col md={3} lg={3}></Col>
      </Row>
    </>
  );
};

export default Home;
