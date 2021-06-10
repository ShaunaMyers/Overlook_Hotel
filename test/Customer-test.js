import { expect } from 'chai';
import Customer from '../src/Classes/Customer';

describe('Customer Class', () => {

    let customer;

    beforeEach(() => {

        customer = new Customer();

    });

    it('Should be a function', () => {
        expect(Customer).to.be.a('function');
    })

})