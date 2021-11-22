import { GetUpcomingsDataSource } from "../dataSource/getUpcomingsDataSource.js";

export class UpcomingsRepository {
    constructor(dataSource) {
        this.dataSource = new GetUpcomingsDataSource()
    }

    getUpcomings() {
        return this.dataSource.getUpcomingsResponse()
    }
}