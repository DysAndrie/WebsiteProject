
/**
 * JS Function for the image change in the header every 7 seconds 
 * Store the header section and image URLs in an array
 */
const header = document.getElementById("header");
const imageUrls = ["images/homepage2.jpg", "images/cs2.jpg","images/homepage.jpg", "images/laptopwcode.jpeg"];

const backgroundElement = document.querySelector(".background-image");
let currentIndex = 0;

// Function to change the background image
function changeBackground() {
    // Fades out the current image
    header.classList.add("fade-in")
    header.style.backgroundImage = "linear-gradient(rgba(81, 104, 81, 0.774), rgba(9, 21, 48, 0.582)), url(images/transparent.png)";

    // Waits for a short time (e.g., 100ms) for the fade-out effect
    setTimeout(function() {
        // Changes the background image to the next URL
        header.classList.add("fade-in")
        header.style.backgroundImage = `linear-gradient(rgba(81, 104, 81, 0.774), rgba(9, 21, 48, 0.582)), url(${imageUrls[currentIndex]})`;
    }, 100);

    // Moves to the next image
    currentIndex = (currentIndex + 1) % imageUrls.length;
}

// Calls the changeBackground function
changeBackground();

// Interval that changes the background every 7 seconds
setInterval(changeBackground, 7000);




// For mobile users 
var nav = document.getElementById("nav");

// Function that shows the navigation menu
function show() {
  // Moves the menu to the right, making it visible
  nav.style.right = "0";
}

// Function that hides the navigation menu
function hide() {
  // Moves the menu to the left, hiding it from view
  nav.style.right = "-200px";
}




/**
 * For FAQS, box expands when colicked upon 
 * Selects all elements with the class "cs_accordion" and the button element within them
 */
const items = document.querySelectorAll('.cs_accordion button');

// Defines a function to toggle the accordion
function toggleAccordion() {
  // Gets the current "aria-expanded" attribute of the clicked button
  const itemToggle = this.getAttribute('aria-expanded');

  // Loops through all accordion items
  for (i = 0; i < items.length; i++) {
    // Sets the "aria-expanded" attribute to 'false' for all items to close them
    items[i].setAttribute('aria-expanded', 'false');
  }

  // If the clicked item's "aria-expanded" attribute is 'false'
  if (itemToggle == 'false') {
    // Sets the "aria-expanded" attribute to 'true' to open the clicked item
    this.setAttribute('aria-expanded', 'true');
  }
}

// A click event listener to each accordion item and associate it with the toggleAccordion function
items.forEach((item) => item.addEventListener('click', toggleAccordion));




