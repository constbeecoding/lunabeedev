// Get the button:
let mybutton = document.getElementById("return-to-top-button");

// Check if page has scrollable content (scrollbar exists)
function hasScrollbar() {
  return document.documentElement.scrollHeight > window.innerHeight;
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // Only show button if scrollbar exists and user has scrolled down
  if (hasScrollbar() && (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10)) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Check on page load and resize to hide button if no scrollbar
function checkScrollbarOnLoad() {
  if (!hasScrollbar()) {
    mybutton.style.display = "none";
  }
}

// Check on load and resize
window.addEventListener('load', checkScrollbarOnLoad);
window.addEventListener('resize', checkScrollbarOnLoad);

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}