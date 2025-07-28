const leftSide = document.getElementById("leftProjects");
const rightSide = document.getElementById("rightProjects");

let phone = window.innerWidth < window.innerHeight;

function confirmDownload(linkElement, gameName, link) {
  linkElement.addEventListener("click", (event) => {
    event.preventDefault();

    const userConfirmed = confirm(
      "Do you want to download the current build of " + gameName + "?"
    );

    if (userConfirmed) {
      const tempLink = document.createElement("a");
      tempLink.href = link;
      tempLink.download = gameName + " Build";
      tempLink.click();
    }
  });
}

function createProjectElement(
  pos,
  dateText,
  titleText = "",
  imageSource = "./Images/placeholderWebImage.png",
  text = "",
  codebaseLink = "https://github.com/ccopley04/ccopley04.github.io",
  showcaseLink = "",
  download = ""
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
    "margin-right:2px; height:1.8vh; width:20vw; grid-column: 3; grid-row:1; text-align:right; justify-self: flex-end;";
  projectDiv.append(date);

  const underline = document.createElement("hr");
  underline.style =
    "background-color: black;" + "height: 0.2vh; width:35.11vw; grid-row:2";
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
    (phone ? "32vw" : "20vw") +
    "; height:32vh;overflow:auto";
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

  description.appendChild(document.createElement("br"));
  description.appendChild(projectLink);

  if (!(codebaseLink == "")) {
    const codeLink = document.createElement("a");
    codeLink.href = codebaseLink;
    codeLink.style = "color:blue";
    codeLink.textContent = "Click Here To See The Code Base!";
    codeLink.target = "_blank";

    description.appendChild(document.createElement("br"));
    description.appendChild(codeLink);
  }

  if (!(download == "")) {
    const downloadLink = document.createElement("a");
    downloadLink.textContent = "Click Here To Download Current Build!";
    downloadLink.style = "color:blue";
    confirmDownload(downloadLink, titleText, download);

    description.appendChild(document.createElement("br"));
    description.appendChild(downloadLink);
  }

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
  "JANUARY 2025 - PRESENT",
  "Electronic ARTrium",
  "./Images/beeMyGuidePic.png",
  "This project is a series of works with the multi-disciplinary team Electronic ARTrium. " +
    "This team works to create interactive, educational experiences that mix physical and digital artistic mediums. " +
    "With this team, I worked on the Spring 2025 exhibit Bee My Guide as a member of the Visual Art and Design subteam. " +
    "I worked on multiple character animations and digital models that were used in the creation of the ensemble of NPC characters." +
    " Additionally, I am currently working as the team lead of the Creative Ideation subteam, working " +
    "to create and plan for the next exhibit to be announced soon.",
  "https://github.gatech.edu/VIP-Electronic-Artrium",
  "https://electronicartrium.ece.gatech.edu/bee-my-guide/"
);
createProjectElement(
  3,
  "JANUARY 2025 - MAY 2025",
  "Mourning Brew",
  "Images/mourningBrew.png",
  "Mourning Brew is a small indie game developed by a team of Georgia Institute of Technology students as part of the Video Game Development Club. " +
    "The game follows the journey of afterlife cafe owner through undead themed mini games and character interactions. As a member of " +
    "the team, I was a software developer who was tasked with refining and designing the movement and walking animation of the diverse set of " +
    "characters. Additionally, I worked on the mini games, most notably I solo designed a rhythm based, baking simulation for the late game content.",
  "https://github.com/cpeng87/Untitled-Ghost-Game",
  "https://cpeng8.itch.io/mourning-brew",
  "Projects/Build 7.22.zip"
);
createProjectElement(
  4,
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
createProjectElement(
  5,
  "OCTOBER 2024 - PRESENT",
  "Three Two One...Draw!",
  "./Images/threeTwoOneDrawPic.png",
  "Three Two One…Draw is my own indie game that I am currently developing as the Design and Software Lead. " +
    "It is a deck building RPG that simulates a real time Western style duel with card mechanics and thematic music and art. " +
    "I have developed a working demo with C# and Unity that showcases the main design of the game, such as deck composition, multiple " +
    "coroutines for time tracking, and an object oriented software architecture. I have also written a thorough game design document that " +
    "pitches the game and is used to find other members for development, such as my new artist and story director.",
  "https://github.com/ccopley04/ThreeTwoOneDraw",
  "https://docs.google.com/document/d/1XyJsGtp7-YXZqh4WxrxR8-FoTENTwVMhkC44NEyeQkA/edit?usp=sharing"
);
createProjectElement(
  6,
  "AUGUST 2024 - NOVEMBER 2024",
  "Humanities Website",
  "./Images/humanitiesWebsitePic.png",
  "This project is a website designed and populated by a team of six for a humanities class that seeks to concisely " +
    "describe love and analyze various works. I worked as the Team Lead and Chief Website Designer of the group and, using " +
    "the software Weebly, designed our UI. Without any coding required, I was able to design and create a user-friendly, " +
    "aesthetic web page that clearly showcases our group's progress and discussions. Additionally, as the Team Lead, I managed the " +
    "members and ensured all the needed work was completed and I worked to define the creative vision for the entire project.",
  "",
  "https://humn2010group2.weebly.com/"
);
