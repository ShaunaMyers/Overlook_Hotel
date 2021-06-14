import dayjs from 'dayjs';

class Customer {
    constructor(customerDetails) {
        this.id = customerDetails.id;
        this.name = customerDetails.name;
        this.totalSpent = 0;
        this.completedBookings = [];
        this.currentBookings = [];
        this.upcomingBookings = [];
    }

    // addToCurrentBookings(booking) {
    //     !this.currentBookings.includes(booking) && this.currentBookings.push(booking);
    //     if (this.upcomingBookings.includes(booking)) {
    //         this.removeFromUpcomingBookings(booking);
    //     }
    // }

    // addToCompletedBookings(booking, room) {
    //     !this.completedBookings.includes(booking) && this.completedBookings.push(booking);
    //     this.removeFromCurrentBookings(booking);
    //     this.addToTotalSpent(room);
    // }

    // addToUpcomingBookings(booking) {
    //     // console.log("BOOKING PASSED IN", booking);
    //     !this.upcomingBookings.includes(booking) && this.upcomingBookings.push(booking);
    //     // console.log("UPCOMING BOOKINGS", this.upcomingBookings);
    // }

    returnAllBookings(hotel) {
      let customerBookings = hotel.allReservations.filter(booking => booking.userID === this.id);
      let today = dayjs();

      customerBookings.forEach(booking => {
        let bookingDate = dayjs(booking.date);
        if(bookingDate.isBefore(today, 'day')) {
          this.completedBookings.push(booking);
        } else if (bookingDate.isAfter(today, 'day')){
          this.upcomingBookings.push(booking);
        } else if (bookingDate.isSame(today, 'day')) {
          this.currentBookings.push(booking);
        }
      })

      this.addToTotalSpent(hotel);

      return { completedBookings: this.completedBookings, currentBookings: this.currentBookings, upcomingBookings: this.upcomingBookings };
    }

    // removeFromCurrentBookings(booking) {
    //     let currentBookingIndex = this.currentBookings.indexOf(booking);
    //     this.currentBookings.splice(currentBookingIndex, 1);
    // }

    // removeFromUpcomingBookings(booking) {
    //     let currentBookingIndex = this.upcomingBookings.indexOf(booking);
    //     this.upcomingBookings.splice(currentBookingIndex, 1);
    // }

    addToTotalSpent(hotel) {
      let totalCost = 0
        this.completedBookings.forEach(booking => {
            totalCost += hotel.returnPriceOfRoom(booking.roomNumber);
        })

      this.totalSpent = totalCost;
    }

    returnTotalSpent() {
      return this.totalSpent;
    }

}

export default Customer;
