const green = document.querySelector(".green");
const pink = document.querySelector(".pink");
const blue = document.querySelector(".blue");

// Event Bubbling
/**
 * if i click on blue then the event will be triggered for its all parent
 * 
 window
  ^
  |
document
  ^
  |
body
  ^
  |
green
  ^
  |
pink
  ^
  |
blue
 */

// window.addEventListener("click", (e) => {
//     e.stopPropagation();
//   console.log("6. Window Clicked");
// });

// document.addEventListener("click", (e) => {
//   console.log("5. Document Clicked");
// });

// document.body.addEventListener("click", (e) => {
//   console.log("4. Body Clicked");
// });

// green.addEventListener("click", (e) => {
//   console.log("3. Green Div Clicked");
// });

// pink.addEventListener("click", (e) => {
//   console.log("2. Pink Div Clicked");
// });

// blue.addEventListener("click", (e) => {
//   console.log("1. Blue Div Clicked");
// });

// Event Capturing
/**
 * if i click on blue then the event will be triggered for its all parent but in reverse order
 window -> document -> body -> green -> pink -> blue

window.addEventListener("click", (e) => {
    e.stopPropagation();
  console.log("6. Window Clicked");
}, true); // true for event capturing

document.addEventListener("click", (e) => {
  console.log("5. Document Clicked");
}, true); // true for event capturing

document.body.addEventListener("click", (e) => {
  console.log("4. Body Clicked");
}, true); // true for event capturing

green.addEventListener("click", (e) => {
  console.log("3. Green Div Clicked");
}, true); // true for event capturing

pink.addEventListener("click", (e) => {
  console.log("2. Pink Div Clicked");
}, true); // true for event capturing

blue.addEventListener("click", (e) => {
  console.log("1. Blue Div Clicked");
}, true); // true for event capturing
*/

// blue.addEventListener("click", (e) => {
//   console.log("1. Blue Div Clicked");
// }, {capture: true, once: true, }); // true for event capturing and once for one time event listener

