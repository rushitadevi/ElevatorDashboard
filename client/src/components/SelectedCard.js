import { Badge, Row, Col, Container, Card } from "react-bootstrap";

const SelectedCard = ({ data }) => {
  return (
    <Container className="mb-3">
      <Row>
        <Col lg={2} xs={12}></Col>
        <Col lg={8} xs={12}>
          <Card>
            <Card.Header as="h5">
              Elevator ({data.state}) Details for Fabrication no:{" "}
              {data.fabricationNumber}
            </Card.Header>
            <Card.Body>
              <Row>
                <Col>
                  <Card.Text className="info-item">
                    <span>Address: </span>
                    <Badge bg="light" text="dark">
                      {data.address}
                    </Badge>
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text className="info-item">
                    <span>Manufacturer Name: </span>
                    <Badge bg="light" text="dark">
                      {data.manufacturerName}
                    </Badge>
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text className="info-item">
                    <span>Production Year: </span>
                    <Badge bg="light" text="dark">
                      {data.productionYear}
                    </Badge>
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={2} xs={12}></Col>
      </Row>
    </Container>
  );
};

export default SelectedCard;
