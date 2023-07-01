// Set the year for copyright
document.getElementById("currentyear").innerHTML = new Date().getFullYear();

// Set the date when last updated
let a = document.lastModified;
document.getElementById("lastmodified").innerHTML = a;

// Hamburger Menu script
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

/* Check for the active navigation button */
var navi = document.getElementById("nav-bar");
var links = navi.getElementsByClassName("navlink");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener(
    "click",
    ready(function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    })
  );
}
