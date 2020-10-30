window.onload = () => {
  let sHand = document.querySelector(".s-hand"),
    mHand = document.querySelector(".m-hand"),
    hHand = document.querySelector(".h-hand");
  setInterval(() => setTime(sHand, mHand, hHand), 1000);
};

const setTime = (sHand, mHand, hHand) => {
  let dateObj = new Date();
  let sec = (dateObj.getSeconds() / 60) * 360,
    min = (dateObj.getMinutes() / 60) * 360,
    hour = (dateObj.getHours() / 12) * 360;

  sHand.style.transform = `rotate(${sec}deg) scaleY(.75)`;
  mHand.style.transform = `rotate(${min}deg) scaleX(.9)`;
  hHand.style.transform = `rotate(${hour}deg) scaleX(.7) scaleY(1.25)`;
};
