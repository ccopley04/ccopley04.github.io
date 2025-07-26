const leftSide = document.getElementById("leftProjects");
const rightSide = document.getElementById("rightProjects");

let phone = window.innerWidth < window.innerHeight;

function createProjectElement(
  pos,
  dateText,
  titleText = "",
  imageSource = "./Images/placeholderWebImage.png",
  text = "",
  codebaseLink = "https://github.com/ccopley04/ccopley04.github.io",
  showcaseLink = "https://github.com/ccopley04/ccopley04.github.io"
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
    "margin-right:2px; height:1.8vh; width:fit-content; grid-column: 3; grid-row:1; text-align:right; justify-self: flex-end;";
  projectDiv.append(date);

  const underline = document.createElement("hr");
  underline.style =
    "background-color: black;" + "height: 0.2vh; width:34.93vw; grid-row:2";
  projectDiv.append(underline);

  if (!phone) {
    const image = document.createElement("img");
    image.src = imageSource;
    image.style =
      "height: 25vh; width:15vw; grid-row:3; grid-column:2; margin-top:10px; border:3px solid blue";
    projectDiv.append(image);
  }

  const description = document.createElement("div");
  description.style =
    "grid-column:1; font-size:15px; width: " +
    (phone ? "34vw" : "20vw") +
    "; height:30vh;overflow:auto";
  description.textContent =
    text === ""
      ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur" +
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur" +
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur" +
        "Lorem, ipsum dolor sit."
      : text;

  const projectLink = document.createElement("a");
  projectLink.href = showcaseLink;
  projectLink.style = "color:blue";
  projectLink.textContent = "Click Here To See The Project!";
  projectLink.target = "_blank";

  const codeLink = document.createElement("a");
  codeLink.href = codebaseLink;
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
  "JULY 2025 - PRESENT",
  "Coding Portfolio",
  "/Images/codingPortfolioShowcase.png",
  "This website acts as my personal coding portfolio that showcases my coding projects and directs users to their respective codebases." +
    " I created this website using my working knowledge of JavaScript, HTML, and CSS. " +
    "This project specifically utilizes my proficiency with front end development while also serving as an accessible gateway to my numerous coding works. " +
    "I will update it with features and projects going forward so it remains an up to date showcase of my proficiencies.",
  "https://github.com/ccopley04/ccopley04.github.io",
  "https://ccopley04.github.io/"
);
createProjectElement(
  2,
  "JUNE 2025 - AUGUST 2025",
  "Political Ideology Calculator",
  "Images/politicalIdeologyShowcase.png",
  "This project is a webpage that is designed to take user input on a number of political axes." +
    " The user provides the numeric values, which generate specific " +
    "ideologies, and the Gemini AI API is called to generate an all encompassing political ideology. " +
    "This project was made with JavaScript, HTML, and CSS and implements coding concepts such as binary trees, API usage, " +
    "and interpreting multi-dimensional data. The remaining updates I will continue to add are" +
    " increasingly specific political ideology to grant the user more specificity.",
  "https://github.com/ccopley04/PoliticalIdeologyCalculator",
  "https://ccopley04.github.io/PoliticalIdeologyCalculator/"
);
createProjectElement(3, "Date");
createProjectElement(4, "Date");
