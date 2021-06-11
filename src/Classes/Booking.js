class Booking {
    constructor(booking) {
        this.id = booking.id;
        this.userID = booking.userID;
        this.date = booking.date;
        this.roomNumber = booking.roomNumber;
        this.roomServiceCharges = booking.roomServiceCharges;
    }

    addToRoomServiceCharges(charges) {
        this.roomServiceCharges.push(charges)
    }

    returnRoomServiceCharges() {
        this.roomServiceCharges.reduce((sum, charge) => {
            sum += charge;
            return sum;
        }, 0)
    }
}

export default Booking;