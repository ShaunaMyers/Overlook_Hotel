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
let header = document.getElementById('headerGreeting');
let resortCard = document.getElementById('resortCard');
let bookTreehouseBtn = document.getElementById('bookTreehouseBtn');
let bookTreehouseInput = document.getElementById('chosenDate');

let customer, hotel;
let customerSearch = {};
// event listeners

header.addEventListener('click', function() {
  evaluateHeaderButton(event);
});


allRoomCards.addEventListener('click', function(event) {
  getRoomDetails(event);
});

searchByDateField.addEventListener('change', function () {
        evaluateDateforAllRooms(searchByDate.value);
        domUpdates.displayFilterSelections();
});

resortCard.addEventListener('change', function(event) {
    evaluateBoxChecked(event);
});

bookTreehouseBtn.addEventListener('click', function(event) {
  evaluateBookingDate(event);
  // sendBookingPostRequest(event);
})

window.onload = onStartUp()

function onStartUp() {
    apiCalls.getData()
        .then((promise) => {
            customer = new Customer(promise[0].customers[(Math.floor(Math.random() * promise[0].customers.length) + 1)]);
            hotel = new Hotel(promise[2].rooms, promise[1].bookings, promise[0].customers);
            findRoomAvailability();
            domUpdates.greetCustomer(customer.name);
        })
};

function evaluateHeaderButton(event) {
  if (event.target.closest('button').id === 'userImgBtn') {
    domUpdates.displayUserAccount(customer, hotel)
  } else if (event.target.closest('button').id === 'returnHome'){
    domUpdates.returnToHomeView(customer.name);
  }
}

function evaluateDateforAllRooms(value) {
    let searchedDate = [value.slice(0, 4), value.slice(5, 7), value.slice(8)].join('/');
    customerSearch = { date: searchedDate }
    findRoomAvailability();
}

function findRoomAvailability() {
  let roomsAvailable;
  if (customerSearch.date) {
    roomsAvailable = hotel.filterAvailableRooms(customerSearch);
  } else if (customerSearch.roomType){
    roomsAvailable = hotel.filterAvailableRooms(customerSearch);
  } else {
    roomsAvailable = hotel.allRooms;
  }

  typeof roomsAvailable === 'string' ? domUpdates.displayErrorMessage(roomsAvailable) : assignRoomDetails(roomsAvailable);
}

function assignRoomDetails(roomsAvailable) {
  domUpdates.clearAllRoomCards();
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
  if ( [1, 12, 21].includes(roomNumber)) {
    return "Treetop Dream Den"
  } else if ( [2, 7, 22].includes(roomNumber)) {
    return "Wind Kissed Nest"
  } else if ( [3, 8, 23].includes(roomNumber)) {
    return "Lover's Rainforest Cabana"
  } else if ( [4, 15, 24].includes(roomNumber)) {
    return "Tropical Tree Lair"
  } else if ( [6, 11, 18].includes(roomNumber)){
    return "Magical Tree Fort"
  } else  {
    return "Heavenly Hideaway"
  }
}


function evaluateBoxChecked(event) {
  if (event.target.closest('input').id === 'residentialSuite') {
    customerSearch.roomType = 'residential suite';
    findRoomAvailability();
  } else if (event.target.closest('input').id === 'juniorSuite') {
    customerSearch.roomType = 'junior suite';
    findRoomAvailability();
  } else if (event.target.closest('input').id === 'suite') {
    customerSearch.roomType = 'suite';
    findRoomAvailability();
  } else if (event.target.closest('input').id === 'singleRoom') {
    customerSearch.roomType = 'single room';
    findRoomAvailability();
  }
}

function getRoomDetails(event) {
  let roomNumber = parseInt(event.target.closest('section').id);
  let foundRoom = hotel.allRooms.find(room => room.number === roomNumber);
  let roomType = foundRoom.roomType;
  let roomImage = findRoomImage(roomType);
  let roomName = findRoomName(roomNumber);
  let bedSize = foundRoom.bedSize;
  let numBeds = foundRoom.numBeds;
  let roomCost = foundRoom.costPerNight;
  domUpdates.displayTreehouseDetails({roomImage, roomName, bedSize, numBeds, roomType, roomCost});
}

// Work on this function later
// Event is bubbling up and return view to homepage
function evaluateBookingDate(event) {
  if (event.target.closest('button').id === 'bookTreehouseBtn') {
    if (!bookTreehouseInput.value) {
      let message = 'Please enter a date so you can claim a dream tree as your own.'
      domUpdates.displayErrorMessage(message);
    } else {
      let bookingDate = bookTreeHouseInput.value;
      console.log('book treehouse date', bookingDate);
      domUpdates.displayBookingMessage(event);
    }
  }
}
