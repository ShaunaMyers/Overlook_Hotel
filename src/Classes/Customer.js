class Customer {
    constructor(customerDetails) {
        this.id = customerDetails.id;
        this.name = customerDetails.name;
        this.totalSpent = 0;
        this.completedBookings = [];
        this.currentBookings = [];
        this.upcomingBookings = [];
        // this.currentRoom = {}
    }

    addToCurrentBookings(booking) {
        !this.currentBookings.includes(booking) && this.currentBookings.push(booking);
    }

    addToCompletedBookings(booking, room) {
        !this.completedBookings.includes(booking) && this.completedBookings.push(booking);
        this.addToTotalSpent(room);
    }

    addToUpcomingBookings(booking) {
        !this.upcomingBookings.includes(booking) && this.upcomingBookings.push(booking);
    }

    returnAllBookings() {
        return { completedBookings: this.completedBookings, currentBookings: this.currentBookings, upcomingBookings: this.upcomingBookings };
    }

    addToTotalSpent(room) {
        this.totalSpent += room.costPerNight;
    }

}

export default Customer;