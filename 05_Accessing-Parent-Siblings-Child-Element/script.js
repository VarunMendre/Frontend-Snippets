const h1 = document.querySelector('h1')
const paragraph = document.querySelector('p')
const allLinks = document.querySelectorAll('a')

const firstLink = document.querySelector("body > p:nth-child(5) > a:nth-child(2)");

// body
firstLink.parentElement.parentElement;

// body children
firstLink.parentElement.parentElement.children;

// body first child
firstLink.parentElement.parentElement.firstElementChild;

// body last child
firstLink.parentElement.parentElement.lastElementChild;


// Sibling

// first link next sibling
firstLink.nextElementSibling;
// first link previous sibling
firstLink.previousElementSibling;

