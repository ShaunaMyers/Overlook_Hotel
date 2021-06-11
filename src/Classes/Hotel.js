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

        let { date, roomType, numBeds, bedSize, costPerNight } = customerSearch;

        let availableRoomNumbers = this.allReservations.filter(reservation => reservation.date !== date).map(room => room.roomNumber);

        this.allRooms.forEach(room => {
            if (availableRoomNumbers.includes(room.number)) {
                this.roomsAvailable.push(room);
            }
        })

        if (roomType || numBeds || bedSize || costPerNight) {
            this.checkAvailabilityWithAllOptions(roomType, numBeds, bedSize, costPerNight);
        }


        if (this.roomsAvailable.length) {
            return this.roomsAvailable;
        } else {
            return this.offerApologyMessage();
        }
    }

    checkAvailabilityWithAllOptions(roomType, numBeds, bedSize, costPerNight) {
        if (roomType) {
            this.filterByRoomType(roomType);
        }
        if (numBeds) {
            this.filterByNumberOfBeds(numBeds);
        }
        if (bedSize) {
            this.filterByBedSize(bedSize);
        }
        if (costPerNight) {
            this.filterByCostPerNight(costPerNight)
        }
    }


    filterByRoomType(roomType) {
        let availableRooms = this.roomsAvailable.filter(room => room.roomType === roomType);
        this.roomsAvailable = availableRooms;
        this.roomsAvailable = availableRooms;
    }

    filterByNumberOfBeds(numBeds) {
        let availableRooms = this.roomsAvailable = this.roomsAvailable.filter(room => room.numBeds === numBeds);
        this.roomsAvailable = availableRooms;
        this.roomsAvailable = availableRooms;
    }

    filterByBedSize(bedSize) {
        let availableRooms = this.roomsAvailable = this.roomsAvailable.filter(room => room.bedSize === bedSize);
        this.roomsAvailable = availableRooms;
        this.roomsAvailable = availableRooms;
    }

    filterByCostPerNight(costPerNight) {
        let availableRooms = this.roomsAvailable = this.roomsAvailable.filter(room => room.costPerNight <= costPerNight)
        this.roomsAvailable = availableRooms;
        // if (availableRooms.length) {
        this.roomsAvailable = availableRooms;
    }

    offerApologyMessage() {
        return 'We are very sorry...it looks like we have no rooms available that fit your search selections. We would love to host you, though, so please try your search using different selections.'
    }
}

export default Hotel;