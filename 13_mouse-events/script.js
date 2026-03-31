const h1 = document.querySelector("h1");
const card = document.querySelector(".card");
const container = document.querySelector(".container");

let count = 0;

// card.addEventListener('click', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// all mouse events : mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave

// click : when mouse button is clicked (pressed and released) on an element
// mousedown : when mouse button is pressed down
// mouseup : when mouse button is released
// mousemove : when mouse is moved
// mouseover : when mouse is over the element or any of its children
// mouseout : when mouse is out of the element or any of its children

// card.addEventListener('mousedown', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// card.addEventListener('mouseup', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// card.addEventListener('mousemove', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// card.addEventListener('mouseover', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// card.addEventListener('mouseout', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// difference between mouseover and mouseenter :
// over means mouse is over the element or any of its children, enter means mouse is over the element only

// card.addEventListener('mouseenter', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// difference between mouseout and mouseleave :
// out means mouse is out of the element or any of its children, leave means mouse is out of the element only

// card.addEventListener('mouseleave', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// more events :

// scroll info : when an element is scrolled, it fires a scroll event. It can be used to implement infinite scrolling, lazy loading, etc.

// card.addEventListener('scroll', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// wheel info : when the mouse wheel is scrolled, it fires a wheel event. It can be used to implement custom scrolling, zooming, etc.
// card.addEventListener('wheel', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// touch events : when a touch screen is touched, it fires touch events.
//  It can be used to implement touch interactions, gestures, etc. but only on mobile devices

// card.addEventListener("touchstart", () => {
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// card.addEventListener("touchend", () => {
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// touchmove : when a touch point is moved along the surface of the device, it fires a touchmove event.
//  It can be used to implement custom touch interactions, gestures, etc. but only on mobile devices

// card.addEventListener("touchmove", () => {
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });


// drag events : when an element is dragged, it fires drag events. It can be used to implement drag and drop functionality, etc.

// h1.addEventListener("drag", () => {
//   h1.style.color = "red";
// });


// pointer events : pointer events are a combination of mouse, touch and pen events.
//  It can be used to implement custom interactions, gestures, etc. on both desktop and mobile devices
// card.addEventListener("pointermove", () => {
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });


// all event that we learned : click, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, scroll, wheel, touchstart, touchend, touchmove, drag, pointermove