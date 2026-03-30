// usernameInput.addEventListener("click", (event) => {
// //   const username = event.target.value;
//   console.log(" Username input clicked!");
//   console.log(event);
// });

// usernameInput.addEventListener("input", (event) => {
//   paragraph.innerText = `Username: ${event.target.value}`;
// });

// usernameInput.addEventListener("change", (event) => {
//     paragraph.innerText = `Username: ${event.target.value}`;
//     event.target.value = "";
// });

// usernameInput.addEventListener("focus", (event) => {
//     paragraph.innerText = `Username: ${event.target.value}`;
//     event.target.value = "";
// });

// usernameInput.addEventListener("blur", (event) => {
//     paragraph.innerText = `Username: ${event.target.value}`;
//     event.target.value = "";
// });

// const usernameInput = document.querySelector("#username");
// const emailInput = document.querySelector("#email");
// const paragraph = document.querySelector("p");
const form = document.querySelector("form");

form.addEventListener("click", (e) => {
  e.preventDefault();

    // const myFormData = new FormData(form);
  
    // for (const p of myFormData.entries()) {
    //     console.log(p[0], p[1]);
    // }

    console.log(e.target);// logs the element that triggered the event, in this case the form or any field within the form that was submitted
    console.log(e.currentTarget); // logs the element that the event listener is attached to, in this case the form itself

});



