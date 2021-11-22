import { UpcomingsRepository } from "../data/repository/upcomingsRepository.js";

export class UpcomingsUseCase {
    constructor(repository) {
        this.repository = new UpcomingsRepository();
    }

    async invoke() {
        return await this.repository.getUpcomings()
    }
}