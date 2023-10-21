import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Details from "./Details";
import Button from "react-bootstrap/Button";

const ListOfSelectedState = ({ data }) => {
  const [details, setDetails] = useState(undefined);

  useEffect(() => {
    console.log(data, "DATA");
  }, [data]);

  const displayDetails = (details) => {
    setDetails(details);
  };

  return (
    <>
      <Details details={details} />
      {data ? (
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
      )}
    </>
  );
};

export default ListOfSelectedState;
