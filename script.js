const btn = document.getElementById("btn");
const circle = document.querySelector(".circle");
const backgroundTop = document.querySelector(".background-top");
const backgroundBottom = document.querySelector(".background-bottom");
const textFade = document.getElementsByClassName("text-fade");
const textNormal = document.getElementsByClassName("text-normal");
const boxes = document.getElementsByClassName("theme-box");

btn.onclick = function () {
  if (btn.dataset.status === "off") {
    // Toggle button Switch to light theme
    circle.style.animation = "move-right 0.5s";
    circle.style.transform = "translateX(20px)";
    circle.style.backgroundColor = "white";
    btn.dataset.status = "on";

    // background
    backgroundTop.style.animation = "switch-light-top 0.5s";
    backgroundTop.style.backgroundColor = "hsl(225, 100%, 98%)";
    backgroundBottom.style.animation = "switch-light-bottom 0.5s";
    backgroundBottom.style.backgroundColor = "hsl(0, 0%, 100%)";

    // Faded Text
    for (let i = 0; i < textFade.length; i++) {
      textFade[i].style.animation = "switch-light-text-fade 0.5s";
      textFade[i].style.color = "hsl(228, 12%, 44%)";
    }

    // Nomal Text
    for (let i = 0; i < textNormal.length; i++) {
      textNormal[i].style.animation = "switch-light-text-normal 0.5s";
      textNormal[i].style.color = "hsl(230, 17%, 14%)";
    }

    // Content Boxes
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].style.animation = "switch-light-box 0.5s";
      boxes[i].style.backgroundColor = "hsl(227, 47%, 96%)";
    }
  } else if (btn.dataset.status === "on") {
    // Toggle Switch changes to dark theme
    circle.style.animation = "move-left 0.5s";
    circle.style.transform = "translateX(0)";
    circle.style.backgroundColor = "black";
    btn.dataset.status = "off";

    // background
    backgroundTop.style.animation = "switch-dark-top 0.5s";
    backgroundTop.style.backgroundColor = "hsl(232, 19%, 15%)";
    backgroundBottom.style.animation = "switch-dark-bottom 0.5s";
    backgroundBottom.style.backgroundColor = "hsl(230, 17%, 14%)";

    // Faded Text
    for (let i = 0; i < textFade.length; i++) {
      textFade[i].style.animation = "switch-dark-text-fade 0.5s";
      textFade[i].style.color = "hsl(228, 34%, 66%)";
    }

    // Normal Text
    for (let i = 0; i < textNormal.length; i++) {
      textNormal[i].style.animation = "switch-dark-text-normal 0.5s";
      textNormal[i].style.color = "white";
    }

    // Content Boxes
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].style.animation = "switch-dark-box 0.5s";
      boxes[i].style.backgroundColor = "hsl(228, 28%, 20%)";
    }
  }
};
