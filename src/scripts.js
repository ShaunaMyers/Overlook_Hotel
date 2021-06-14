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
import './images/residential-suite.jpg';
import './images/suite1.jpg';
import './images/single-room1.jpg';
import './images/junior-suite1.jpg';
import './images/bed.svg';
import './images/user-account.svg';

// variables
let allRoomCards = document.querySelector('#allRoomCards');
let searchByDateField = document.querySelector('#searchByDate');
let roomCardDetails = document.querySelector('#roomCardDetails');
let userAccountBtn = document.querySelector('#userImgBtn');
// let treeHouseDetailsBtn = document.querySelector('#treehouseDetails');

let customer, hotel;
// event listeners

userAccountBtn.addEventListener('click', function() {
  domUpdates.displayUserAccount(customer, hotel.allReservations);
});

allRoomCards.addEventListener('click', function(event) {
  getRoomDetails(event);
})

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
            // findRoomDetails();
            domUpdates.greetCustomer(customer.name);
        })
};

function evaluateDateChosen(value) {
    let searchedDate = [value.slice(0, 4), value.slice(5, 7), value.slice(8)].join('/');
    let customerSearch = { date: searchedDate }
    findRoomDetails(customerSearch);
}

function findRoomDetails(date) {
  let roomsAvailable;
  if (date) {
    roomsAvailable = hotel.checkIfRoomsAreAvailable(date);
  } else {
    roomsAvailable = hotel.allRooms;
  }
  roomsAvailable.forEach(room => {
    let roomImage = findRoomImage(room.roomType);
    let roomName = findRoomName(room.number);
    let roomNumber = room.number;
    domUpdates.displayAvailableRooms(roomImage, roomName, roomNumber);
  })
}

function findRoomImage(roomType) {
   if (roomType === 'single room') {
     return './images/single-room1.jpg'
   } else if (roomType === 'residential suite') {
     return './images/residential-suite.jpg'
   } else if (roomType === 'suite') {
     return './images/suite1.jpg'
   } else {
     return './images/junior-suite1.jpg'
   }
}

function findRoomName(roomNumber) {
  if ( [1, 6, 12, 21].includes(roomNumber)) {
    return "Treetop Dream Den"
  } else if ( [2, 7, 13, 22].includes(roomNumber)) {
    return "Wind Kissed Nest"
  } else if ( [3, 8, 14, 23].includes(roomNumber)) {
    return "Lover's Rainforest Cabana"
  } else if ( [4, 9, 15, 24].includes(roomNumber)) {
    return "Tropical Tree Lair"
  } else {
    return "Magical Tree Fort"
  }
}

function getRoomDetails(event) {
  if (event.target.closest('button'). id === 'treehouseDetails') {
    allRoomCards.classList.add('hidden');
    roomCardDetails.classList.remove('hidden');
    domUpdates.displayTreehouseDetails();
  }
}
