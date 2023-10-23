import { Row, Col, Spinner } from "react-bootstrap";

import { useEffect, useState, useContext } from "react";
import { DashboardContext1 } from "../context/DashboardProvider";

import { State } from "../enum";
import "../Dashboard.css";

import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./Logout";
import StackComponent from "../components";
import ListOfSelectedState from "./List";

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

  const [data, setData] = useState(undefined);

  const stateArray = [State.OPERATIONAL, State.WARNING, State.OUT_OF_ORDER];

  useEffect(() => {
    if (!warningList && !outOfOrderList && !operationalList) setLoading(true);
    setData(operationalList);
  }, [warningList, outOfOrderList, operationalList, loading]);

  useEffect(() => {
    getIdTokenClaims().then((claims) => {
      if (claims && isAuthenticated) {
        const accesToken = claims.__raw;
        setAccessToken(accesToken);
        setLoggedInUser(user);
      }
    });
  }, [getIdTokenClaims, isAuthenticated, user]);

  useEffect(() => {
    setLoggedInUser(user);
  }, [user]);

  const handleDataFromChild = (dataFromChild) => {
    setData(dataFromChild);
  };

  useEffect(() => {}, [data]);

  return (
    <>
      <Row>
        <Col></Col>
        <Col>
          {" "}
          <h4 className="user-name"> Welcome!! {user?.email}</h4>
        </Col>
        <Col>
          <LogoutButton />
        </Col>
      </Row>
      {loading ? (
        <Row className="layout">
          <Col md={3} lg={3}></Col>
          <Col>
            <Spinner animation="border" />
          </Col>
          <Col md={3} lg={3}></Col>
        </Row>
      ) : (
        <>
          {" "}
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
          <ListOfSelectedState data={data} />
        </>
      )}
    </>
  );
};

export default Home;
