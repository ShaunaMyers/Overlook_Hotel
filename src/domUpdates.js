
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

    displayUserAccount(customer, bookings) {
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

      let allBookings = customer.returnAllBookings(bookings);
      console.log('Cust Bookings', allBookings);
      this.displayCustomerBookingInfo(allBookings);
    },

    displayCustomerBookingInfo(allBookings) {
      let customerAccountInfo = document.getElementById('customerAccount');
      customerAccountInfo.classList.remove('hidden');
      customerAccountInfo.innerHTML = `
        
      `
      // completedBookings: Array(18)
            // 0:
            // date: "2020/01/23"
            // id: "5fwrgu4i7k55hl6tp"
            // roomNumber: 22
            // roomServiceCharges: []
            // userID: 48

    }

    returnToHomeView(customerName) {
      this.greetCustomer(customerName);
      document.getElementById('resortCard').classList.toggle('hidden');
      document.getElementById('allRoomCards').classList.toggle('hidden');
    },

    displayTreehouseDetails() {
      console.log("HI");
    },

    changeHiddenViews() {
      for (var i = 0; i < arguments.length; i++) {
        arguments[i].classList.toggle('hidden');
      }
    }

}

export default domUpdates;
