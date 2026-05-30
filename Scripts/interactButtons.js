//Retrieve all buttons and invisible picture element
const buttons = document.querySelectorAll(".redirectButton");
const pic = document.getElementById("linkPic");

//An array of all the relative file paths to images
const picLinks = [
  "/Images/ResumePic.png",
  "/Images/linkedInPlaceholder.jpg",
  "/Images/githubPic.png",
];

//For all the buttons
buttons.forEach((myButton, index) => {
  //If the mouse enters the button, show the corresponding image and highlight the button
  myButton.addEventListener("mouseenter", () => {
    myButton.style.backgroundColor = myButton.classList.contains("dark-mode") ? "#334155" : "#3b82f6";
    myButton.style.color = "#ffffff";
    pic.src = picLinks[index];
    pic.style.opacity = "1";
  });

  //If the mouse exits the button, restore the default button and hide the image
  myButton.addEventListener("mouseleave", () => {
    myButton.style.backgroundColor = myButton.classList.contains("dark-mode") ? "#1e293b" : "#0f172a";
    myButton.style.color = myButton.classList.contains("dark-mode") ? "#e2e8f0" : "#f1f5f9";
    pic.style.opacity = "0";
  });
});
