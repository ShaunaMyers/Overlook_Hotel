class Hotel {
    constructor(rooms, bookings, guests) {
        this.allRooms = rooms;
        this.allReservations = bookings;
        this.allGuests = guests;
        this.roomsAvailable = [];
        this.completedReservations = [];
        this.currentReservations = [];
        this.upcomingReservations = [];
        this.totalRevenue = 0;
    }


    addToUpcomingReservations(booking) {
        this.upcomingReservations.push(booking);
    }

    addToCurrentReservations(booking) {
        this.currentReservations.push(booking);
        if (this.upcomingReservations.includes(booking)) {
            let bookingIndex = this.upcomingReservations.indexOf(booking);
            this.upcomingReservations.splice(bookingIndex, 1);
        }
    }

    addToCompletedReservations(booking) {
        this.completedReservations.push(booking);
        if (this.currentReservations.includes(booking)) {
            let bookingIndex = this.currentReservations.indexOf(booking);
            this.currentReservations.splice(bookingIndex, 1);
        }
    }

    checkIfRoomsAreAvailable(customerSearch) {

        let { date, roomType } = customerSearch;

        console.log('date in customer', date);
        console.log('roomType in customer', roomType);
        if (date) {
          let availableRoomNumbers = this.allReservations.filter(reservation => reservation.date !== date).map(room => room.roomNumber);

          this.allRooms.forEach(room => {
            if (availableRoomNumbers.includes(room.number)) {
              this.roomsAvailable.push(room);
            }
          })
        }

        if (roomType) {
            this.filterByRoomType(roomType);
        }


        if (this.roomsAvailable.length) {
            return this.roomsAvailable;
        } else {
            return this.offerApologyMessage();
        }
    }

    filterByRoomType(roomType) {
        let availableRooms = this.roomsAvailable.filter(room => room.roomType === roomType);
        this.roomsAvailable = availableRooms;
    }

    offerApologyMessage() {
        return 'We are very sorry...it looks like we have no rooms available that fit your search selections. We would love to host you, though, so please try your search using different selections.'
    }

    returnPriceOfRoom(roomNumber) {
      let foundRoom = this.allRooms.find(room => room.number === roomNumber);
      return foundRoom.costPerNight;
    }
}

export default Hotel;
