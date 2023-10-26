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

const toTopButton = document.querySelector('.back-to-top');
const navbar = document.querySelector('.navbar');
const socialMedia = document.querySelector('.icons-container-vertical');

window.addEventListener('scroll', function() {
  if(this.window.scrollY > 500) {

    toTopButton.classList.add('active');
    socialMedia.classList.add('active');
    navbar.classList.add('after');
  } else {
    toTopButton.classList.remove('active');
    socialMedia.classList.remove('active');
    navbar.classList.remove('after');
  }
})

////////////////////////////
// hamburgermenu opener
//////////////////////////

const smallNav = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.menu');

// console.log(smallNav)
// console.log(navbarLinks)


smallNav.addEventListener('click', function() {
  navbarLinks.classList.toggle('active-menu');
})



// ///////////////////////////////
// carousel ----> this was my first carousel
// //////////////////////////////

/* choosing the carousel buttons */
const carButtons = document.querySelectorAll('[data-carousel-button]')

// adding event listerner to the buttons
carButtons.forEach(button => {
  button.addEventListener('click', () => {
    // we are setting an offset. If we click on the button "next" then we return true so +1
    // if we click on other button, which is the back will return false, so we -1
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;

    console.log(`offset: ${offset}`)

    const projects = button
    // getting all of the closest selectors. from the data carousel.
    // Will return a the data carousel objects like the buttons and the div which is the
    // data-slides.
    .closest("[data-carousel]")
    // we access the data slides so this will return all of the elements inside this div
    // which are the .big-projects.
      .querySelector("[data-slides")

    // getting the active slide from the "projects" variable.
    const activeSlide = projects.querySelector("[data-active]");


    // creating an array with all of the projects
    let newIndex = [...projects.children];

    // getting the index of that project which has the active slide.
    // searching with .indexOf(activeSlide).
    newIndex = newIndex.indexOf(activeSlide);

    console.log(`activeSlide index: ${newIndex}`)

    // we are adding the offset. The offset will add one to the index we are at.
    //  so we are going +1 in the array.
    newIndex = newIndex + offset;

    console.log(`newIndex: ${newIndex}`)
    // if the newIndex is smaller than 0 means we wanna go to our last image. So we go around.
    //  this happens when we click on the 'prev' when we are at index 0, and we want to go to the end of our array
    if (newIndex < 0) newIndex = projects.children.length - 1
    // if newIndex is bigger than our length of the array, then we jump back to index 0
    if (newIndex >= projects.children.length) newIndex = 0;

    // we just add a new dataset. which is the  data-active attribute to the new project
    projects.children[newIndex].dataset.active = true
    // we remove the dataset attribute from the previous old project
    delete activeSlide.dataset.active

  })
})



// the dot coloring function
