import { BackEndApi } from "./../services/api/BackEndApi.js";

export class backendService {
  async getElevatorList() {
    const bApi = new BackEndApi();
    const response = await bApi.getElevatorList();
    return response;
  }

  async saveUser(userData) {
    const bApi = new BackEndApi();
    console.log(userData, "UD");
    const response = await bApi.saveUser(userData);
    return response;
  }
}
