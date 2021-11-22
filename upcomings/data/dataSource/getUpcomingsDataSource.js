export class GetUpcomingsDataSource{
    constructor(upcomingsApiCall) {
        this.upcomingsApi = upcomingsApiCall;
    }

    async getUpcomingsResponse() {
        return await this.upcomingsApi.getUpcomings()
    }
}