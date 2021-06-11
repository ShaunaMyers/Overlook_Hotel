// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import apiCalls from './apiCalls';
import Customer from './Classes/Customer';
import Hotel from './Classes/Hotel';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

let customer, hotel;


window.onload = onStartUp()

function onStartUp() {
    apiCalls.getData()
        .then((promise) => {
            customer = new Customer(promise[0].customers[(Math.floor(Math.random() * promise[0].customers.length) + 1)]);
            console.log("CUSTOMER", customer);

            hotel = new Hotel(promise[2].rooms, promise[1].bookings, promise[0].customers);
            // generateAllInfo();
            console.log("HOTEL", hotel);
        })
}
