// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/index.scss';
import dayjs from 'dayjs';
import apiCalls from './apiCalls';
import Customer from './Classes/Customer';
import Hotel from './Classes/Hotel';
import domUpdates from './domUpdates';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import './images/mouldy-mango-resort.jpg';
import './images/queen-room2.jpg';
import './images/right-arrow.svg';
import './images/left-arrow.svg';
// import './images/residential-suite';
// import './images/suite1';
// import './images/single-room1';
// import './images/junior-suite1';

// variables
let searchByDateField = document.querySelector('#searchByDate');
let treeHouseDetailsBtn = document.querySelector('#treehouseDetails');
let customer, hotel;

// event listeners
// These room cards will be generated in the dom though so the buttons on these cards will utilize event bubbling
// treeHouseDetailsBtn.addEventListener('click', domUpdates.displayTreehouseDetails);
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
            console.log("CUSTOMER", customer);
            hotel = new Hotel(promise[2].rooms, promise[1].bookings, promise[0].customers);
            // generateAllInfo();
        })
};

function evaluateDateChosen(value) {
    let searchedDate = [value.slice(0, 4), value.slice(5, 7), value.slice(8)].join('/');
    let customerSearch = { date: searchedDate }
    domUpdates.displayAvailableRooms(customerSearch, hotel);
}
