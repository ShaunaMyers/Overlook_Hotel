import dayjs from 'dayjs';

class Customer {
    constructor(customerDetails) {
        this.id = customerDetails.id;
        this.name = customerDetails.name;
        this.totalSpent = 0;
        this.completedBookings = [];
        this.currentBookings = [];
        this.upcomingBookings = [];
        this.currentRoomSearched = null;
    }

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
    updateCurrentRoomSearched(roomNumber) {
      this.currentRoomSearched = roomNumber;
    }

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
