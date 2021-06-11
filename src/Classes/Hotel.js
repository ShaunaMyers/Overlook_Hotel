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
        let availableRoomNumbers = this.allReservations.filter(reservation => reservation.date !== customerSearch.date).map(room => room.roomNumber);

        this.allRooms.forEach(room => {
            if (availableRoomNumbers.includes(room.number)) {
                this.roomsAvailable.push(room);
            }
        })

        if (customerSearch.roomType) {
            this.filterByRoomType(customerSearch.roomType)
        } else if (customerSearch.numBeds) {
            this.filterByNumberOfBeds(customerSearch.numBeds)
        }

        if (this.roomsAvailable.length) {
            return this.roomsAvailable;
        } else {
            this.offerApologyMessage();
        }
    }

    filterByRoomType(roomType) {
        this.roomsAvailable = this.roomsAvailable.filter(room => room.roomType === roomType);
    }

    filterByNumberOfBeds(numBeds) {
        this.roomsAvailable = this.roomsAvailable.filter(room => room.numBeds = numBeds)
    }

    filterByBedSize(bedSize) {
        this.roomsAvailable = this.roomsAvailable.filter(room => room.bedSize === bedSize);
    }

    filterByCostPerNight(costPerNight) {
        this.roomsAvailable = this.roomsAvailable.filter(room => room.costPerNight <= costPerNight)
    }
}

export default Hotel;