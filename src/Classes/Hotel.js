class Hotel {
    constructor(rooms, bookings) {
        this.allRooms = rooms;
        this.allReservations = bookings;
        this.roomsAvailable = [];
        this.completedReservations = [];
        this.currentReservations = [];
        this.upcomingReservations = [];
        this.totalRevenue = 0;
    }

    checkIfRoomsAreAvailable(date) {
        let availableRoomNumbers = this.allReservations.filter(reservation => reservation.date !== date).map(room => room.roomNumber);

        this.allRooms.forEach(room => {
            if (availableRoomNumbers.includes(room.number)) {
                this.roomsAvailable.push(room);
            }
        })
        return this.roomsAvailable;
    }

    addToUpcomingReservations(booking) {
        this.upcomingReservations.push(booking);
    }
}

export default Hotel;