import React from "react";
import TasksTracker from "./assets/tasks-tracker.png";
import MoviesApp from "./assets/movies-app.png";
import TicTacToe from "./assets/tic-tac-toe.png";
import RockPaperScissors from "./assets/rock-paper-scissors.png";
import EasyBuy from "./assets/easybuy.png";
import Card from "./Card";

function Projects() {
  const projectDetails = [
    {
      title: "EasyBuy - E-commerce site",
      desc: "Developed a user-friendly e-commerce website with a secure authentication system, ensuring that users can sign up, login, and manage their accounts easily.",
      tech: ["HTML5", "React JS", "Firebase"],
      github: "https://github.com/vamsi-tupakula/EasyBuy",
      livesite: "https://easybuy-v1.netlify.app",
      img: EasyBuy,
    },
    {
      title: "TasksTracker",
      desc: "Implemented a tagging feature for to-do items, simplifying organization and enabling filtering. Utilized local storage for task persistence.",
      tech: ["HTML5", "React JS", "Tailwind CSS"],
      github: "https://github.com/vamsi-tupakula/TasksTracker",
      livesite: "https://taskstracker-version1.netlify.app/",
      img: TasksTracker,
    },
    {
      title: "Tic-Tac-Toe",
      desc: "Designed and developed a fully functional Tic Tac Toe game to showcase my problem solving skills and a strong understanding of game logic and user interface design.",
      tech: ["HTML5", "CSS3", "React JS"],
      github: "https://github.com/vamsi-tupakula/tic-tac-toe-react",
      livesite: "https://tic-tac-toe-version1.netlify.app/",
      img: TicTacToe,
    },
    {
      title: "Movies Database App",
      desc: "A web app which is similar to movies database. we can search movie name to get the details about the movie ",
      tech: ["HTML5", "CSS3", "React JS"],
      github: "https://github.com/vamsi-tupakula/Movies_Search_App",
      livesite: "https://main--creative-queijadas-1b4b50.netlify.app/",
      img: MoviesApp,
    },
    {
      title: "Rock Paper Scissors",
      desc: "Created an interactive Rock, Paper, Scissors game where players can choose their moves by clicking on corresponding buttons. ",
      tech: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/vamsi-tupakula/rock-paper-scissors",
      livesite: "https://vamsi-tupakula.github.io/rock-paper-scissors/",
      img: RockPaperScissors,
    },
  ];

  return (
    <section className="flex flex-col gap-2 justify-center text-center min-h-screen text-white py-3">
      <h1 className="blackops text-5xl font-bold sm:text-8xl">PROJECTS</h1>
      <div className="cards px-4 my-4 grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center">
        {projectDetails.map((project, index) => {
          return <Card details={project} key={index} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
