//Check if the web page if opened with a phone
let phoneSize = window.innerWidth < window.innerHeight;

if (phoneSize) {
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
  const intro = document.getElementsByClassName("horizontal-container");
  Array.from(intro).forEach((button) => {
    button.style = "";
    button.classList.toggle("phone");
  });

  //If window is phone, change the project header height
  const projectHeader = document.getElementById("projectHeader");
  projectHeader.classList.toggle("phone");
}
