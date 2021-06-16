import dayjs from 'dayjs';

class Hotel {
    constructor(rooms, bookings, guests) {
        this.allRooms = rooms;
        this.allReservations = bookings;
        this.allGuests = guests;
        this.roomsAvailable = [];
        this.completedReservations = [];
        this.currentReservations = [];
        this.upcomingReservations = [];
    }

    filterAvailableRooms(customerSearch) {

        let { date, roomType } = customerSearch;
        let today = dayjs();
        let bookingDate = dayjs(date);

        if (date) {
          if (bookingDate.isBefore(today)) {
            this.offerApologyMessage();
          } else {
            let availableRoomNumbers = this.allReservations.filter(reservation => reservation.date !== date).map(room => room.roomNumber);

            this.allRooms.forEach(room => {
              if (availableRoomNumbers.includes(room.number)) {
                this.roomsAvailable.push(room);
              }
            })
          }
        }

        if (roomType) {
          console.log('here 2');
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
