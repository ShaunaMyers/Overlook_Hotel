import { expect } from 'chai';
import Customer from '../src/Classes/Customer';
import sampleCustomerData from '../src/data/sampleCustomerData';
import sampleBookingsData from '../src/data/sampleBookingsData';

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

    it('Should start with a total spent of zero', () => {
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

    it('Should contain a method that adds a booking to currentBookings', () => {
        customer1.addToCurrentBookings(sampleBookingsData[0]);
        customer2.addToCurrentBookings(sampleBookingsData[4]);
        expect(customer1.currentBookings).to.eql([sampleBookingsData[0]]);
        expect(customer2.currentBookings).to.eql([sampleBookingsData[4]])
    });

    it('Should not be able to add the same booking more than once', () => {
        customer1.addToCurrentBookings(sampleBookingsData[0]);
        customer1.addToCurrentBookings(sampleBookingsData[0]);
        expect(customer1.currentBookings).to.eql([sampleBookingsData[0]])
    });

    it('Should contain a method that adds a booking to completed bookings', () => {
        customer1.addToCompletedBookings(sampleBookingsData[0]);
        customer2.addToCompletedBookings(sampleBookingsData[4]);
        expect(customer1.completedBookings).to.eql([sampleBookingsData[0]]);
        expect(customer2.completedBookings).to.eql([sampleBookingsData[4]]);
    });

    it('Should not be able to complete the same booking more than once', () => {
        customer1.addToCompletedBookings(sampleBookingsData[0]);
        customer1.addToCompletedBookings(sampleBookingsData[0]);
        expect(customer1.completedBookings).to.eql([sampleBookingsData[0]])
    });

    it('Should contain a method that adds a booking to upcoming bookings', () => {
        customer1.addToUpcomingBookings(sampleBookingsData[0]);
        customer2.addToUpcomingBookings(sampleBookingsData[4]);
        expect(customer1.upcomingBookings).to.eql([sampleBookingsData[0]]);
        expect(customer2.upcomingBookings).to.eql([sampleBookingsData[4]])
    });

    it('Should not be able to add the same upcoming booking more than once', () => {
        customer1.addToUpcomingBookings(sampleBookingsData[0]);
        customer1.addToUpcomingBookings(sampleBookingsData[0]);
        expect(customer1.upcomingBookings).to.eql([sampleBookingsData[0]])
    });

    it('Should return all bookings from the past, present, and future', () => {
        customer1.addToCompletedBookings(sampleBookingsData[0]);
        customer1.addToCurrentBookings(sampleBookingsData[2]);
        customer1.addToUpcomingBookings(sampleBookingsData[3]);

        const allBookings = customer1.returnAllBookings();

        expect(allBookings).to.eql({ completedBookings: [sampleBookingsData[0]], currentBookings: [sampleBookingsData[2]], upcomingBookings: [sampleBookingsData[3]] })
    })

})