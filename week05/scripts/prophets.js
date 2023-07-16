const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

async function getProphetData() {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    displayProphets(data.prophets);
  }
}

// getProphetData(); //

const displayProphets = (prophets) => {
  // card build code goes here
  /* const cards = document.querySelector("div.cards"); */
  prophets.forEach((prophet) => {
    let card = document.createElement("section");
    let cardbody = document.createElement("div");
    let fullName = document.createElement("h2");
    let birthDate = document.createElement("p");
    let birthPlace = document.createElement("p");
    let portrait = document.createElement("img");

    card.setAttribute("class", "card");
    // Build the h2 content out to show the prophet's full name
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    birthDate.innerText = `Date of Birth: ${prophet.birthdate}`;
    birthDate.setAttribute("class", "card-text");

    birthPlace.innerText = `Place of Birth: ${prophet.birthplace}`;
    birthPlace.setAttribute("class", "card-text");

    // Build the image portrait by setting all the relevant attributes
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute(
      "alt",
      `Portrait of ${prophet.name} ${prophet.lastname}`
    );
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");

    // Append the card body with the created elements
    cardbody.appendChild(birthDate);
    cardbody.appendChild(birthPlace);

    // Append the section(card) with the created elements
    card.appendChild(fullName);
    card.appendChild(cardbody);
    card.appendChild(portrait);

    cards.appendChild(card);
  });
};

getProphetData().then((prophets) => displayProphets(prophets));
