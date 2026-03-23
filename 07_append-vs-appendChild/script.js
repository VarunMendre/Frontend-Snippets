const h1 = document.querySelector("h1");
const container = document.querySelector(".container");
const card = document.querySelector(".card");



// Move the h1 element to the container, so originally it is in the card, but now it will be in the container
// container.appendChild(h1);

// Copy the h1 element and add it to the container, so now we have two h1 elements in the container
// const clonedH1 = h1.cloneNode(true); // true means it will clone the element and its children
// container.appendChild(clonedH1); // This will add the cloned h1 to the container, so now we have two h1 elements in the container

// copy single line
// container.appendChild(h1.cloneNode(true)); // This will clone the h1 element and add it to the container in one line, so now we have two h1 elements in the container

let count = 1;
function appendCardWithCount() {
    count++;
    const newCard = card.cloneNode(true); // Clone the card element
    newCard.innerText = count; // Update the text content of the new card
    container.appendChild(newCard); // Append the cloned card to the container

} 

function appendCardWithoutCount() {
    container.appendChild(card.cloneNode());
}

// Not working because document.body is ParentNode and it cannot be appended to another element, it can only be appended to the document itself. So we cannot append document.body to the container, it will throw an error.
// container.appendChild(document.body)



// Diff between append and appendChild

// This will return  the child that has been appended which is <h1>appendChild & append</h1>
// container.appendChild(h1);

// This will return undefined because append does not return the appended child, it returns nothing.
// container.append(h1);


// We cant append an string with appendChild because appendChild only accepts Node objects, so it will throw an error.
// container.appendChild("Hello World");

// We can append a string with append because append can accept both Node objects and strings, so it will work fine.
// container.append("Hello World");

// Adding a Node with appendChild

// const textNode = document.createTextNode("Hello World");
// container.appendChild(textNode); // This will add the text node to the container, so now we have "Hello World" in the container

// container.append(textNode); // This will also add the text node to the container, so now we have "Hello World" in the container


// We can also add multiple Nodes with append() but we cannot do that with appendChild() because appendChild() only accepts one Node at a time, so it will throw an error if we try to add multiple Nodes with appendChild().


// const textNode1 = document.createTextNode("Hello 1\n");
// const textNode2= document.createTextNode("Hello 2\n");
// const textNode3 = document.createTextNode("Hello 3\n");
// container.append(textNode1, textNode2, textNode3);



// so total 3 diffences between append and appendChild
/**
 * 1. appendChild() only accepts Node objects, while append() can accept both Node objects and strings.
 * 2. appendChild() returns the appended child, while append() returns undefined.
 * 3. append() can accept multiple arguments, while appendChild() can only accept one argument at a time.
 */

// give me commit message for the above code changes, but what shall i write imple, feat, or fix, or docs, or style, or refactor, or perf, or test, or chore, or build, or ci, or revert, or wip

