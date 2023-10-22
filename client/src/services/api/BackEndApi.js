export const Methods = {
  Get: "GET",
  Post: "POST",
  Put: "PUT",
  Delete: "DELETE",
};

export class BackEndApi {
  async getElevatorList() {
    const res = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/elevators/list`
    );
    return await res.json();
  }

  async saveUser(userData) {
    console.log(userData, "USER");
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/users/save`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(userData),
    });
    return await res.json();
  }
}
