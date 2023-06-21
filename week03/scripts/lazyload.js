// Set the year for copyright
document.getElementById("currentyear").innerHTML = new Date().getFullYear();

// Set the date when last updated
let a = document.lastModified;
document.getElementById("lastmodified").innerHTML = a;

/* // Hamburger Menu script
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});
*/
