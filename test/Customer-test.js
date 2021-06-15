import { expect } from 'chai';
import Customer from '../src/Classes/Customer';
import Hotel from '../src/Classes/Hotel';
import sampleCustomerData from '../src/data/sampleCustomerData';
import sampleBookingsData from '../src/data/sampleBookingsData';
import sampleRoomsData from '../src/data/sampleRoomsData';

describe('Customer Class', () => {

    let customer1, customer2, hotel;

    beforeEach(() => {

        customer1 = new Customer(sampleCustomerData[0]);
        customer2 = new Customer(sampleCustomerData[2]);
        hotel = new Hotel(sampleRoomsData, sampleBookingsData, sampleCustomerData);

    });

    it('Should be a function', () => {
        expect(Customer).to.be.a('function');
    });

    it('Should be an instance of Customer', () => {
        expect(customer1).to.be.an.instanceOf(Customer);
    });


    it('Should contain an id property', () => {
        expect(customer1.id).to.equal(sampleCustomerData[0].id);
        expect(customer2.id).to.equal(sampleCustomerData[2].id);
    });

    it('Should contain a name property', () => {
        expect(customer1.name).to.equal(sampleCustomerData[0].name);
        expect(customer2.name).to.equal(sampleCustomerData[2].name);
    });

    it('Should start with a total spent of 0', () => {
        expect(customer1.totalSpent).to.equal(0);
    });

    it('Should start with no completed bookings', () => {
        expect(customer1.completedBookings).to.eql([]);
        expect(customer2.completedBookings).to.eql([]);
    });

    it('Should start with no current bookings', () => {
        expect(customer1.completedBookings).to.eql([]);
        expect(customer2.completedBookings).to.eql([]);
    });

    it('Should start with no upcoming bookings', () => {
        expect(customer1.completedBookings).to.eql([]);
        expect(customer2.completedBookings).to.eql([]);
    });

    it('Should contain a method that returns all bookings from the past, present, and future', () => {
        const allBookings = customer1.returnAllBookings(hotel);

        expect(allBookings).to.eql({
  completedBookings: [
    {
      id: '5fwrgu4i7k55hl6t8',
      userID: 1,
      date: '2020/02/05',
      roomNumber: 12,
      roomServiceCharges: []
    }
  ],
  currentBookings: [],
  upcomingBookings: [
    {
      id: '5fwrgu4i7k55hl6t5',
      userID: 1,
      date: '2021/12/31',
      roomNumber: 24,
      roomServiceCharges: []
    }
  ]
})
    });

    it('Should return an empty array when the Customer has no bookings in that specific property', () => {
        const allBookings = customer1.returnAllBookings(hotel);

        expect(customer1.currentBookings).to.eql([])
    });

    it('Should contain a method that updates total spent when customer completes bookings', () => {
      customer1.returnAllBookings(hotel);

      expect(customer1.totalSpent).to.equal(491.14)
    });

    it('Should contain a method that keeps track of the current room the customer is looking at booking', () => {
      customer2.updateCurrentRoomSearched(24);

      expect(customer2.currentRoomSearched).to.equal(24);
    });

    it('Should contain a method that returns the total a customer has spent', () => {
      customer1.returnAllBookings(hotel);
      const totalSpentAtHotel = customer1.returnTotalSpent();

      expect(totalSpentAtHotel).to.equal(491.14);
    });

})
