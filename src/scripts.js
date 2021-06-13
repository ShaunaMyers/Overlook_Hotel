// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/index.scss';
import dayjs from 'dayjs';
import apiCalls from './apiCalls';
import Customer from './Classes/Customer';
import Hotel from './Classes/Hotel';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import './images/mouldy-mango-resort.jpg';
import './images/queen-room2.jpg';
import './images/right-arrow.svg';
import './images/left-arrow.svg';

// variables
let searchByDateField = document.querySelector('#searchByDate');
let customer, hotel;

// event listeners
searchByDateField.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        evaluateDateChosen(searchByDate.value);
    }
})

window.onload = onStartUp()

function onStartUp() {
    apiCalls.getData()
        .then((promise) => {
            customer = new Customer(promise[0].customers[(Math.floor(Math.random() * promise[0].customers.length) + 1)]);
            hotel = new Hotel(promise[2].rooms, promise[1].bookings, promise[0].customers);
            // generateAllInfo();
        })
};

function evaluateDateChosen(value) {
    console.log(value);
    let searchDate = new Date(value);
    console.log(searchDate);
    console.log(Date.day());
    // api date format "2020/01/24",
}
