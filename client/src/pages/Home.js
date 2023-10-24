import { Row, Col, Spinner } from "react-bootstrap";

import { useEffect, useState, useContext, useCallback } from "react";
import { DashboardContext1 } from "../context/DashboardProvider";

import { State } from "../enum";
import "../Dashboard.css";

import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./Logout";
import StackComponent from "../components/Stack";
import ListOfSelectedState from "./List";
import LoginButton from "./Login";

const Home = () => {
  const {
    warningList,
    outOfOrderList,
    operationalList,
    loading,
    setAccessToken,
    setLoggedInUser,
    setLoading,
  } = useContext(DashboardContext1);

  const { isAuthenticated, user, getIdTokenClaims } = useAuth0();

  const [elevatorsData, setElevatorsData] = useState(undefined);

  const stateArray = [State.OPERATIONAL, State.WARNING, State.OUT_OF_ORDER];

  useEffect(() => {
    if (!warningList && !outOfOrderList && !operationalList) setLoading(true);
    setElevatorsData(operationalList);
  }, [operationalList]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {}, [isAuthenticated]);

  useEffect(() => {
    getIdTokenClaims().then((claims) => {
      if (claims && isAuthenticated) {
        const accesToken = claims.__raw;
        setAccessToken(accesToken);
        setLoggedInUser(user);
      }
    });
  }, [isAuthenticated, user]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setLoggedInUser(user);
  }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleDataFromChild = (dataFromChild) => {
    setElevatorsData(dataFromChild);
  };

  useEffect(() => {}, [elevatorsData]);

  return (
    <>
      {isAuthenticated ? (
        <>
          <Row>
            <Col></Col>
            <Col>
              <h4 className="user-name"> Welcome!! {user?.name}</h4>
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
                {stateArray.map((s, index) => {
                  return (
                    <Col>
                      <StackComponent
                        index={index}
                        elevatorState={s}
                        onDataSend={handleDataFromChild}
                      />
                    </Col>
                  );
                })}
              </Row>
            </Col>
            <Col md={3} lg={3}></Col>
          </Row>
          <ListOfSelectedState elevatorsData={elevatorsData} />
        </>
      ) : (
        <Row className="layout mt-5">
          <Col md={3} lg={3}></Col>
          <Col>
            <Spinner animation="border" />
          </Col>
          <Col md={3} lg={3}></Col>
        </Row>
      )}
    </>
  );
};

export default Home;
