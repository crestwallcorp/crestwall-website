 -------- SIMPLE FADE-IN EFFECT -------- 

.section {
  opacity 0;
  transform translateY(30px);
  transition all 0.6s ease;
}

.section.visible {
  opacity 1;
  transform translateY(0);
}

// Lightbox functionality
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
