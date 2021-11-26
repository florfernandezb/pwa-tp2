import { UpcomingsContainer } from "../upcomingsContainer.js";

const upcomingsContainer = new UpcomingsContainer();
upcomingsContainer.favourites.init();

window.onload = async function () {
    let response = await upcomingsContainer.getUpcomings();
    console.log("init upcomings response", response);
}