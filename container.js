class Container {
    upcomings = new Upcomings();
    apiCall = new ApiCall();

    async init() {
        this.upcomings = await this.initApiCall()
        return this.upcomings
    } 

    initUpcomings() {

    }

    async initApiCall() {
        return await this.upcomings.getUpcomingsResponse()
    }
}