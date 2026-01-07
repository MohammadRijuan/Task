
      const slider = document.querySelector(".template-card-container");
      let cards = document.querySelectorAll(".template-card");
      const categoryBtns = document.querySelectorAll(".temp-list");

      const gap = 24;
      const cardWidth = cards[0].offsetWidth + gap;

      /* ---------- CLONE first & last ---------- */
      const firstClone = cards[0].cloneNode(true);
      const lastClone = cards[cards.length - 1].cloneNode(true);

      slider.appendChild(firstClone);
      slider.insertBefore(lastClone, cards[0]);

      cards = document.querySelectorAll(".template-card");

      let index = 1;

      slider.style.transform = `translateX(-${index * cardWidth}px)`;

      function move() {
        slider.style.transition = "transform 0.6s ease";
        slider.style.transform = `translateX(-${index * cardWidth}px)`;
      }

      /* ---------- AUTO one by one ---------- */
      let autoSlide = setInterval(() => {
        index++;
        move();
      }, 3000);

      /* ---------- FIX jump using clone ---------- */
      slider.addEventListener("transitionend", () => {
        if (cards[index].isSameNode(firstClone)) {
          slider.style.transition = "none";
          index = 1;
          slider.style.transform = `translateX(-${index * cardWidth}px)`;
        }

        if (cards[index].isSameNode(lastClone)) {
          slider.style.transition = "none";
          index = cards.length - 2;
          slider.style.transform = `translateX(-${index * cardWidth}px)`;
        }
      });

      /* ---------- CATEGORY CLICK ---------- */
      categoryBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          clearInterval(autoSlide);

          const category = btn.dataset.category;

          cards.forEach((card, i) => {
            if (card.dataset.category === category) {
              index = i;
              move();
            }
          });

          autoSlide = setInterval(() => {
            index++;
            move();
          }, 3000);
        });
      });
