import { createContext, useEffect, useState } from "react";
import { backendService } from "../services/BackendService";
import { State } from "../enum";

const DashboardContext1 = createContext({
  elevatorsList: undefined,
  operationalList: undefined,
  warningList: undefined,
  outOfOrderList: undefined,
  loading: undefined,
  setAccessToken: (token) => {},
  setLoggedInUser: (user) => {},
  saveUser: async (user) => {},
  setLoading: (loading) => {},
});

const DashboardProvider1 = ({ children }) => {
  const [elevators, setElevators] = useState(undefined);
  const [operationalList, setOperationalList] = useState(undefined);
  const [warningList, setWarningList] = useState(undefined);
  const [outOfOrderList, setoutOfOrderList] = useState(undefined);
  const [accessToken, setAccessToken] = useState(undefined);
  const [loggedInUser, setLoggedInUser] = useState(undefined);
  const [loading, setLoading] = useState(undefined);

  const getElevatorList = async () => {
    const response = await backendService.getElevatorList(accessToken);
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
      setLoading(false);
    } else setLoading(false);
  };

  const saveUser = async () => {
    await backendService.saveUser(loggedInUser, accessToken);
  };

  useEffect(() => {}, [loading]);

  useEffect(() => {}, [elevators]);

  useEffect(() => {
    if (accessToken) getElevatorList();
    if (accessToken) saveUser(loggedInUser);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedInUser, accessToken]);

  return (
    <DashboardContext1.Provider
      value={{
        elevatorsList: elevators,
        warningList,
        outOfOrderList,
        operationalList,
        loading,
        setAccessToken,
        setLoggedInUser,
        setLoading,
      }}
    >
      {children}
    </DashboardContext1.Provider>
  );
};

export { DashboardContext1, DashboardProvider1 };
