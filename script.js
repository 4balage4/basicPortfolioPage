// ///////////////////////////////
// Style changer
// //////////////////////////////

// objectives:
// when clicked
  // change the icon and style
// have nice code
const toggle = document.getElementById('toggleButton');
const body = document.querySelector('body');
let logo = document.getElementById('logo');
let logoSmall = document.getElementById('logo-small')


toggle.addEventListener('click', function() {
  this.classList.toggle('bi-sun');
  if (this.classList.toggle('bi-moon')) {
    body.classList.remove('darkmode')
    logo.src = "resources/dark_logo.png";
    logoSmall.src = "resources/small-logo-dark.png";
    body.style.transition = '1250ms';
  } else {
    body.classList.add('darkmode');
    logo.src = "resources/white_logo.png";
    logoSmall.src = "resources/small-logo.png";
    body.style.transition = '1250ms';
  }
});


// ///////////////////////////////
// Back to top button
// //////////////////////////////

const button = document.querySelector('.back-to-top');
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  if(this.window.scrollY > 180) {
    button.classList.add('active');
    navbar.classList.add('after');
  } else {
    button.classList.remove('active');
    navbar.classList.remove('after');
  }
})

////////////////////////////
// hamburgermenu opener
//////////////////////////

const smallNav = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.menu');

console.log('hello');

console.log(smallNav);

console.log(navbarLinks)

// console.log(smallNav)
// console.log(navbarLinks)


smallNav.addEventListener('click', function() {
  navbarLinks.classList.toggle('active-menu');
})
