const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
stopBtn.disabled = true;

let timer = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  stopBtn.disabled = false;

  timer = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timer);
  startBtn.disabled = false;
  stopBtn.disabled = true;
});