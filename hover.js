  const favContents = document.querySelectorAll(".fav-content");

  favContents.forEach(content => {
    const img = content.querySelector(".fav-img");

    content.addEventListener("mousemove", (e) => {
      const rect = content.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      img.style.left = x + "px";
      img.style.top = y + "px";
    });

    content.addEventListener("mouseleave", () => {
      img.style.opacity = "0";
    });

    content.addEventListener("mouseenter", () => {
      img.style.opacity = "1";
    });
  });

