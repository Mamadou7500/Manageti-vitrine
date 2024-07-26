document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const cards = document.querySelectorAll(".card");
  const navButtons = document.querySelectorAll(".nav-button");
  const prevButton = document.getElementById("prev-btn");
  const nextButton = document.getElementById("next-btn");
  let currentIndex = 2; // Starting with the active card in the center

  function updateCarousel(index) {
    cards.forEach((card) => card.classList.remove("active"));
    navButtons.forEach((btn) => btn.classList.remove("active"));
    cards[index].classList.add("active");
    navButtons[index].classList.add("active");

    // Update transform for all cards
    const offset = -index * (cards[0].offsetWidth + 20); // Adjust this value as needed
    const centerOffset = (carousel.offsetWidth - cards[0].offsetWidth) / 2;
    carousel.style.transform = `translateX(${offset + centerOffset}px)`;
  }

  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const cardIndex = parseInt(button.getAttribute("data-card"));
      currentIndex = cardIndex;
      updateCarousel(currentIndex);
    });
  });

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCarousel(currentIndex);
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel(currentIndex);
  });

  // Initialize carousel
  updateCarousel(currentIndex);
});
