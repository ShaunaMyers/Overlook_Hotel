class Customer {
    constructor(customerDetails) {
        this.id = customerDetails.id;
        this.name = customerDetails.name;
        this.totalSpent = 0;
        this.completedBookings = [];
        this.currentBookings = [];
        this.upcomingBookings = [];
    }

    addToCurrentBookings(booking) {
        !this.currentBookings.includes(booking) && this.currentBookings.push(booking);
    }

    addToCompletedBookings(booking) {
        !this.completedBookings.includes(booking) && this.completedBookings.push(booking);
    }

    addToUpcomingBookings(booking) {
        !this.upcomingBookings.includes(booking) && this.upcomingBookings.push(booking);
    }

    returnAllBookings() {
        return { completedBookings: this.completedBookings, currentBookings: this.currentBookings, upcomingBookings: this.upcomingBookings };
    }

}

export default Customer;