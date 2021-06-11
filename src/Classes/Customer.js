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
        if (this.upcomingBookings.includes(booking)) {
            this.removeFromUpcomingBookings(booking);
        }
    }

    addToCompletedBookings(booking, room) {
        !this.completedBookings.includes(booking) && this.completedBookings.push(booking);
        this.removeFromCurrentBookings(booking);
        this.addToTotalSpent(room);
    }

    addToUpcomingBookings(booking) {
        // console.log("BOOKING PASSED IN", booking);
        !this.upcomingBookings.includes(booking) && this.upcomingBookings.push(booking);
        // console.log("UPCOMING BOOKINGS", this.upcomingBookings);
    }

    returnAllBookings() {
        return { completedBookings: this.completedBookings, currentBookings: this.currentBookings, upcomingBookings: this.upcomingBookings };
    }

    removeFromCurrentBookings(booking) {
        let currentBookingIndex = this.currentBookings.indexOf(booking);
        this.currentBookings.splice(currentBookingIndex, 1);
    }

    removeFromUpcomingBookings(booking) {
        let currentBookingIndex = this.upcomingBookings.indexOf(booking);
        this.upcomingBookings.splice(currentBookingIndex, 1);
    }

    addToTotalSpent(room) {
        this.totalSpent += room.costPerNight;
    }

}

export default Customer;