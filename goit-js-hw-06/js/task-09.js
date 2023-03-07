function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)}`;
  }

  const chgElement = {
  changeBtn: document.querySelector('.change-color'),
  spanColor: document.querySelector('.color'),
  bodyColor: document.querySelector('body')
  }
  chgElement.changeBtn.addEventListener("click", colorChange);
  
  function colorChange() {
    const randomColor = getRandomHexColor();
    chgElement.bodyColor.style.background = randomColor;
    chgElement.spanColor.textContent = randomColor;
  }

