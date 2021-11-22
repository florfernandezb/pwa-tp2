export class UpcomingsRepository {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }

    getUpcomings() {
        return this.dataSource.getUpcomingsResponse()
    }
}