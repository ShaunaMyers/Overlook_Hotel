import { expect } from 'chai';
import Hotel from '../src/Classes/Hotel';
import sampleCustomerData from '../src/data/sampleCustomerData';
import sampleBookingsData from '../src/data/sampleBookingsData';
import sampleRoomsData from '../src/data/sampleRoomsData';

describe.only('Hotel Class', () => {

    let hotel, customer;

    beforeEach(() => {

        hotel = new Hotel(sampleRoomsData, sampleBookingsData, sampleCustomerData);
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

    it('Should store all of the reservations for the hotel: past, present, and future.', () => {
        expect(hotel.allReservations).to.eql(sampleBookingsData);
    });

    it('Should start with all of its rooms available', () => {
        expect(hotel.roomsAvailable).to.eql([]);
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

    it('Should be able to reserve a room for a customer', () => {
        hotel.addToUpcomingReservations({ customerInfo: sampleCustomerData[5], bookingInfo: sampleBookingsData[1], roomInfo: sampleRoomsData[1] });
        expect(hotel.upcomingReservations).to.eql([{ customerInfo: sampleCustomerData[5], bookingInfo: sampleBookingsData[1], roomInfo: sampleRoomsData[1] }]);
    });

    it('Should return only the rooms available when a customer searches for a specific date', () => {
        const availableRooms = hotel.checkIfRoomsAreAvailable("2020/01/24");
        expect(availableRooms).to.eql([
            {
                number: 666,
                roomType: 'residential suite',
                bidet: true,
                bedSize: 'queen',
                numBeds: 1,
                costPerNight: 358.4
            },
            {
                number: 12,
                roomType: 'single room',
                bidet: false,
                bedSize: 'king',
                numBeds: 1,
                costPerNight: 491.14
            },
            {
                number: 7,
                roomType: 'single room',
                bidet: false,
                bedSize: 'queen',
                numBeds: 1,
                costPerNight: 429.44
            },
            {
                number: 15,
                roomType: 'single room',
                bidet: true,
                bedSize: 'queen',
                numBeds: 2,
                costPerNight: 340.17
            }
        ])
    });

    it('Should be able to check a customer into the hotel', () => {
        hotel.addToCurrentReservations({ customerInfo: sampleCustomerData[5], bookingInfo: sampleBookingsData[1], roomInfo: sampleRoomsData[1] });
        expect(hotel.currentReservations).to.eql([{ customerInfo: sampleCustomerData[5], bookingInfo: sampleBookingsData[1], roomInfo: sampleRoomsData[1] }]);
    });

    it('Should remove a reservation from the upcoming reservations when a customer is checked in', () => {
        hotel.addToCurrentReservations({ customerInfo: sampleCustomerData[5], bookingInfo: sampleBookingsData[1], roomInfo: sampleRoomsData[1] });
        expect(hotel.upcomingReservations).to.eql([]);
    })

    it('Should be able to check a customer out of the hotel', () => {
        hotel.addToCompletedReservations({ customerInfo: sampleCustomerData[5], bookingInfo: sampleBookingsData[1], roomInfo: sampleRoomsData[1] });
        expect(hotel.completedReservations).to.eql([{ customerInfo: sampleCustomerData[5], bookingInfo: sampleBookingsData[1], roomInfo: sampleRoomsData[1] }]);
    })

});
