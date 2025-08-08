//Check if the web page if opened with a phone
let phoneSize = window.innerWidth < window.innerHeight;

//Create a div to hold the headshot
const headShot = document.createElement("img");
headShot.id = "headshot";
headShot.src = "./Images/seriousHeadshot.JPG";

if (phoneSize) {
  //Add the headshot
  const top = document.getElementById("top");
  top.appendChild(headShot);

  top.style = "display:flex; margin-left:10vw";

  //Ensure title name is placed correctly
  const title = document.getElementById("nameTitle");
  title.style = "padding-top:9vh; text-align:right";

  //If the window is phone, change the header spacing
  const header = document.getElementById("heading");
  header.classList.toggle("phone");

  //If window is phone, change the width of the redirect buttons
  const redirectButtons = document.getElementsByClassName("redirectButton");
  Array.from(redirectButtons).forEach((button) => {
    button.style = "";
    button.classList.toggle("phone");
  });

  //If window is phone, change the description font size
  const description = document.getElementById("description");
  description.classList.toggle("phone");

  //If window is phone, change the intro block width
  const containers = document.getElementsByClassName("horizontal-container");
  Array.from(containers).forEach((container) => {
    container.style = "";
    container.classList.toggle("phone");
  });

  const intro = document.getElementById("intro");
  intro.classList.toggle("phone");

  //If window is phone, change the project header height
  const projectHeader = document.getElementById("projectHeader");
  projectHeader.classList.toggle("phone");
} else {
  //If the webpage is not opened with a phone, place image in intro div
  const intro = document.getElementById("intro");
  intro.appendChild(headShot);
  intro.appendChild(document.createElement("br"));
}
