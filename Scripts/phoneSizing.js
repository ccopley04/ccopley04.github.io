//Check if the web page if opened with a phone
let phoneSize = window.innerWidth < window.innerHeight;

if (phoneSize) {
  //If the window is phone, change the header spacing
  const header = document.getElementById("links");
  header.classList.toggle("phone");
}
