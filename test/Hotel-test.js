import { expect } from 'chai';
import Hotel from '../src/Classes/Hotel';
// import sampleCustomerData from '../src/data/;sampleCustomerData';
import sampleBookingsData from '../src/data/sampleBookingsData';
import sampleRoomsData from '../src/data/sampleRoomsData';

describe.only('Hotel Class', () => {

    let hotel;

    beforeEach(() => {

        hotel = new Hotel();

    });

    it('Should be a function', () => {
        expect(Hotel).to.be.a('function');
    });

    it('Should be an instance of Hotel', () => {
        expect(hotel).to.be.an.instanceOf(Hotel);
    });

});
