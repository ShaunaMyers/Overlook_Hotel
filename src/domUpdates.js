
let customerAccountInfo = document.getElementById('customerAccount');
let greetingContainer = document.getElementById('greetingContainer');
let treeHouseName = document.getElementById('treeHouseName');
let cardBedSize = document.getElementById('bedSize');
let numberBeds = document.getElementById('numberBeds');
let cardRoomType = document.getElementById('roomType');
let roomPrice = document.getElementById('roomPrice');
let roomSelections = document.getElementById('roomSelections');


let domUpdates = {

     displayMainPage() {
       document.getElementById('loginPage').classList.add('hidden');
       document.getElementById('headerGreeting').classList.remove('hidden');
       document.getElementById('mainElement').classList.add('hide-background-image');
       resortCard.classList.remove('hidden');
       allRoomCards.classList.remove('hidden');


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
      customerAccountInfo.innerHTML += `<h4 class="your-bookings-heading">Your Upcoming Bookings</h4>`;
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
      customerAccountInfo.innerHTML += `<h4 class="your-bookings-heading>Your Current Bookings</h4>`;
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
      customerAccountInfo.innerHTML += `<h4 class="your-bookings-heading>Your Completed Bookings</h4>`;
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
      document.getElementById('customerAccount').classList.add('hidden');
      document.getElementById('roomCardDetails').classList.add('hidden');

    },

    displayFilterSelections() {
      document.getElementById('roomCardDetails').classList.add('hidden');
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

    displaySearchErrorMessage(message) {
      document.getElementById('resortDescription').insertAdjacentHTML(`beforeend`, `<p class="booking-error-message">${message}</p>`)
    },

    displayBookingMessage(event) {
      document.getElementById('bookingForm').innerHTML = `
        <p> Congratulations, you've booked this room. We look forward to hosting you!</p>
        <!-- Wanted this button to work for proper UX but couldn't get the logic
        with the event bubbling right -->
        <!-- <button class="explore-more" id="exploreMoreTreehouses" type="button" name="button">Explore More Treehouses</button> -->
      `;
    },

    displayBookingErrorMessage(message) {
        document.getElementById('errorMessage2').innerHTML = `<p>Please enter a date so you can claim a dream tree as your own</p>`
    },

    clearBookingErrorMessage() {
      document.getElementById('errorMessage2').innerHTML = ' ';
    },

    displayLoginErrorMessage() {
      let loginErrorMessage = document.getElementById('loginErrorMessage')
      loginErrorMessage.innerHTML =`
        <p>Please enter the correct username and password.</p>
      `;
    }
}

export default domUpdates;
