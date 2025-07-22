const leftSide = document.getElementById("leftProjects");
const rightSide = document.getElementById("rightProjects");

function createProjectElement(
  pos,
  dateText,
  titleText = "",
  imageSource = "placeholderWebImage"
) {
  const projectDiv = document.createElement("div");

  projectDiv.className = "project";
  projectDiv.style = "margin-top: " + (pos === 2 ? 300 : 150) + "px;";

  const title = document.createElement("div");
  title.textContent = titleText == "" ? "Project " + pos : titleText;
  title.style = "height:fit-content; width:fit-content; color:blue";
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
    "background-color: black;" + "height: 0.2vh; width:34.93vw; grid-row:2";
  projectDiv.append(underline);

  const image = document.createElement("img");
  image.src = "./Images/" + imageSource + ".png";
  image.style =
    "height: 100px; width:10vw; grid-row:3; grid-column:2; margin-top:10px";
  projectDiv.append(image);

  const description = document.createElement("div");
  description.style =
    "grid-column:1; font-size:15px; width: 20vw; height:80;overflow:auto";
  description.textContent =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur" +
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur" +
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur" +
    "Lorem, ipsum dolor sit.";

  const projectLink = document.createElement("a");
  projectLink.href = "https://github.com/ccopley04/ccopley04.github.io";
  projectLink.style = "color:blue";
  projectLink.textContent = "Click Here To See The Project!";
  projectLink.target = "_blank";

  const codeLink = document.createElement("a");
  codeLink.href = "https://github.com/ccopley04/ccopley04.github.io";
  codeLink.style = "color:blue";
  codeLink.textContent = "Click Here To See The Code Base!";
  codeLink.target = "_blank";

  description.appendChild(document.createElement("br"));
  description.appendChild(projectLink);
  description.appendChild(document.createElement("br"));
  description.appendChild(codeLink);
  projectDiv.append(description);

  if (pos % 2 == 0) {
    rightSide.append(projectDiv);
  } else {
    leftSide.append(projectDiv);
  }
}

createProjectElement(
  1,
  "JUNE 2025 - PRESENT",
  "THIS WEBPAGE",
  "placeholderWebImage"
);
createProjectElement(2, "Date");
createProjectElement(3, "Date");
createProjectElement(4, "Date");
