import randM from "../images/randM.png";
import starwars from "../images/starwars.png";
import nasa from "../images/nasa.png";
import darkmode from "../images/darkmode.png";
import weather from "../images/weather.png";
import movie from "../images/movie.png";
import maze from "../images/maze2.png";
import jamesPhoto from "../images/james.jpg";
import artFunder from "../images/artFunder.png";

export const projectsNumber = 5;

export const projectsTitle = "Projects";
export const projectsDescription = "Here are some of the projects I have worked on";
export const projectsLink = "Visit";
export const projectsGitHub = "github";

export const projects = [
  {
    title: "Portfolio",
    description: "Personal Website",
    uses: "React, Axios, Redux",
    comments:
      "",
    image: jamesPhoto,
    link: "https://jamesgrantham.me/",
    repo: "https://github.com/jrgrantham/james-grantham"
  },
  {
    title: "Art Funder",
    description: "Lambda School Labs",
    uses: "React, Axios, Redux",
    comments:
      "",
    image: artFunder,
    link: "https://art-funder.com/",
    repo: "https://github.com/LABS-EU3/Student-Art-Collection-FRONTEND"
  },
  {
    title: "RoboMaze",
    description: "Lambda School Build Week",
    uses: "Python, React, Axios, Redux",
    comments:
      "",
    image: maze,
    link: "https://mud-2-frontend-nihkors8y.now.sh/",
    repo: "https://github.com/CSEU3-MUDGAME/MUD2_Backend"
  },
  {
    title: "Rick and Morty",
    description: "Lambda School Sprint Challenge",
    uses: "React, Axios, Redux",
    comments:
      "Redux is populated using a public API. Chosen characters can be moved to and from a favourites section",
    image: randM,
    link: "",
    repo: ""
  },
  {
    title: "Star Wars",
    description: "Lambda school sprint challenge",
    uses: "React, Axios",
    comments: "Uses a StarWars public API to fetch a list of characters.",
    image: starwars,
    link: "",
    repo: ""
  },
  {
    title: "NASA Photo",
    description: "Lambda School Project",
    uses: "React, Axios",
    comments:
      "The NASA API is used to fetch NASAs photo of the day along with some information",
    image: nasa,
    link: "",
    repo: ""
  },
  {
    title: "DarkMode",
    description: "Lambda School Project",
    uses: "React, Local Storage, Hooks",
    comments: "",
    image: darkmode,
    link: "",
    repo: ""
  },
  {
    title: "Weather",
    description: "Lambda School Project",
    uses: "React, Axios",
    comments: "",
    image: weather,
    link: "",
    repo: ""
  },
  {
    title: "Movies",
    description: "Lambda School Project",
    uses: "React, Axios",
    comments: "",
    image: movie,
    link: "",
    repo: ""
  }
];
