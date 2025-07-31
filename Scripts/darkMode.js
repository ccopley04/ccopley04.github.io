const toggle = document.getElementById("darkMode");

let body = document.body;
let underline = document.getElementById("intro-separator");
let redirectButtons = document.getElementsByClassName("redirectButton");
let projects = document.getElementsByClassName("project");
let linkPic = document.getElementById("linkPic");
let projectHeader = document.getElementById("projectHeader");
let centerLine = document.getElementById("centerLine");
let titles = document.getElementsByClassName("title");
let underlines = document.getElementsByClassName("underline");

toggle.addEventListener("change", () => {
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
});
