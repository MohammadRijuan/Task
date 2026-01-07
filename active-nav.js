const navItems = document.querySelectorAll(".nav-items li");

      navItems.forEach((item) => {
        item.addEventListener("click", () => {
          navItems.forEach((li) => li.classList.remove("active"));
          item.classList.add("active");
        });
      });