import { createContext, useEffect, useState } from "react";
import { backendService } from "../services/BackendService";
import { State } from "../enum";

const DashboardContext1 = createContext({
  elevatorsList: undefined,
  operationalList: undefined,
  warningList: undefined,
  outOfOrderList: undefined,
  setAccessToken: (token) => {},
  setLoggedInUser: (user) => {},
  saveUser: async (user) => {},
});

const DashboardProvider1 = ({ children }) => {
  const [elevators, setElevators] = useState(undefined);
  const [operationalList, setOperationalList] = useState(undefined);
  const [warningList, setWarningList] = useState(undefined);
  const [outOfOrderList, setoutOfOrderList] = useState(undefined);
  const [accessToken, setAccessToken] = useState(undefined);
  const [loggedInUser, setLoggedInUser] = useState(undefined);

  const getElevatorList = async () => {
    const bS = new backendService();
    const response = await bS.getElevatorList();
    if (response) {
      setElevators(response);
      const operationalList = response.filter(
        (res) => res.state === State.OPERATIONAL
      );
      setOperationalList(operationalList);

      const warningList = response.filter((res) => res.state === State.WARNING);
      setWarningList(warningList);

      const outOfOrderList = response.filter(
        (res) => res.state === State.OUT_OF_ORDER
      );
      setoutOfOrderList(outOfOrderList);
    }
  };

  const saveUser = async (user) => {
    const bS = new backendService();
    await bS.saveUser(loggedInUser);
  };

  useEffect(() => {
    getElevatorList();
  }, []);

  useEffect(() => {}, [elevators]);

  useEffect(() => {
    saveUser(loggedInUser);
  }, [loggedInUser]);

  return (
    <DashboardContext1.Provider
      value={{
        elevatorsList: elevators,
        warningList,
        outOfOrderList,
        operationalList,
        setAccessToken,
        setLoggedInUser,
      }}
    >
      {children}
    </DashboardContext1.Provider>
  );
};

export { DashboardContext1, DashboardProvider1 };
