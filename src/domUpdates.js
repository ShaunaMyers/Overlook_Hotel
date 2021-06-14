
let greetingContainer = document.querySelector('#greetingContainer');
// let greetingContainer = document.querySelector('#greetingContainer');
// let userAccountContainer = document.querySelector('#userAccountContainer');
// let headerGreeting = document.querySelector('#headerGreeting');

let domUpdates = {

    displayAvailableRooms(roomImage, roomName, roomNumber) {
      allRoomCards.insertAdjacentHTML('beforeend', `
      <section class="room-card" id="${roomNumber}">
        <img src="${roomImage}"
          alt="gorgeous airy well lit treehouse room with a rainforest view">
        <h2 class="treehouse-name" id="treehouseName">${roomName}</h2>
        <button class="right-arrow-btn" id="treehouseDetails">
          <img src="./images/right-arrow.svg"
            alt=" right arrow image implying that you will navigate to the next screen">
        </button>
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
      let customerAccountInfo = document.getElementById('customerAccount');
      customerAccountInfo.classList.toggle('hidden');
      customerAccountInfo.innerHTML += `
      <p>Total Spent: $${customer.returnTotalSpent().toFixed(2)}</p>
      `;

    },

    displayUpcomingBookings(upcomingBookings, hotel) {
      let customerAccountInfo = document.getElementById('customerAccount');

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
      let customerAccountInfo = document.getElementById('customerAccount');

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
      let customerAccountInfo = document.getElementById('customerAccount');

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
    // 
    // displayFilterSelections() {
    //   let formElement = document.getElementById('searchAllAvailability');
    //   formElement.innerHTML += `
    //   <label for="searchByRoomType">Room Type</label>
    //   <input id="searchByRoomType" type="checkbox">
    //   <label for="searchByNumBeds">Number of Beds</label>
    //   <input id="searchByNumBeds" type="checkbox">
    //   <label for="searchByRoomType">Search Available Accomodations By Date</label>
    //   <input id="searchByRoomType" type="checkbox">
    //   `
    // },

    displayTreehouseDetails() {
      console.log("HI");
    },

    // changeHiddenViews() {
    //   for (var i = 0; i < arguments.length; i++) {
    //     arguments[i].classList.toggle('hidden');
    //   }
    // }

}

export default domUpdates;
