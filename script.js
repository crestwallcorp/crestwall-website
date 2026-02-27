// ===== SCROLL ANIMATION =====
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const pos = section.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
});

// ===== LIGHTBOX (only if gallery exists) =====
const lightbox = document.getElementById("lightbox");

if (lightbox) {
  const lightboxImg = document.getElementById("lightbox-img");
  const images = document.querySelectorAll(".gallery a");

  images.forEach(img => {
    img.addEventListener("click", function(e) {
      e.preventDefault();
      lightbox.style.display = "block";
      lightboxImg.src = this.href;
    });
  });

  document.querySelector(".close").onclick = () => {
    lightbox.style.display = "none";
  };
}
