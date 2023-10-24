import { useEffect, useState } from "react";

import {
  Alert,
  Badge,
  Row,
  Col,
  Container,
  Button,
  Table,
} from "react-bootstrap";
import AnalyticsChart from "../Charts/AnalyticsChart";
import SelectedCard from "../components/SelectedCard";

import { State } from "../enum";

const ListOfSelectedState = ({ elevatorsData }) => {
  const [chartData, setChartData] = useState(undefined);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedData, setSelectedData] = useState(undefined);

  useEffect(() => {
    setChartData(undefined);
    setSelectedIndex(-1);
    setSelectedData(undefined);
  }, [elevatorsData]);

  useEffect(() => {}, [chartData]);

  useEffect(() => {}, [selectedIndex]);

  useEffect(() => {}, [selectedData]);

  const loadChartData = (elevatorData, index) => {
    setChartData(undefined);
    setChartData(elevatorData.chart);
    setSelectedIndex(index);
    setSelectedData(elevatorData);
  };

  return (
    <>
      <Container>
        <Row>{selectedData && <SelectedCard data={selectedData} />}</Row>
        <Row className="mb-3">
          {chartData ? (
            <>
              <Row>
                <Col>
                  {chartData && <AnalyticsChart chartArray={chartData} />}
                </Col>
              </Row>
            </>
          ) : (
            <Alert variant="warning" align style={{ height: "250px" }}>
              <Alert.Heading> No data available!</Alert.Heading>
            </Alert>
          )}
        </Row>
        <Row className="justify-content-md-center">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Fabrication Number</th>
                <th>Device number</th>
                <th>Elevator type</th>
                <th>State</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {elevatorsData ? (
                elevatorsData.map((d, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <Badge bg="light" text="dark">
                          {d.fabricationNumber}
                        </Badge>
                      </td>
                      <td>{d.deviceIdentificationNumber}</td>
                      <td>{d.elevatorType}</td>
                      <td>
                        <Badge
                          bg={
                            d.state === State.OPERATIONAL
                              ? "success"
                              : d.state === State.WARNING
                              ? "danger"
                              : "warning"
                          }
                          text="dark"
                        >
                          {d.state}
                        </Badge>
                      </td>
                      <td>
                        <Button
                          variant="link"
                          disabled={selectedIndex === index}
                          onClick={() => loadChartData(d, index)}
                        >
                          Load Data
                        </Button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <Alert variant="danger">There are no records!</Alert>
              )}
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
};

export default ListOfSelectedState;
