const buttons = document.querySelectorAll(".redirectButton");
const pic = document.getElementById("linkPic");

const picLinks = [
  "/Images/resumePlaceholder.jpg",
  "/Images/linkedInPlaceholder.jpg",
  "/Images/gitHubPlaceholder.jpg",
];

buttons.forEach((myButton, index) => {
  myButton.addEventListener("mouseenter", () => {
    myButton.style =
      "background-color: " +
      (myButton.classList.contains("dark-mode") ? "white" : "blue");
    pic.src = picLinks[index];
    pic.style = "opacity:1";
  });

  myButton.addEventListener("mouseleave", () => {
    myButton.style =
      "background-color: " +
      (myButton.classList.contains("dark-mode") ? "lightblue" : "black");
    pic.style = "opacity:0";
  });
});
