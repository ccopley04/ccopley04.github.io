//Retrieve the HTML div that contain the projects
const leftSide = document.getElementById("leftProjects");
const rightSide = document.getElementById("rightProjects");

//Check if the web page if opened with a phone
let phone = window.innerWidth < window.innerHeight;

//This function takes in title, HTML element, and a download link
//It ensures that when the link is clicked, the browser asks the user before downloading
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

//Constructor for a new project
function createProjectElement(
  pos,
  dateText,
  titleText = "",
  imageSource = "./Images/placeholderWebImage.png",
  text = "",
  codebaseLink = "",
  showcaseLink = "",
  download = ""
) {
  //Creates the all encompassing element
  const projectDiv = document.createElement("div");

  projectDiv.className = "project";
  projectDiv.style = "margin-top: " + (pos === 2 ? 300 : 150) + "px;";

  //Create a title with the parameter titleText, add it to the project element
  const title = document.createElement("div");
  title.className = "title";
  title.textContent = titleText == "" ? "Project " + pos : titleText;
  title.style = "height:fit-content; width:fit-content; color:blue";
  projectDiv.append(title);

  //Create a date with the parameter dateText, add it to the project element
  const date = document.createElement("div");
  date.textContent = dateText;
  date.style =
    "margin-right:2px; height:1.8vh; width:20vw; grid-column: 3; grid-row:1; text-align:right; justify-self: flex-end;";
  projectDiv.append(date);

  //Create a border between the first and third row
  const underline = document.createElement("hr");
  underline.className = "underline";
  underline.style = "height: 0.2vh; width:35.91vw; grid-row:2;margin-top:1vh";
  projectDiv.append(underline);

  //Create an image element
  const image = document.createElement("img");
  image.className = "image";
  image.src = imageSource;
  projectDiv.append(image);

  //Create a description with the parameter text
  const description = document.createElement("div");
  description.style =
    "grid-column:1; font-size:15px; width: " +
    (phone ? "33vw" : "20vw") +
    "; height:32.5vh;overflow:auto; margin-top:0.5vh";
  description.textContent =
    text === ""
      ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur" +
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur" +
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur" +
        "Lorem, ipsum dolor sit."
      : text;

  //If the project needs a final product link, create one with the showcaseLink parameter
  //Add it to the description element
  if (!(showcaseLink == "")) {
    const projectLink = document.createElement("a");
    projectLink.href = showcaseLink;
    projectLink.style = "color:blue";
    projectLink.textContent = "Click Here To See The Project!";
    projectLink.target = "_blank";

    description.appendChild(document.createElement("br"));
    description.appendChild(projectLink);
  }

  //If the project needs a link to the code, create one with the codebaseLink parameter
  //Add it to the description element
  if (!(codebaseLink == "")) {
    const codeLink = document.createElement("a");
    codeLink.href = codebaseLink;
    codeLink.style = "color:blue";
    codeLink.textContent = "Click Here To See The Code Base!";
    codeLink.target = "_blank";

    description.appendChild(document.createElement("br"));
    description.appendChild(codeLink);
  }

  //If the project needs a download link, create one with the downloadLink parameter
  //Add it to the description element
  if (!(download == "")) {
    const downloadLink = document.createElement("a");
    downloadLink.textContent = "Click Here To Download Current Build!";
    downloadLink.style = "color:blue";
    confirmDownload(downloadLink, titleText, download);

    description.appendChild(document.createElement("br"));
    description.appendChild(downloadLink);
  }

  //Add the description to the project element
  projectDiv.append(description);

  //If the position of the project is even, place it on the right side
  //Place it on the left otherwise
  if (pos % 2 == 0) {
    rightSide.append(projectDiv);
  } else {
    leftSide.append(projectDiv);
  }

  //Increase the center line size to fit all projects
  const centerLine = document.getElementById("centerLine");
  centerLine.style = "height: " + pos * 35 + "vh;";
}

//Use the constructor function to create 7 projects
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
  "MAY 2025 - PRESENT",
  "Slay The Spire Mod",
  "./Images/stsModPic.png",
  "This project is a character mod for the deck building game Slay the Spire. " +
    "This mod includes my own custom character for the game, along with the character’s " +
    "custom made deck, and was designed with the guidance of the Basic Mod tutorial. " +
    "This project was done in Java and showcases my proficiency in object oriented programming " +
    "as well as my ability to interpret and utilize a large library of code that I did not write. " +
    "The remaining work on this project will consist of adding character specific cards and relics, while " +
    "continuing to manipulate the underlying code written by the Slay the Spire developers.",
  "https://github.com/ccopley04/STS_Mod_Tank"
);
createProjectElement(
  3,
  "JANUARY 2025 - PRESENT",
  "Electronic ARTrium",
  "./Images/beeMyGuidePic.png",
  "This project is a series of works with the multi-disciplinary team Electronic ARTrium. " +
    "This team works to create interactive, educational experiences that mix physical and digital artistic mediums. " +
    "With this team, I worked on the Spring 2025 exhibit Bee My Guide as a member of the Visual Art and Design subteam. " +
    "I was tasked using Unity and C# to design NPC character animations." +
    " Additionally, I am currently working as the team lead of the Creative Ideation subteam, working " +
    "to create and plan for the next exhibit to be announced soon.",
  "https://github.gatech.edu/VIP-Electronic-Artrium",
  "https://electronicartrium.ece.gatech.edu/bee-my-guide/"
);

createProjectElement(
  4,
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
  5,
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
  6,
  "JANUARY 2025 - MAY 2025",
  "Mourning Brew",
  "Images/mourningBrew.png",
  "Mourning Brew is a small indie game developed by a team of Georgia Tech students as part of the Video Game Development Club. " +
    "The game follows the journey of afterlife cafe owner and compiles a ton of fun mini games to be enjoyed. " +
    "As a member of " +
    "the team, I was a software developer who used C# and Unity and was tasked with designing the movement and walking animations of the " +
    "characters. Additionally, I worked on the mini games, most notably I solo designed a rhythm based, baking simulation for the early game content.",
  "https://github.com/cpeng87/Untitled-Ghost-Game",
  "https://cpeng8.itch.io/mourning-brew",
  "./Projects/Build 7.22.zip"
);
createProjectElement(
  7,
  "APRIL 2025 - MAY 2025",
  "Notes Application",
  "./Images/notesApplicationPic.png",
  "This project is a simple UI that acts as a note taking application to record and rank different start up ideas." +
    " I programmed this project with Java and made use of the JavaFX library to create a slick UI with all important " +
    "functionality needed for note taking. The application can save ideas and write them to a text database, rank the ideas " +
    "by a formula that looks at all of the idea's features, as well as a real time visual showcase of all your current ideas. This " +
    "project allowed me to develop my UI skills as well as gain a proficiency with JavaFX and work with crucial Java concepts such as file " +
    "writing and event handling. ",
  "",
  "",
  "./Projects/NotesApplication.zip"
);
createProjectElement(
  8,
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
