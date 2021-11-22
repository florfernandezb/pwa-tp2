import { UpcomingsApiCall } from "../../framework/requestManager/upcomingsApiCall.js";

export class GetUpcomingsDataSource{
    constructor() {
        this.upcomingsApi = new UpcomingsApiCall()
    }

    async getUpcomingsResponse() {
        return await this.upcomingsApi.getUpcomings()
    }
}