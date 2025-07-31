//Retrieve the dark mode toggle
const toggle = document.getElementById("darkMode");

//Retrieve all HTML elements that change color with dark mode
const body = document.body;
const underline = document.getElementById("intro-separator");
const redirectButtons = document.getElementsByClassName("redirectButton");
const projects = document.getElementsByClassName("project");
const linkPic = document.getElementById("linkPic");
const projectHeader = document.getElementById("projectHeader");
const centerLine = document.getElementById("centerLine");
const titles = document.getElementsByClassName("title");
const underlines = document.getElementsByClassName("underline");
const connectPrompt = document.getElementById("connectPrompt");
const bottom = document.getElementById("bottom");

//Whenever the toggle is clicked
toggle.addEventListener("change", () => {
  //Toggle dark mode on all retrieved HTML elements
  centerLine.classList.toggle("dark-mode");
  body.classList.toggle("dark-mode");
  underline.classList.toggle("dark-mode");
  Array.from(redirectButtons).forEach((button) => {
    button.style = "";
    button.classList.toggle("dark-mode");
  });
  Array.from(projects).forEach((project) => {
    project.classList.toggle("dark-mode");
  });
  Array.from(titles).forEach((title) => {
    title.style = "";
    title.classList.toggle("dark-mode");
  });
  linkPic.classList.toggle("dark-mode");
  Array.from(underlines).forEach((underline) => {
    underline.classList.toggle("dark-mode");
  });
  connectPrompt.classList.toggle("dark-mode");
  bottom.classList.toggle("dark-mode");
});
