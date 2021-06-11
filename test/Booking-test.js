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
        expect(booking.id).to.equal(sampleBookingsData[0].id);
    });

    it('Should store a user id', () => {
        expect(booking.userID).to.equal(sampleBookingsData[0].userID);
    });

    it('Should store a booking date', () => {
        expect(booking.date).to.equal(sampleBookingsData[0].date);
    });

    it('Should store a room number', () => {
        expect(booking.roomNumber).to.equal(sampleBookingsData[0].roomNumber);
    });

    it('Should store room service charges', () => {
        expect(booking.roomServiceCharges).to.eql(sampleBookingsData[0].roomServiceCharges);
    });

    it('Should have a method that can add to room service charges', () => {
        booking.addToRoomServiceCharges(35.5)
        expect(booking.roomServiceCharges).to.eql([35.5]);
    });

    it('Should have a method that can return room service charges', () => {

        // Why is this starting with 35.5???
        // I thought each it block was like starging over and thqt previous values pushed in would not be there when you start the next it block

        booking.addToRoomServiceCharges(41)
        let roomServiceCharges = booking.returnRoomServiceCharges()
        expect(roomServiceCharges).to.eql(76.5);
    });

});