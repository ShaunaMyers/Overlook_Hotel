
let customerAccountInfo = document.getElementById('customerAccount');
let greetingContainer = document.getElementById('greetingContainer');
let treeHouseName = document.getElementById('treeHouseName');
let cardBedSize = document.getElementById('bedSize');
let numberBeds = document.getElementById('numberBeds');
let cardRoomType = document.getElementById('roomType');
let roomPrice = document.getElementById('roomPrice');


let domUpdates = {

    clearAllRoomCards() {
      allRoomCards.innerHTML = ' ';
    },

    displayAvailableRooms(roomImage, roomName, roomNumber) {
      allRoomCards.insertAdjacentHTML('beforeend', `
      <section class="room-card" id="${roomNumber}">
        <img src="${roomImage}"
          alt="gorgeous airy well lit treehouse room with a rainforest view">
        <h2 class="treehouse-name" id="treehouseName">${roomName}</h2>
        <button class="treehouse-details" id="treehouseDetails">Treehouse Details</button>
      </section>
      `)
    },

    greetCustomer(customerName) {
      headerGreeting.innerHTML = `
      <div id="greetingContainer">
        <h2 id="greetingName">Hey ${customerName},</h2>
        <h2>We think you're ready to select your dream stay among the trees!</h2>
      </div>
      <nav>
        <button class="user-img-btn" id="userImgBtn" type="button" name="button">
          <img class="user-img" src="./images/user-account.svg" alt="image of the outline of human's head and shoulders">
          <p class="my-account">My Account</p>
        </button>
      </nav>
      `
    },

    displayTreehouseDetails() {
      console.log("HI");
    },

    displayUserAccount(customer, hotel) {
      document.getElementById('resortCard').classList.toggle('hidden');
      document.getElementById('allRoomCards').classList.toggle('hidden');
      let userAccountHeader = `
      <section class="header-greeting">
        <div id="greetingContainer">
          <h2 id="greetingName">Your Account</h2>
        </div>
        <nav>
          <button class="return-home" id="returnHome" type="button" name="button">
            Return Home
          </button>
        </nav>
      </section>
      `
      document.querySelector(".header-greeting").innerHTML = userAccountHeader;

      let allBookings = customer.returnAllBookings(hotel);
        console.log('all bookings', allBookings);
      this.displayCustomerBookingInfo(allBookings, hotel, customer);
    },

    displayCustomerBookingInfo(allBookings, hotel, customer) {
      this.displayTotalSpent(customer);

      this.displayUpcomingBookings(allBookings.upcomingBookings, hotel);

      if (allBookings.currentBookings.length) {
        this.displayCurrentBookings(allBookings.currentBookings, hotel);
      }

      if (allBookings.completedBookings.length) {
        this.displayCompletedBookings(allBookings.completedBookings, hotel);
      }
    },

    displayTotalSpent(customer) {
      customerAccountInfo.classList.toggle('hidden');
      customerAccountInfo.innerHTML += `
      <p>Total Spent: $${customer.returnTotalSpent().toFixed(2)}</p>
      `;

    },

    displayUpcomingBookings(upcomingBookings, hotel) {
      customerAccountInfo.innerHTML += `<h4>Your Upcoming Bookings</h4>`;
      if (!upcomingBookings.length) {
         customerAccountInfo.innerHTML += `<h5>You have no upcoming bookings. Time to make a reservation!</h5>`;
      } else {
        upcomingBookings.forEach(booking => {
          customerAccountInfo.innerHTML += `
          <ul>
          <li>${booking.date}</li>
          <li>${booking.roomNumber}</li>
          <li>${hotel.returnPriceOfRoom(booking.roomNumber)}</li>
          </ul>
          `
        });
      }
    },

    displayCurrentBookings(currentBookings, hotel) {
      customerAccountInfo.innerHTML += `<h4>Your Current Bookings</h4>`;
      currentBookings.forEach(booking => {
        customerAccountInfo.innerHTML += `
        <ul>
        <li>${booking.date}</li>
        <li>${booking.roomNumber}</li>
        <li>${hotel.returnPriceOfRoom(booking.roomNumber)}</li>
        </ul>
        `
      });
    },

    displayCompletedBookings(completedBookings, hotel) {
      customerAccountInfo.innerHTML += `<h4>Your Completed Bookings</h4>`;
      completedBookings.forEach(booking => {
        customerAccountInfo.innerHTML += `
        <ul>
        <li>Date: ${booking.date}</li>
        <li>Room Number: ${booking.roomNumber}</li>
        <li>Cost Per Night: ${hotel.returnPriceOfRoom(booking.roomNumber)}</li>
        </ul>
        `
      });
    },

    returnToHomeView(customerName) {
      this.greetCustomer(customerName);
      document.getElementById('resortCard').classList.toggle('hidden');
      document.getElementById('allRoomCards').classList.toggle('hidden');
      document.getElementById('customerAccount').classList.toggle('hidden');

    },

    displayFilterSelections() {
      resortCard.innerHTML += `<p class="room-type-heading">Filter Results By Room Type</p>
      <section class="filter-rooms-choices" id="filterRoomsChoices">
          <div class="checkboxes">
            <input type="checkbox" id="residentialSuite" name="roomType">
            <label for="residentialSuite">Residential Suite</label>
            <input type="checkbox" id="juniorSuite" name="roomType">
            <label for="juniorSuite">Junior Suite</label>
          </div>
          <div class="checkboxes">
            <input type="checkbox" id="suite" name="roomType">
            <label for="suite">Suite</label>
            <input type="checkbox" id="singleRoom" name="roomType">
            <label for="singleRoom">Single Room</label>
          </div>
      </section>
      `
    },

    displayTreehouseDetails(roomDetails) {
      let { roomImage, roomName, bedSize, numBeds, roomType, roomCost } = roomDetails
      allRoomCards.classList.add('hidden');
      roomCardDetails.classList.remove('hidden');
      document.getElementById('innerRoomCardDetails').insertAdjacentHTML(`afterbegin`,
      `
      <img src="${roomImage}"
        alt="gorgeous airy well lit treehouse room with 2 queen beds and a view of the ocean">
      `);
      treeHouseName.innerText = roomName;
      cardBedSize.innerText = bedSize;
      numberBeds.innerText = numBeds;
      cardRoomType.innerText = roomType;
      roomPrice.innerText = roomCost;


    },

    displayErrorMessage() {
      console.log('HEYOOOO');
    }

    // changeHiddenViews() {
    //   for (var i = 0; i < arguments.length; i++) {
    //     arguments[i].classList.toggle('hidden');
    //   }
    // }

}

export default domUpdates;
