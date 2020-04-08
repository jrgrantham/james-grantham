import randM from "../images/randM.png";
import starwars from "../images/starwars.png";
import nasa from "../images/nasa.png";
import darkmode from "../images/darkmode.png";
import weather from "../images/weather.png";
import movie from "../images/movie.png";
import maze from "../images/maze2.png";
import jamesPhoto from "../images/james.jpg";
import artFunder from "../images/artFunder.png";
import message from "../images/message.png";

export const projectsNumber = 3;

export const projectsTitle = "Projects";
export const projectsDescription = "Here are some of the projects I have worked on";
export const projectsLink = "Visit";
export const projectsGitHub = "github";

export const projects = [
  {
    title: "Portfolio",
    uses: "React, Node JS, Axios, Formik",
    comments:
      "Built from scratch using create react app, this site has taken many hours and truly evolved from what it once was.",
    image: jamesPhoto,
    link: "https://jamesgrantham.me/",
    repo: "https://github.com/jrgrantham/james-grantham"
  },
  {
    title: "Art Funder",
    uses: "React, NodeJS, MongoDB",
    comments:
      "An ecommerce site to help under-funded schools sell student art to raise money. Also uses Redux, Axios and Firebase Cloud.",
    image: artFunder,
    link: "https://art-funder.com/",
    repo: "https://github.com/LABS-EU3/Student-Art-Collection-FRONTEND"
  },
  {
    title: "RoboMaze",
    uses: "Python, React, Redux",
    comments:
      "Built during our computer science module, the server uses depth first traversal on a grid of speicifed dimensions to create a maze. The user can use the keyboard or mouse to navigate the robot to a randomly placed exit.",
    image: maze,
    link: "https://mud-2-frontend-nihkors8y.now.sh/",
    repo: "https://github.com/CSEU3-MUDGAME/MUD2_Backend"
  },
  {
    title: "Message-Easy",
    uses: "React, Redux",
    comments:
      "Built as a toy project for my children to be able to message me. All users are shown in a list on the left and can be transferred to the friends list on the right. Friend or not, messages can be sent.",
    image: message,
    link: "https://message-easy.netlify.com/",
    repo: "https://github.com/jrgrantham/message-easy"
  },
  {
    title: "Rick and Morty",
    uses: "React, Axios, Redux",
    comments:
      "Redux is populated using a public API. Chosen characters can be moved to and from a favourites section",
    image: randM,
    link: "",
    repo: ""
  },
  {
    title: "Star Wars",
    uses: "React, Axios",
    comments: "Uses a StarWars public API to fetch a list of characters.",
    image: starwars,
    link: "",
    repo: ""
  },
  {
    title: "NASA Photo",
    uses: "React, Axios",
    comments:
      "The NASA API is used to fetch NASAs photo of the day along with some information",
    image: nasa,
    link: "",
    repo: ""
  },
  {
    title: "DarkMode",
    uses: "React, Local Storage, Hooks",
    comments: "",
    image: darkmode,
    link: "",
    repo: ""
  },
  {
    title: "Weather",
    uses: "React, Axios",
    comments: "",
    image: weather,
    link: "",
    repo: ""
  },
  {
    title: "Movies",
    uses: "React, Axios",
    comments: "",
    image: movie,
    link: "",
    repo: ""
  }
];
