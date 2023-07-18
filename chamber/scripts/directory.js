const baseURL = "https://davidakindileni.github.io/wdd230/";
const linksURL =
  "https://davidakindileni.github.io/wdd230/chamber/data/members.json";

// const linksURL = "./data/members.json";

const cards = document.querySelector("#cards");

async function getMembersData() {
  const response = await fetch(linksURL);
  //check to see if the fetch was successful
  if (response.ok) {
    const data = await response.json();
    displayMembers(data.members);
  }
}

const displayMembers = (members) => {
  members.forEach((member) => {
    let card = document.createElement("section");
    let cardbody = document.createElement("div");
    let companyName = document.createElement("h2");
    let companyImage = document.createElement("img");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let website = document.createElement("a");
    let memberLevel = document.createElement("p");
    let dateJoined = document.createElement("p");
    let active = document.createElement("p");

    card.setAttribute("class", "card");
    // Build the h2 content out to show the prophet's full name
    companyName.textContent = `${member.companyname}`;

    // Build the image portrait by setting all the relevant attributes
    companyImage.setAttribute("src", member.imagefile);
    companyImage.setAttribute("alt", `Image of ${member.companyname}`);
    companyImage.setAttribute("loading", "lazy");
    companyImage.setAttribute("width", "120");
    companyImage.setAttribute("height", "100");

    address.innerText = `${member.address}`;
    address.setAttribute("class", "card-text");

    phone.innerText = `${member.phone}`;
    phone.setAttribute("class", "card-text");

    website.innerText = `${member.website}`;
    website.setAttribute("class", "card-text");

    memberLevel.innerText = `${member.member_level}`;
    memberLevel.setAttribute("class", "card-text");

    dateJoined.innerText = `${member.date_joined}`;
    dateJoined.setAttribute("class", "card-text");

    if (member.active) {
      active.innerText = `active`;
    } else {
      active.innerText = `not active`;
    }
    active.setAttribute("class", "card-text");

    // Append the card body with the created elements
    cardbody.appendChild(address);
    cardbody.appendChild(phone);
    cardbody.appendChild(website);
    cardbody.appendChild(memberLevel);
    cardbody.appendChild(dateJoined);
    cardbody.appendChild(active);

    // Append the section(card) with the created elements
    card.appendChild(companyName);
    card.appendChild(companyImage);
    card.appendChild(cardbody);

    cards.appendChild(card);
  });
};

getMembersData().then((members) => displayMembers(members));
