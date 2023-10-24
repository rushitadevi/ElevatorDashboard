import { useEffect, useState } from "react";

import {
  Accordion,
  Alert,
  Badge,
  Row,
  Col,
  Card,
  Container,
  Button,
} from "react-bootstrap";
import AnalyticsChart from "../Charts/AnalyticsChart";

const ListOfSelectedState = ({ data }) => {
  useEffect(() => {}, [data]);
  const [chartData, setChartData] = useState(undefined);

  const displayChart = (d) => {
    console.log(d.chart.data.length, "d");
    setChartData(undefined);
    setChartData(d.chart);
  };

  useEffect(() => {
    console.log(chartData, "CD");
  }, [chartData]);

  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} lg="4">
            <Accordion>
              {data ? (
                data.map((d, index) => {
                  return (
                    <Accordion.Item eventKey={index}>
                      <Accordion.Header>
                        <Container>
                          <Row>
                            <Col xs={6}>
                              <div>
                                <span style={{ fontWeight: "bold" }}>
                                  Fabrication Number:{" "}
                                </span>
                                <Badge bg="light" text="dark">
                                  {d.fabricationNumber}
                                </Badge>
                              </div>
                            </Col>
                            <Col xs={6}>
                              <div>
                                <span style={{ fontWeight: "bold" }}>
                                  Production Year:{" "}
                                </span>
                                <Badge bg="light" text="dark">
                                  {d.productionYear}
                                </Badge>
                              </div>
                            </Col>
                          </Row>
                        </Container>
                      </Accordion.Header>
                      <Accordion.Body>
                        <Row>
                          <Col>
                            <Card border="dark">
                              <Card.Body>
                                <Row>
                                  <Col>
                                    <div className="info-item">
                                      <span>Device Number: </span>
                                      <Badge bg="light" text="dark">
                                        {d.deviceIdentificationNumber}
                                      </Badge>
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col>
                                    <div className="info-item">
                                      <span>Address: </span>
                                      <Badge bg="light" text="dark">
                                        {d.address}
                                      </Badge>
                                    </div>
                                  </Col>
                                  <Col>
                                    <div className="info-item">
                                      <span>Elevator Type: </span>
                                      <Badge bg="light" text="dark">
                                        {d.elevatorType}
                                      </Badge>
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col>
                                    <div className="info-item">
                                      <span>Manufacturer Name: </span>
                                      <Badge bg="light" text="dark">
                                        {d.manufacturerName}
                                      </Badge>
                                    </div>
                                  </Col>
                                  <Col>
                                    {" "}
                                    <div className="info-item">
                                      <span>State: </span>
                                      <Badge bg="success" text="light">
                                        {d.state}
                                      </Badge>
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  {" "}
                                  <Col>
                                    <Button
                                      variant="dark"
                                      onClick={() => displayChart(d)}
                                    >
                                      Load Chart Data
                                    </Button>
                                  </Col>
                                </Row>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>
                  );
                })
              ) : (
                <Alert variant="danger">There are no records!</Alert>
              )}
            </Accordion>
          </Col>
          <Col lg="8">
            {chartData ? (
              <>
                <Row>
                  <Col>
                    {chartData && <AnalyticsChart chartArray={chartData} />}
                  </Col>
                </Row>
              </>
            ) : (
              <Alert variant="warning">
                No data available for this chart! Please try to click load data
                button.
              </Alert>
            )}
          </Col>
          {/* <Col md={3} lg={3}></Col> */}
        </Row>
      </Container>
    </>
  );
};

export default ListOfSelectedState;
