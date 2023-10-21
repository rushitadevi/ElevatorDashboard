import { useEffect, useState } from "react";
import Details from "./Details";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ListOfSelectedState = ({ data }) => {
  const [details, setDetails] = useState(undefined);

  useEffect(() => {}, [data]);

  const displayDetails = (details) => {
    setDetails(details);
  };

  return (
    <>
      <Details details={details} />
      {/* {data ? (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Fabrick Number</th>
              <th>Device Number</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((d, index) => {
                return (
                  <tr key={index}>
                    <td>{d.fabricationNumber}</td>
                    <td>{d.deviceIdentificationNumber}</td>
                    <td>
                      <Button variant="info" onClick={() => displayDetails(d)}>
                        Details
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      ) : (
        "no"
      )} */}

      {data ? (
        <Accordion>
          {data.map((d, index) => {
            return (
              <Accordion.Item eventKey={index}>
                <Accordion.Header>
                  <Badge bg="secondary">{d.fabricationNumber}</Badge>
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col>
                      <div className="info-item">
                        <span>Device Number: </span>
                        <Badge bg="light" text="dark">
                          {d.deviceIdentificationNumber}
                        </Badge>
                      </div>
                    </Col>
                    <Col>
                      <div className="info-item">
                        <span>Fabrication Number: </span>
                        <Badge bg="light" text="dark">
                          {d.fabricationNumber}
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
                          {
                            d /* `elevatorType` is a property of the `data` object. It is used to
                          display the type of elevator associated with each record in the table
                          or accordion. */.elevatorType
                          }
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
                      <div className="info-item">
                        <span>Production Year: </span>
                        <Badge bg="light" text="dark">
                          {d.productionYear}
                        </Badge>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    {" "}
                    <Col>
                      <div className="info-item">
                        <span>State: </span>
                        <Badge bg="success" text="light">
                          {d.state}
                        </Badge>
                      </div>
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
    </>
  );
};

export default ListOfSelectedState;
