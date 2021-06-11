import { expect } from 'chai';
import Booking from '../src/Classes/Booking';
import sampleCustomerData from '../src/data/sampleCustomerData';
import sampleBookingsData from '../src/data/sampleBookingsData';
import sampleRoomsData from '../src/data/sampleRoomsData';

describe.only('Booking Class', () => {

    let booking;

    beforeEach(() => {

        booking = new Booking(sampleBookingsData[0]);
    });

    it('Should be a function', () => {
        expect(Booking).to.be.a('function');
    });

    it('Should be an instance of Hotel', () => {
        expect(booking).to.be.an.instanceOf(Booking);
    });

    it('Should store a booking id', () => {
        expect(booking.id).to.eql(sampleBookingsData[0].id);
    });

    it('Should store a user id', () => {
        expect(booking.userID).to.eql(sampleBookingsData[0].userID);
    });

    it('Should store a booking date', () => {
        expect(booking.date).to.eql(sampleBookingsData[0].date);
    });

    it('Should store a room number', () => {
        expect(booking.roomNumber).to.eql(sampleBookingsData[0].roomNumber);
    });


});