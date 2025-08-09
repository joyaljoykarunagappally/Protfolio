// Mobile Menu Toggle
document.getElementById("menu-toggle").addEventListener("click", function() {
  document.getElementById("nav-links").classList.toggle("show");
});

// Scroll Reveal Animation
function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}
window.addEventListener("scroll", reveal);
reveal();
