import React, { useState, useContext, emit, useEffect } from "react";
import { Button, Badge, Stack } from "react-bootstrap";
import { State } from "../enum";
import "../Dashboard.css";
import { DashboardContext1 } from "../context/DashboardProvider";

const StackComponent = ({ elevatorState, onDataSend, index }) => {
  const { warningList, outOfOrderList, operationalList } =
    useContext(DashboardContext1);

  const setSelectedData = (type) => {
    if (type === State.OPERATIONAL) {
      onDataSend(operationalList);
    } else if (type === State.WARNING) {
      onDataSend(warningList);
    } else if (type === State.OUT_OF_ORDER) {
      onDataSend(outOfOrderList);
    }
  };
  return (
    <>
      <Stack direction="horizontal" gap={2}>
        <Button
          variant={
            elevatorState === State.OPERATIONAL
              ? "outline-success"
              : elevatorState === State.OUT_OF_ORDER
              ? "outline-warning"
              : "outline-danger"
          }
          onClick={() => setSelectedData(elevatorState)}
          size="sm"
          text="dark"
          //   disabled={index && true}
        >
          {elevatorState === State.OPERATIONAL
            ? "Operational "
            : elevatorState === State.OUT_OF_ORDER
            ? "Out of order "
            : "Warning "}
          <Badge
            bg={
              elevatorState === State.OPERATIONAL
                ? "success"
                : elevatorState === State.OUT_OF_ORDER
                ? "warning"
                : "danger"
            }
            text="light"
            pill
          >
            {elevatorState === State.OPERATIONAL
              ? operationalList?.length
              : elevatorState === State.OUT_OF_ORDER
              ? outOfOrderList?.length
              : warningList?.length}
          </Badge>
        </Button>
      </Stack>
    </>
    //     <Row>
    //     <Col md={3} lg={3}></Col>
    //     <Col>
    //       <ListOfSelectedState data={data} />
    //     </Col>

    //     <Col md={3} lg={3}></Col>
    //   </Row>
  );
};

export default StackComponent;
