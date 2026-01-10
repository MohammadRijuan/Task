const sliders = document.querySelectorAll(".slider");
const fruitsContainer = document.querySelector(".fruits");
const upBtn = document.querySelector(".arrow-up");
const downBtn = document.querySelector(".arrow-down");
const completeBg = document.querySelector(".complete-bg");
const fruitItems = document.querySelectorAll(".fruit-list li");
const semiCircle = document.querySelector(".semi-circle-down");

let currentIndex = 0;


function getSliderHeight(index) {

  if (index === 0) return 220;
  if (index === 1) return 310;

  if (window.matchMedia("(max-width: 576px)").matches) {
    return 240;
  } 
  else if (window.matchMedia("(max-width: 768px)").matches) {
    return 255;
  } 
  else {
    return 340;
  }
}

const bgColors = [
  "#443747",
  "#588c43",
  "#504959",
  "#9b3327",
  "#c74928",
  "#c71e3e"
];

function updateArrowOpacity() {
  upBtn.style.opacity = currentIndex === 0 ? "0.5" : "1";
  downBtn.style.opacity =
    currentIndex === sliders.length - 1 ? "0.5" : "1";
}

function setActiveFruit() {
  fruitItems.forEach(item => item.classList.remove("active"));
  fruitItems[currentIndex].classList.add("active");
}

function updateSlider() {
  let moveY = 0;

  for (let i = 0; i < currentIndex; i++) {
    moveY += getSliderHeight(i);
  }

  fruitsContainer.style.transform = `translateY(-${moveY}px)`;

  completeBg.style.backgroundColor = bgColors[currentIndex];

  const step = 22.5;
  semiCircle.style.setProperty(
    "--fill",
    `${150 + currentIndex * step}deg`
  );

  setActiveFruit();
  updateArrowOpacity();
}


fruitItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    currentIndex = index;
    updateSlider();
  });
});

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

window.addEventListener("resize", updateSlider);

updateSlider();
