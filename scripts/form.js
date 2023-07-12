// Set the year for copyright
document.getElementById("currentyear").innerHTML = new Date().getFullYear();

// Set the date when last updated
let a = document.lastModified;
document.getElementById("lastmodified").innerHTML = a;

// Hamburger Menu
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

// Dark Mode script
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
  if (modeButton.textContent.includes("☑️")) {
    main.style.background = "#000";
    main.style.color = "#fff";
    modeButton.textContent = "❎";
  } else {
    main.style.background = "#eee";
    main.style.color = "#000";
    modeButton.textContent = "☑️";
  }
});

// Check if both passwords match //
const upwd1 = document.querySelector("#usrpwd1");
const upwd2 = document.querySelector("#usrpwd2");
const message = document.querySelector("#formmessage");

upwd2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
  if (upwd1.value !== upwd2.value) {
    message.textContent = "❗The passwords DO NOT MATCH!";
    message.style.visibility = "show";
    upwd1.style.backgroundColor = "#fff0f3";
    upwd1.value = "";
    upwd2.value = "";
    upwd1.focus();
  } else {
    message.style.display = "none";
    upwd2.style.backgroundColor = "#fff";
    upwd2.style.color = "#000";
  }
}
