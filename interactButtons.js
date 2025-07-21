const buttons = document.querySelectorAll(".redirectButton");

buttons.forEach((myButton, index) => {
  myButton.addEventListener("mouseenter", () => {
    myButton.style = "background-color: blue";
  });

  myButton.addEventListener("mouseleave", () => {
    myButton.style = "background-color: white";
  });
});
