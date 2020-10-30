let audioObj = {};

window.onload = () => {
  loadAudio();
};

// ON KEY DOWN
window.addEventListener("keydown", (e) => {
  if (!/[a-z]|[A-Z]/.test(e.key)) return;
  let key = document.querySelector(`.key[data-key=${e.key.toLowerCase()}]`),
    sound = audioObj[e.key.toLowerCase()];

  if (!sound || !key) return;

  key.classList.add("pressed");

  sound.currentTime = 0;
  sound.play();
});

// ON KEY UP
window.addEventListener("keyup", (e) => {
  if (!/[a-z]|[A-Z]/.test(e.key)) return;
  let key = document.querySelector(`.key[data-key=${e.key.toLowerCase()}]`);
  if (!key) return;
  key.classList.remove("pressed");
});

// PRELOAD ALL AUDIO FILES
const loadAudio = () => {
  let srcs = [
    "a-clap",
    "s-hihat",
    "d-kick",
    "f-openhat",
    "g-boom",
    "h-ride",
    "j-snare",
    "k-tom",
    "l-tink",
  ];
  srcs.forEach((src) => {
    audioObj[src.slice(0, 1)] = new Audio(`sounds/${src}.wav`);
  });
};
