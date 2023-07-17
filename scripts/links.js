const baseURL = "https://davidakindileni.github.io/wdd230/";
const linksURL = "https://davidakindileni.github.io/wdd230/data/links.json";

// get links from file

fetch(linksURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const weeks = jsonObject["weeks"];
    let list = document.getElementById("weeks-links");

    // loop through the week
    for (let i = 0; i < weeks.length; i++) {
      const weekNum = weeks[i].week; // get the week number
      const links = weeks[i].links; // get the links in the week
      let weekLinks = "";
      weekLinks = weekLinks + weeks[i].week + `:  `; // add the week number to the week's list

      // loop through the links in each week concatenating the links
      for (let j = 0; j < links.length; j++) {
        weekLinks =
          weekLinks +
          `<a href="${links[j]["url"]}" target="_blank"></a>${links[j]["title"]}</a>`;
        if (j < links.length - 1) {
          weekLinks = weekLinks + ` | `;
        }
      } // looping through links in each week ends

      let item = document.createElement("li");
      item.innerHTML = weekLinks;
      list.appendChild(item);
    } // looping through weeks ends
  });
