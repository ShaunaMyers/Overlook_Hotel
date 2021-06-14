import dayjs from 'dayjs';

class Customer {
    constructor(customerDetails) {
        console.log("Customer Details", customerDetails);
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

    returnAllBookings(bookings) {
      let customerBookings = bookings.filter(booking => booking.userID === this.id);
      // let now = dayjs();
      // let today = now.format('YYYY/MM/DD')

      customerBookings.forEach(booking => {
        let bookingDate = dayjs(booking.date);
        let today = dayjs();
        if(bookingDate.isBefore(today, 'day')) {
        } else if (bookingDate.isAfter(today, 'day')){
          console.log("After Today");
        } else if (bookingDate.isSame(today, 'day')) {
          console.log('Same Day');
        }
      })



      // console.log('filter bookings', customerBookings);
      //   console.log('bookings', bookings);
      //   console.log('today', today);
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
