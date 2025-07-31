//Retrieve all buttons and invisible picture element
const buttons = document.querySelectorAll(".redirectButton");
const pic = document.getElementById("linkPic");

//An array of all the relative file paths to images
const picLinks = [
  "/Images/resumePlaceholder.jpg",
  "/Images/linkedInPlaceholder.jpg",
  "/Images/githubPic.png",
];

//For all the buttons
buttons.forEach((myButton, index) => {
  //If the mouse enters the button, turn on the image element show the corresponding image
  //Also change the color of the button, depending on dark or light mode
  myButton.addEventListener("mouseenter", () => {
    myButton.style =
      "background-color: " +
      (myButton.classList.contains("dark-mode") ? "white" : "blue");
    pic.src = picLinks[index];
    pic.style = "opacity:1";
  });

  //If the mouse exits the button, turn off the image element
  //Also change color back to default
  myButton.addEventListener("mouseleave", () => {
    myButton.style =
      "background-color: " +
      (myButton.classList.contains("dark-mode") ? "lightblue" : "black");
    pic.style = "opacity:0";
  });
});
