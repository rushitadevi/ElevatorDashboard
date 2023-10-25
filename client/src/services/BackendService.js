import { BackEndApi } from "./../services/api/BackEndApi.js";

export class backendService {
  static async getElevatorList(accessToken) {
    const response = await BackEndApi.getElevatorList(accessToken);
    return response;
  }

  static async saveUser(userData, accessToken) {
    const response = await BackEndApi.saveUser(userData, accessToken);
    return response;
  }
}
