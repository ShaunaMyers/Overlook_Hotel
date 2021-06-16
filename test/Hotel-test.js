import { expect } from 'chai';
import Hotel from '../src/Classes/Hotel';
import sampleCustomerData from '../src/data/sampleCustomerData';
import sampleBookingsData from '../src/data/sampleBookingsData';
import sampleRoomsData from '../src/data/sampleRoomsData';

describe('Hotel Class', () => {

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

    it('Should store a list of all guests the hotel has had or will have', () => {
        expect(hotel.allGuests).to.eql(sampleCustomerData);
    });

    it('Should start with all of its rooms available', () => {
        expect(hotel.roomsAvailable).to.eql([]);
    });

    it('Should return only the rooms available when a customer searches for a specific date', () => {
        const availableRooms = hotel.filterAvailableRooms({ date: "2022/01/24" });
        expect(availableRooms).to.eql([
          {
              "number": 666,
              "roomType": "residential suite",
              "bidet": true,
              "bedSize": "queen",
              "numBeds": 1,
              "costPerNight": 358.4
          },
          {
              "number": 24,
              "roomType": "suite",
              "bidet": false,
              "bedSize": "full",
              "numBeds": 2,
              "costPerNight": 477.38
          },
          {
              "number": 12,
              "roomType": "single room",
              "bidet": false,
              "bedSize": "king",
              "numBeds": 1,
              "costPerNight": 491.14
          },
          {
              "number": 7,
              "roomType": "single room",
              "bidet": false,
              "bedSize": "queen",
              "numBeds": 1,
              "costPerNight": 429.44
          },
          {
              "number": 15,
              "roomType": "single room",
              "bidet": true,
              "bedSize": "queen",
              "numBeds": 2,
              "costPerNight": 340.17
          }
        ])
    });

    it('Should contain a method that returns rooms available when a specific room type is selected on a specific date', () => {
        const availableRooms = hotel.filterAvailableRooms({ date: "2022/01/24", roomType: 'residential suite' });
        expect(availableRooms).to.eql([
            {
                number: 666,
                roomType: 'residential suite',
                bidet: true,
                bedSize: 'queen',
                numBeds: 1,
                costPerNight: 358.4
            },
        ])
    });

    it('Should contain a method that offers a fierce apology message when no rooms are available', () => {
        const availableRooms = hotel.filterAvailableRooms({ date: "2020/01/24", roomType: 'residential suite', numBeds: 2, bedSize: 'king', costPerNight: 400 });
        expect(availableRooms).to.eql('We are very sorry...it looks like we have no rooms available that fit your search selections. We would love to host you, though, so please try your search using different selections.')
    });

    it('Should contain a method that returns the cost of a room when a customer inquires', () => {
        const roomCost = hotel.returnPriceOfRoom(24);

        expect(roomCost).to.equal(477.38);
    });
});
