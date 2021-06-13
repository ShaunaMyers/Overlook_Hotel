import './images/residential-suite.jpg';
import './images/suite1.jpg';
import './images/single-room1.jpg';
import './images/junior-suite1.jpg';

let domUpdates = {

    displayAvailableRooms(customerSearch, hotel) {
      let roomsAvailable = hotel.checkIfRoomsAreAvailable(customerSearch);
      roomsAvailable.forEach(room => {
        let roomImage = this.assignRoomImage(room.roomType);
        console.log('room image', roomImage);
      })
    },

    assignRoomImage(roomType) {
       if (roomType === 'single room') {
         return './images/single-room1'
       } else if (roomType === 'residential suite') {
         return './images/residential-suite'
       } else if (roomType === 'suite') {
         return './images/suite1'
       } else {
         return './images/junior-suite1'
       }
    },


    // createCards(cookbook) {
    //     let recipeCollection;
    //     if (cookbook.recipes) {
    //         recipeCollection = cookbook.recipes
    //     } else {
    //         recipeCollection = cookbook;
    //         main.innerHTML = " ";
    //     }
    //     recipeCollection.forEach(recipe => {
    //         let recipes = [];
    //         let recipeInfo = new Recipe(recipe);
    //         let shortRecipeName = recipeInfo.name;
    //         recipes.push(recipeInfo);
    //         if (recipeInfo.name.length > 40) {
    //             shortRecipeName = recipeInfo.name.substring(0, 40) + "...";
    //         }
    //         this.addCardsToDom(recipeInfo, shortRecipeName)
    //     });
    // },
    //
    // addCardsToDom(recipeInfo, shortRecipeName) {
    //     let cardHtml = `
    //       <div class="recipe-card" id=${recipeInfo.id}>
    //         <h3 maxlength="40">${shortRecipeName}</h3>
    //         <div class="card-photo-container">
    //           <img src=${recipeInfo.image} class="card-photo-preview" alt="${recipeInfo.name} recipe" title="${recipeInfo.name} recipe">
    //           <div class="text">
    //             <div>Click for Instructions</div>
    //           </div>
    //         </div>
    //         <h4>${recipeInfo.tags[0]}</h4>
    //         <img src="../images/apple-logo-outline.png" alt="unfilled apple icon" class="card-apple-icon">
    //       </div>`
    //     main.insertAdjacentHTML("beforeend", cardHtml);
    // },


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
