import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

import { useEffect, useState, useContext } from "react";
import { DashboardContext1 } from "../context/DashboardProvider";
import ListOfSelectedState from "./Table";
import { State } from "../enum";
import "../Dashboard.css";

const Home = () => {
  const { warningList, outOfOrderList, operationalList } =
    useContext(DashboardContext1);

  const arr = [
    { state: "Operational" },
    { state: "Warning" },
    { state: "Out-of-order" },
  ];

  const [data, setData] = useState(undefined);
  const [disabledWarning, setDisabledWarning] = useState(false);
  const [disabledOperational, setDisabledOperational] = useState(false);
  const [disabledOutOfOrder, setDisabledOutOfOrder] = useState(false);

  useEffect(() => {}, [warningList, outOfOrderList, operationalList]);

  const setSelectedData = (type) => {
    if (type === State.OPERATIONAL) {
      setData(operationalList);
      setDisabledOperational(true);
      setDisabledOutOfOrder(false);
      setDisabledWarning(false);
    } else if (type === State.WARNING) {
      setData(warningList);
      setDisabledWarning(true);
      setDisabledOutOfOrder(false);
      setDisabledOperational(false);
    } else if (type === State.OUT_OF_ORDER) {
      setData(outOfOrderList);
      setDisabledOutOfOrder(true);
      setDisabledOperational(false);
      setDisabledWarning(false);
    }
  };

  return (
    <>
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
