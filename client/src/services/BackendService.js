import { BackEndApi } from "./../services/api/BackEndApi.js";

export class backendService {
  async getElevatorList() {
    const bApi = new BackEndApi();
    const response = await bApi.getElevatorList();
    return response;
  }
}
