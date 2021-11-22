export class UpcomingsUseCase {
    constructor(repository) {
        this.repository = repository;
    }

    async invoke() {
        return await this.repository.getUpcomings()
    }
}