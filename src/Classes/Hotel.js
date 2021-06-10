class Hotel {
    constructor(rooms) {
        this.allRooms = rooms;
        this.roomsAvailable = rooms;
        this.completedReservations = [];
        this.currentReservations = [];
        this.upcomingReservations = [];
        this.totalRevenue = 0;
    }

}

export default Hotel;