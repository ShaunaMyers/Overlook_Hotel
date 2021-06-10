import { expect } from 'chai';
import Hotel from '../src/Classes/Hotel';
// import sampleCustomerData from '../src/data/;sampleCustomerData';
import sampleBookingsData from '../src/data/sampleBookingsData';
import sampleRoomsData from '../src/data/sampleRoomsData';

describe.only('Hotel Class', () => {

    let hotel;

    beforeEach(() => {

        hotel = new Hotel(sampleRoomsData);

    });

    it('Should be a function', () => {
        expect(Hotel).to.be.a('function');
    });

    it('Should be an instance of Hotel', () => {
        expect(hotel).to.be.an.instanceOf(Hotel);
    });

    it('Should store a list of all the rooms the hotel has', () => {
        expect(hotel.allRooms).to.eql(sampleRoomsData);
    });

    it('Should start with all of its rooms available', () => {
        expect(hotel.roomsAvailable).to.eql(sampleRoomsData);
    });

    it('Should start with a total revenue of zero', () => {
        expect(hotel.totalRevenue).to.equal(0);
    });

    it('Should start with no past reservations', () => {
        expect(hotel.completedReservations).to.eql([]);
    });

    it('Should start with no current reservations', () => {
        expect(hotel.currentReservations).to.eql([]);
    });

    it('Should start with no upcoming reservations', () => {
        expect(hotel.upcomingReservations).to.eql([]);
    });
});
