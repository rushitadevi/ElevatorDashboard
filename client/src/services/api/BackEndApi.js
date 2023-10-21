export const Methods = {
  Get: "GET",
  Post: "POST",
  Put: "PUT",
  Delete: "DELETE",
};

export class BackEndApi {
  async getElevatorList() {
    const res = await fetch("http://localhost:5000/elevators/list");
    return await res.json();
  }
}
