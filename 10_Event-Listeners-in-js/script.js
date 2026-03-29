// const h1 = document.querySelector('h1');
// const card = document.querySelector('.add-card');
// h1.onclick = function () {
//     alert('You clicked the heading!');
// }

// all .addEventListener() does is it adds a new event listener to the element,
//  without removing any existing ones. So you can have multiple event  listeners for the same event on the same element, and they will all be executed when that event occurs.

// All Types of Events

// h1.addEventListener('click', function () {
//     alert('You clicked the heading!');
// });

// card.addEventListener('click', function () {
//     alert('You clicked the card!');
// });

// h1.addEventListener('mouseover', function () {
//     h1.style.color = 'red';
// });

// h1.addEventListener('mouseout', function () {
//     h1.style.color = 'black';
// });

// h1.addEventListener('dblclick', function () {
//     alert('You double-clicked the heading!');
// });

// h1.addEventListener('contextmenu', function (event) {
//     event.preventDefault(); // Prevent the default context menu from appearing
//     alert('You right-clicked the heading!');
// });

// h1.addEventListener('keydown', function (event) {
//     if (event.key === 'Enter') {
//         alert('You pressed the Enter key while focusing on the heading!');
//     }
// });

// h1.addEventListener('focus', function () {
//     h1.style.backgroundColor = 'yellow';
// });

// h1.addEventListener('blur', function () {
//     h1.style.backgroundColor = '';
// });

const container = document.querySelector(".container");
const card = document.querySelector(".add-card");
const card2 = document.querySelector(".remove-card");

card.addEventListener("click", () => {
  const newCard = document.createElement("div");

  newCard.classList.add("card");
  newCard.textContent = container.children.length - 1;

  container.append(newCard);
});

card2.addEventListener("click", () => {
  if (container.children.length > 2) {
    container.removeChild(container.lastElementChild);
  }
});
