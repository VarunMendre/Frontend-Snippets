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

const imgPath = document.querySelector("body > div > div:nth-child(5)");

// .removeChild Method

// removed 5th element
// imgPath.parentElement.removeChild(imgPath);

// .remove()

// imgPath.remove()

// If you've to remove an something make sure you won't store it in variable because it will then still exist in JS memory
// other wise after removing make it null like this :
// >
// container.remove()
// container = null;



