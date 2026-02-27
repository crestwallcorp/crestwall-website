// -------- SCROLL FADE-IN EFFECT --------

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const position = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      section.classList.add("visible");
    }
  });
});

// -------- LIGHTBOX FUNCTIONALITY --------

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const images = document.querySelectorAll(".gallery a");

images.forEach(image => {
  image.addEventListener("click", function(e) {
    e.preventDefault();
    lightbox.style.display = "block";
    lightboxImg.src = this.href;
  });
});

document.querySelector(".close").addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = "none";
  }
});
