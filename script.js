// ===== SCROLL FADE-IN ANIMATION =====

const sections = document.querySelectorAll(".section");

if (sections.length > 0) {
  const revealOnScroll = () => {
    sections.forEach(section => {
      const position = section.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (position < screenHeight - 100) {
        section.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);

  // Run once on page load
  revealOnScroll();
}



// ===== OPTIONAL LIGHTBOX SUPPORT (Only if gallery uses links) =====

const lightbox = document.getElementById("lightbox");

if (lightbox) {
  const lightboxImg = document.getElementById("lightbox-img");
  const images = document.querySelectorAll(".gallery a");
  const closeBtn = document.querySelector(".close");

  images.forEach(img => {
    img.addEventListener("click", function(e) {
      e.preventDefault();
      lightbox.style.display = "block";
      lightboxImg.src = this.href;
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  }

  lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
      lightbox.style.display = "none";
    }
  });
}
