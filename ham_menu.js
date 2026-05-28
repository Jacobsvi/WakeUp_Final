const hamMenu = document.querySelector(".ham_menu");

const offScreenMenu = document.querySelector(".off_screen_menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

/********/

const images = document.querySelectorAll(".scroll");

const observerOptions = {
  threshold: 0.2, // 0.2 = 20% af elementet skal være synligt
};

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      // Hvis du kun vil animere én gang:
      obs.unobserve(entry.target);
    }
  });
}, observerOptions);

images.forEach((img) => observer.observe(img));
