const sliders = document.querySelectorAll(".slider");
const fruitsContainer = document.querySelector(".fruits");
const upBtn = document.querySelector(".arrow-up");
const downBtn = document.querySelector(".arrow-down");
const completeBg = document.querySelector(".complete-bg");
const fruitItems = document.querySelectorAll(".fruit-list li");
const circleImg = document.querySelector(".circle-img");
const semiCircle = document.querySelector(".semi-circle-down");


let currentIndex = 0;
const sliderHeight = 315;

const bgColors = [
  "#443747",
  "#588c43",
  "#504959",
  "#9b3327",
  "#c74928",
  "#c71e3e"
];

function updateArrowOpacity() {
  upBtn.style.opacity = currentIndex === 0 ? "0.6" : "1";
  downBtn.style.opacity =
    currentIndex === sliders.length - 1 ? "0.6" : "1";
}

function updateSlider() {
  fruitsContainer.style.transform =
    `translateY(-${currentIndex * sliderHeight}px)`;

  completeBg.style.backgroundColor = bgColors[currentIndex];

  const step = 22.5; 
  semiCircle.style.setProperty("--fill", `${150 + currentIndex * step}deg`);
  setActiveFruit();
  updateArrowOpacity();
}


function setActiveFruit() {
  fruitItems.forEach(item => item.classList.remove("active"));
  fruitItems[currentIndex].classList.add("active");
}

/* ⬇️ Fruit list click logic */
fruitItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    currentIndex = index;
    updateSlider();
  });
});

/* ⬇️ Arrow buttons */
downBtn.addEventListener("click", () => {
  if (currentIndex < sliders.length - 1) {
    currentIndex++;
    updateSlider();
  }
});

upBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

updateSlider();
