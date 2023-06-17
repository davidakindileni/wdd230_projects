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

// Set the year for copyright
document.getElementById("currentyear").innerHTML = new Date().getFullYear();

// Set the date when last updated
let a = document.lastModified;
document.getElementById("lastmodified").innerHTML = a;
