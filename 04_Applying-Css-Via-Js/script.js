const h1 = document.querySelector('h1')
const paragraph = document.querySelector('p')
const allLinks = document.querySelectorAll('a')

// console.log(paragraph.innerHTML);

// paragraph.innerHTML = '<h4>Hiii</h4>'

h1.style.color = 'pink'

// allLinks.forEach((Link) => {
//     Link.style.color = `orange`
//     Link.style.textDecoration = 'none'
//     Link.style.fontSize = '15px'
//     Link.style.fontStyle = 'italic'
//     console.log(Link.style.cssText)
// })


// allLinks.forEach((Link) => {
//   Link.className = 'custom-class'
// });



allLinks.forEach((Link) => {
  Link.classList = 'custom-class'
    console.log(Link.classList);
});
