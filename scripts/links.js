const baseURL = "https://davidakindileni.github.io/wdd230/";
const linksURL = "https://davidakindileni.github.io/wdd230/data/links.json";

// get links from file
async function getLinks() {
  const response = await fetch(linksURL);
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    displayLinks(data);
  }
}

const displayLinks = (weeks) => {
  console.log("weeks", weeks);
  console.log("weeks.week", weeks.week);
  console.log("data.weeks", data.weeks);
  console.log("data.weeks.week", data.weeks.week);
};

// getLinks();
