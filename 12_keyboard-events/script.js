const h1 = document.querySelector("h1");
const input = document.querySelector("input");

// key press event is triggered when a key is pressed down
// h1.addEventListener("keypress", (e) => {
//   console.log("Key Pressed: ", e.key);
// });

// input.addEventListener("keypress", (e) => {
//   console.log("Key Pressed: ", e.key);
// });

// key down event is triggered when a key is pressed down

// h1.addEventListener("keydown", (e) => {
//   console.log("Key Down: ", e.key);
// });

// input.addEventListener("keydown", (e) => {
//   // e.key gives the name of the key that was pressed
//   console.log("Key Down: ", e.key);
// });

// // key up event is triggered when a key is released

// h1.addEventListener("keyup", (e) => {
//   console.log("Key Up: ", e.key);
// });

// input.addEventListener("keyup", (e) => {
//   console.log("Key Up: ", e.key);
// });



// key press event is triggered when a key is pressed down
// only shift button will be not detected in key press event because it is a modifier key and does not produce a character value
// window.addEventListener("keypress", (e) => {
//   console.log('Key Code: ', e.keyCode);
//   console.log('Key Value: ', e.code);
// } );


// work with all keys including modifier keys like shift, ctrl, alt, etc
// window.addEventListener("keyup", (e) => {
//   console.log("Key Code: ", e.keyCode);
//   console.log("Key Value: ", e.code);
// });


// key press event is triggered when a key is pressed down
// only shift button will be not detected in key press event because it is a modifier key and does not produce a character value
// window.addEventListener("keypress", (e) => {
//   console.log("Key Code: ", e.keyCode);
//   console.log("Key Value: ", e.code);
// });


// key down event is triggered when a key is pressed down
// work with all keys including modifier keys like shift, ctrl, alt, etc
window.addEventListener("keydown", (e) => {
  console.log("Key Code: ", e.keyCode);
  console.log("Key Value: ", e.code);
});


