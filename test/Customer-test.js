import { expect } from 'chai';
import Customer from '../src/Classes/Customer';
import sampleCustomerData from '../src/data/sampleCustomerData';
import sampleBookingsData from '../src/data/sampleBookingsData';
import sampleRoomsData from '../src/data/sampleRoomsData';

describe('Customer Class', () => {

    let customer1, customer2;

    beforeEach(() => {

        customer1 = new Customer(sampleCustomerData[0]);
        customer2 = new Customer(sampleCustomerData[2])

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

    it('Should return all bookings from the past, present, and future', () => {
        customer1.addToCompletedBookings(sampleBookingsData[0], sampleRoomsData[4]);
        customer1.addToCurrentBookings(sampleBookingsData[2]);
        customer1.addToUpcomingBookings(sampleBookingsData[3]);

        const allBookings = customer1.returnAllBookings();

        expect(allBookings).to.eql({ completedBookings: [sampleBookingsData[0]], currentBookings: [sampleBookingsData[2]], upcomingBookings: [sampleBookingsData[3]] })
    });

    it('Should return an empty array when the Customer has no bookings in that specific property', () => {
        customer1.addToCurrentBookings(sampleBookingsData[2]);
        customer1.addToUpcomingBookings(sampleBookingsData[3]);

        const allBookings = customer1.returnAllBookings();

        expect(allBookings).to.eql({ completedBookings: [], currentBookings: [sampleBookingsData[2]], upcomingBookings: [sampleBookingsData[3]] })
    })

})
