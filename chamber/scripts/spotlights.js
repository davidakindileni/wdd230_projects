const linksURL =
  "https://davidakindileni.github.io/wdd230/chamber/data/members.json";

fetch(linksURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const members = jsonObject["members"];
    selectMembers(members);
  });

function selectMembers(members) {
  const filtered = members.filter(function (member) {
    return member.member_level == "Gold" || member.member_level == "Silver";
  });

  const randomed = filtered.sort(() => 0.5 - Math.random());
  const sliced = randomed.slice(0, 3);
  displaySpotlighted(sliced[0], "#card04");
  displaySpotlighted(sliced[1], "#card05");
  displaySpotlighted(sliced[2], "#card06");
}

function displaySpotlighted(member, elementID) {
  let card = document.createElement("section");
  let cardbody = document.createElement("div");
  let companyImage = document.createElement("img");
  let companyName = document.createElement("h2");
  let tagline = document.createElement("p");
  let hr = document.createElement("hr");
  let memberinfo = document.createElement("p");
  let a = document.createElement("a");

  card.setAttribute("class", "card");

  companyName.textContent = `${member.companyname}`;
  companyName.setAttribute("class", "featured-hdr");

  companyImage.setAttribute("src", member.imagefile);
  companyImage.setAttribute("alt", `Image of ${member.companyname}`);
  companyImage.setAttribute("loading", "lazy");
  companyImage.setAttribute("width", "120");
  companyImage.setAttribute("height", "100");
  companyImage.setAttribute("class", "spotlightImg");

  tagline.textContent = `"${member.tagline}"`;
  tagline.setAttribute("class", "small bold italic tagline");

  hr.style.margin = "2px";

  memberinfo.innerHTML += member.phone + " | " + member.member_level + " | ";
  memberinfo.classList.add("spotinfo");

  a.textContent = "website";
  a.setAttribute("href", `"${member.website}"`);

  memberinfo.appendChild(a);

  // Append the card body with the created elements
  cardbody.appendChild(tagline);
  cardbody.appendChild(hr);
  cardbody.appendChild(memberinfo);

  // Append the section(card) with the created elements
  card.appendChild(companyImage);
  card.appendChild(companyName);
  card.appendChild(cardbody);

  console.log(card);
  cards.appendChild(card);
}
