const leftSide = document.getElementById("leftProjects");
const rightSide = document.getElementById("rightProjects");

function createProjectElement(pos, dateText, titleText = "") {
  const projectDiv = document.createElement("div");

  projectDiv.className = "project";
  projectDiv.style = "margin-top: " + (pos === 2 ? 300 : 150) + "px;";

  const title = document.createElement("div");
  title.textContent = titleText == "" ? "Project " + pos : titleText;
  title.style = "height:fit-content; width:fit-content;";
  projectDiv.append(title);

  const date = document.createElement("div");
  date.textContent = dateText;
  date.style =
    "margin-right:2px; height:fit-content; width:fit-content; position: absolute;" +
    "justify-self: end;" +
    "align-self: start;";
  projectDiv.append(date);

  const underline = document.createElement("hr");
  underline.style =
    "background-color: black;" + "height: 0.2vh; width:35vw; grid-row:2";
  projectDiv.append(underline);

  if (pos % 2 == 0) {
    rightSide.append(projectDiv);
  } else {
    leftSide.append(projectDiv);
  }
}

createProjectElement(1, "JUNE 2025 - PRESENT", "THIS WEBPAGE");
createProjectElement(2, "Date");
createProjectElement(3, "Date");
createProjectElement(4, "Date");
