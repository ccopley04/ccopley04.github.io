const leftSide = document.getElementById("leftProjects");
const rightSide = document.getElementById("rightProjects");

function createProjectElement(pos) {
  const projectDiv = document.createElement("div");

  projectDiv.className = "project";
  projectDiv.style =
    "margin-top: " + (((pos + 1) % 2) + 1) * 150 + "px; display:flex";
  projectDiv.textContent = "Project " + pos;

  if (pos % 2 == 0) {
    rightSide.append(projectDiv);
  } else {
    leftSide.append(projectDiv);
  }
}

createProjectElement(1);
createProjectElement(2);
createProjectElement(3);
createProjectElement(4);
