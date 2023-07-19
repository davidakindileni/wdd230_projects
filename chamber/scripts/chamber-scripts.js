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

if (window.location.pathname == "/chamber/discover.html") {
  // get number of days since last visit
  // 1️⃣ Initialize display element variable
  const lastVisit = document.querySelector(".lastVisit");
  const lastVisitDate = window.localStorage.getItem("storedLastVisit");

  if (lastVisitDate == null) {
    // consider first visit
    lastVisit.textContent = `Welcome! 🥳 Let us know if you have any questions.`;
    localStorage.setItem("storedLastVisit", JSON.stringify(new Date()));
  } else {
    const lastVisited = localStorage.getItem("storedLastVisit");
    // your logic to calculate days based on format stored.
    // const lastDate = JSON.parse(lastVisited); //
    lastDate = Date.parse(JSON.parse(lastVisited));
    const currentDate = new Date();
    const nowDate = Date.parse(currentDate);
    const difference = nowDate - lastDate;
    const differenceInDays = Math.floor(difference / (1000 * 60 * 60 * 24));

    if (differenceInDays < 1) {
      lastVisit.textContent = `Back so soon! Awesome!`;
    } else if (differenceInDays == 1) {
      lastVisit.textContent =
        `You last visted ` + differenceInDays + ` day ago`;
    }
    if (differenceInDays > 1) {
      lastVisit.textContent =
        `You last visted ` + differenceInDays + ` days ago`;
    }

    localStorage.setItem("storedLastVisit", JSON.stringify(new Date()));
  }
}

// check and highlight active nav link
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll("nav a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});

// Banner page display and close
const pgbnr = document.querySelector("#bnr");
const pgclose = document.querySelector(".banner-close");
const d = new Date();
let day = d.getDay();
if (day > 0 && day < 4) {
  pgclose.addEventListener("click", function () {
    this.closest(".banner").style.display = "none";
  });
} else {
  pgbnr.style.display = "none";
}
