const addCardBtn = document.querySelector(".card");
const container = document.querySelector(".container");
// const input = document.querySelector("input");
 const form = document.querySelector("form");
let count = 1;

addCardBtn.addEventListener("click", () => {
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.innerText = count++;
  container.append(newCard);
});

// let intervalCount = 0;
// const i = setInterval(() => {
//     if (intervalCount++ >= 100) {
//         clearInterval(i);
//     }
//     addCardBtn.click();
// }, 0)

// setTimeout(() => {
//   input.focus();
// }, 5000);

// setTimeout(() => {
//   input.blur();
// }, 10000);



// setTimeout(() => {
//     form.submit();
//     console.log("form sumitted");
// }, 5000)

setTimeout(() => {
  form.reset();
  console.log("form reset");
}, 5000);