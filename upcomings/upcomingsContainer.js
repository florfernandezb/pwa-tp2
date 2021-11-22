import { UpcomingsApiCall } from "./framework/requestManager/upcomingsApiCall.js";
import { GetUpcomingsDataSource } from "./data/dataSource/getUpcomingsDataSource.js"
import { UpcomingsRepository } from "./data/repository/upcomingsRepository.js";
import { UpcomingsUseCase } from "./useCase/upcomingsUseCase.js";

export class UpcomingsContainer {
    apiCall = new UpcomingsApiCall();
    dataSource = new GetUpcomingsDataSource(this.apiCall);
    repository = new UpcomingsRepository(this.dataSource);
    upcomings = new UpcomingsUseCase(this.repository);

    getUpcomings() {
        return this.upcomings.invoke();
    }
}