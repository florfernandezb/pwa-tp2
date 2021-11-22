import { getUpcomingsPath } from "./upcomingsApiConstants.js";

export class UpcomingsApiCall {
  async getUpcomings() {
    let response = await
      fetch(getUpcomingsPath())
        .then(function (data) {
          return data.json();
        })
        .then(function (data) {
          return data
        })
        .catch(function (error) {
          console.log("Hubo un problema con la peticion Fetch: " + error.message);
        });
    return response
  }
}