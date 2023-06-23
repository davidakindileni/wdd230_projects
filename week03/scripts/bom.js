const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", function () {
  if (input.value != "") {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    li.textContent = input.value;
    deleteButton.textContent = "❌";
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener("click", function () {
      list.removeChild(li);
      input.focus();
    });
    input.focus();
    input.value = "";
  } else {
  }
});

// Book of Mormon --- adding localstorage features
let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

button.addEventListener("click", () => {
  if (input.value != "") {
    // make sure the input is not empty
    displayList(input.value); // call the function that outputs the submitted chapter
    chaptersArray.push(input.value); // add the chapter to the array
    setChapterList(); // update the localStorage with the new array
    input.value = ""; // clear the input
    input.focus(); // set the focus back to the input
  }
});

function displayList(item) {
  let li = document.createElement("li");
  let deleteButton = document.createElement("button");
  li.textContent = item;
  deleteButton.textContent = "❌";
  deleteButton.classList.add("delete");
  li.append(deleteButton);
  list.append(li);
  deleteButton.addEventListener("click", function () {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });
  input.focus();
  input.value = "";
}

function setChapterList() {
  localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem("myFavBOMList"));
}

chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character //

chaptersArray = chaptersArray.filter((item) => item !== chapter);

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}
