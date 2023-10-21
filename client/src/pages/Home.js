import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

import { useEffect, useState, useContext } from "react";
// import { backendService } from "../services/backendService";
// import { backendService } from "./../services/BackendService";
import {
  // DashboardProvider1,
  DashboardContext1,
} from "../context/DashboardProvider";
import ListOfSelectedState from "./Table";
import { State } from "../enum";
// import  from "./../context/DashboardProvider";

const Home = () => {
  // const [operationCount, setElevatorList] = useState(undefined);
  // const { elevatorsList } = useContext(DashboardContext1);
  const { elevatorsList, warningList, outOfOrderList, operationalList } =
    useContext(DashboardContext1);

  const [data, setData] = useState(undefined);

  // const getData = async () => {
  //   const BS = new backendService();
  //   const response = await BS.getElevatorList();
  //   if (response) setElevatorList(response);
  // };
  useEffect(() => {
    // getData();
  }, [warningList, outOfOrderList, operationalList]);

  const setSelectedData = (type) => {
    if (type === State.OPERATIONAL) setData(operationalList);
    else if (type === State.WARNING) setData(warningList);
    else if (type === State.OUT_OF_ORDER) setData(outOfOrderList);
  };

  return (
    // <DashboardProvider1>
    <>
      <Row paddingTop={20}>
        <Col md={3} lg={3}></Col>
        <Col>
          {/* <Card className="text-center"> */}
          <Row>
            <Col>
              <Stack direction="horizontal" gap={2}>
                <Button
                  variant="success"
                  onClick={() => setSelectedData(State.OPERATIONAL)}
                  size="sm"
                  text="dark"
                >
                  Operational{" "}
                  <Badge bg="light" text="dark" pill>
                    {operationalList?.length}
                  </Badge>
                </Button>
              </Stack>
            </Col>
            <Col>
              <Stack direction="horizontal" gap={2}>
                <Button
                  variant="success"
                  onClick={() => setSelectedData(State.WARNING)}
                  size="sm"
                  text="dark"
                >
                  Operational{" "}
                  <Badge bg="light" text="dark" pill>
                    {warningList?.length}
                  </Badge>
                </Button>
              </Stack>
            </Col>
            <Col>
              <Stack direction="horizontal" gap={2}>
                <Button
                  variant="success"
                  onClick={() => setSelectedData(State.OUT_OF_ORDER)}
                  size="sm"
                  text="dark"
                >
                  Operational{" "}
                  <Badge bg="light" text="dark" pill>
                    {outOfOrderList?.length}
                  </Badge>
                </Button>
              </Stack>
            </Col>
            {/* <Button onClick={() => setSelectedData(State.WARNING)}>
                  Warning {warningList?.length}
                </Button>
              </Col>
              <Col>
                <Button onClick={() => setSelectedData(State.OUT_OF_ORDER)}>
                  Out of order {outOfOrderList?.length}
                </Button>
              </Col> */}
          </Row>
          {/* </Card> */}
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
    // </DashboardProvider1>
  );
};

export default Home;
