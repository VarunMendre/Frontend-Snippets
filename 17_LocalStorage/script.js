// // Local Storage all operations

// // Set Item
// localStorage.setItem("name", "Varun");
// // Get Item
// const name = localStorage.getItem("name");
// console.log(name);

// // Remove Item
// localStorage.removeItem("name");

// // Clear all items
// localStorage.clear();

// // more things

// // Set Item with object
// const user = {
//   name: "Varun",
//   age: 30,
// };
// localStorage.setItem("user", JSON.stringify(user)); // Convert object to string before storing

// // Get Item and parse it back to object
// const storedUser = localStorage.getItem("user");
// const parsedUser = JSON.parse(storedUser);
// console.log(parsedUser);

// // Check if item exists
// if (localStorage.getItem("user")) {
//   console.log("User exists in local storage");
// } else {
//   console.log("User does not exist in local storage");
// }

// /**
//  *
//  * Accessing undefined keys:
//  *
//  * localStorage.age returns undefined if not set
//  * localStorage.getItem("age") returns null if not set
//  */

// const input = document.querySelector(".my-name");
// const infoTag = document.querySelector(".infoTag");

// infoTag.innerText = localStorage.getItem("name") || "Welcome to Local Storage!"; // Display stored name or default message

// input.addEventListener("input", (e) => {
//     localStorage.setItem("name", e.target.value); // This will set the name in local storage as user types
//     infoTag.innerText = e.target.value; // Update the info tag with the current input value
// });


