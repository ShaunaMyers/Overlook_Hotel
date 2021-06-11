// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import './apiCalls';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

let customer, hotel, bookings, rooms;


window.onload = onStartUp()

function onStartUp() {
    apiCalls.getData()
        .then((promise) => {

            customer = new Customer(promise[0][(Math.floor(Math.random() * promise[0].length) + 1)]);
            ingredientsData = promise[1];
            cookbook = new Cookbook(promise[2], promise[1]);
            pantryInfo = new Pantry(user.pantry)
            generateAllInfo();
        })
}
