const addCardBtn = document.querySelector(".card");
const container = document.querySelector(".container");

let count = 1;

// not a good approach to remove the cards because it takes so much space in memory
// and it is not efficient to add event listener to each card, so we can use event delegation to handle the click event on the container instead of each card

// addCardBtn.addEventListener("click", () => {
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);

//   newCard.addEventListener("click", () => {
//     newCard.remove();
//   });
// });

addCardBtn.addEventListener("click", () => {
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.innerText = count++;
  container.append(newCard);
});

// now here we are using event delegation to handle the click event on the container instead of each card, so we don't need to add event listener to each card and it is more efficient and takes less space in memory
container.addEventListener("click", (e) => {
  if (e.target !== container) {
    e.target.remove();
  }
});

