const h1 = document.querySelector("h1");
const container = document.querySelector(".container");
// const img = document.querySelector("img");

// const url =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
// for (let i = 1; i <= 100; i++) {
//   const newImg = img.cloneNode();
//   newImg.src = `${url}${i}.png`;
//   container.appendChild(newImg);
// }

const para = document.createElement("p");
// para.textContent = "This is a new paragraph created using JavaScript.";
// container.appendChild(para);

// para.classList.add("new-paragraph");
// para.id = "unique-paragraph";
// h1.innerText = "Updated Heading";

const url =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 1000; i++) {
  const divTag = document.createElement("div");
  const image = document.createElement("img");
  const para = document.createElement("p");

  image.src = `${url}${i}.png`;

  divTag.classList.add("pokemon-card");
  
  para.textContent = `${i}`;
  
  divTag.append(image, para);
  container.appendChild(divTag);
}
