export const Methods = {
  Get: "GET",
  Post: "POST",
  Put: "PUT",
  Delete: "DELETE",
};

export class BackEndApi {
  static async getElevatorList(accessToken) {
    const res = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/elevators/list`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return await res.json();
  }

  static async saveUser(userData, accessToken) {
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/users/save`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      method: "POST",
      body: JSON.stringify(userData),
    });
    return await res.json();
  }
}
