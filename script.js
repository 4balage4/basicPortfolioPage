// ///////////////////////////////
// Style changer
// //////////////////////////////

// objectives:
// when clicked
  // change the icon and style
// have nice code
const toggle = document.getElementById('toggleButton');
const body = document.querySelector('body');



toggle.addEventListener('click', function() {
  this.classList.toggle('bi-sun');
  if (this.classList.toggle('bi-moon')) {
    body.classList.remove('darkmode')
    body.style.transition = '1250ms';
  } else {
    body.classList.add('darkmode');
    body.style.transition = '1250ms';
  }
});


// ///////////////////////////////
// Back to top button
// //////////////////////////////

const button = document.querySelector('.back-to-top');

window.addEventListener('scroll', function() {
  if(this.window.scrollY > 120) {
    button.classList.add('active');
    console.log(button.classList);
  } else {
    button.classList.remove('active');
  }
})
