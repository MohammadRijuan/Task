(() => {
  const slider = document.querySelector(".template-card-container");
  const buttons = document.querySelectorAll(".temp-list");
  const gap = 16;

  let originalCards = Array.from(slider.children);
  let currentIndex = 0;
  let interval;
  let activeCategory = null;


  originalCards.forEach(card => {
    slider.appendChild(card.cloneNode(true));
    slider.appendChild(card.cloneNode(true));
  });

  const allCards = Array.from(slider.children);

  function cardWidth() {
    return allCards[0].offsetWidth + gap;
  }


  currentIndex = originalCards.length;
  slider.style.transform = `translateX(-${currentIndex * cardWidth()}px)`;

  function moveTo(index, smooth = true) {
    slider.style.transition = smooth ? "transform 0.6s ease" : "none";
    slider.style.transform = `translateX(-${index * cardWidth()}px)`;
  }

  function nextSlide() {
    currentIndex++;
    moveTo(currentIndex);

    if (currentIndex >= originalCards.length * 2) {
      setTimeout(() => {
        currentIndex = originalCards.length;
        moveTo(currentIndex, false);
      }, 600);
    }
  }

  function startAuto() {
    stopAuto();
    interval = setInterval(nextSlide, 3000);
  }

  function stopAuto() {
    if (interval) clearInterval(interval);
  }

  startAuto();


  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.dataset.category;


      if (activeCategory === category) {
        btn.classList.remove("active");
        activeCategory = null;
        startAuto();
        return;
      }

      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = category;

      stopAuto();

      const index = allCards.findIndex(
        card => card.dataset.category === category
      );

      if (index !== -1) {
        currentIndex = index;
        moveTo(currentIndex);
      }
    });
  });

  window.addEventListener("resize", () => {
    moveTo(currentIndex, false);
  });
})();
