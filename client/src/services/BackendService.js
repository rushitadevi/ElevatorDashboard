import { BackEndApi } from "./../services/api/BackEndApi.js";

export class backendService {
  async getElevatorList(accessToken) {
    const bApi = new BackEndApi();
    const response = await bApi.getElevatorList(accessToken);
    return response;
  }

  async saveUser(userData, accessToken) {
    const bApi = new BackEndApi();
    console.log(userData, "UD");
    const response = await bApi.saveUser(userData, accessToken);
    return response;
  }
}
