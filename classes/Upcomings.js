class Upcomings extends ApiCall {
    async getUpcomingsResponse() {
        return await this.getUpcomings()
    }
    // function pollDOM () {
    //     const el = document.querySelector('my-element');

    //     if (el.length) {
    //       // Do something with el
    //     } else {
    //       setTimeout(pollDOM, 300); // try again in 300 milliseconds
    //     }
    //   }
}