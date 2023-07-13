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
const pwd1 = document.querySelector("#password");
const pwd2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

pwd2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
  if (pwd1.value !== pwd2.value) {
    message.textContent = "❗Passwords DO NOT MATCH!";
    message.style.visibility = "show";
    pwd1.style.backgroundColor = "#fff0f3";
    pwd1.value = "";
    pwd2.value = "";
    pwd1.focus();
  } else {
    message.style.display = "none";
    pwd1.style.backgroundColor = "#bcb382";
    pwd1.style.color = "rgba(0, 0, 0, 0.7)";
  }
}

// Display the RANGE
const rangevalue = document.getElementById("ratingvalue");
const range = document.getElementById("pagerating");

// RANGE event listener
range.addEventListener("change", displayRatingValue);
range.addEventListener("input", displayRatingValue);

function displayRatingValue() {
  rangevalue.innerHTML = range.value;
}

// check and highlight active nav link
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll("nav a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});
