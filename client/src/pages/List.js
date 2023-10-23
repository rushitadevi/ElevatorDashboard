import { useEffect } from "react";

import {
  Accordion,
  Alert,
  Badge,
  Row,
  Col,
  Card,
  Container,
} from "react-bootstrap";

const ListOfSelectedState = ({ data }) => {
  useEffect(() => {}, [data]);

  return (
    <>
      <Row>
        <Col md={3} lg={3}></Col>
        <Col>
          {data ? (
            <Accordion>
              {data.map((d, index) => {
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
                                <Col></Col>
                              </Row>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          ) : (
            <Alert variant="danger">There are no records!</Alert>
          )}
        </Col>
        <Col md={3} lg={3}></Col>
      </Row>
    </>
  );
};

export default ListOfSelectedState;
