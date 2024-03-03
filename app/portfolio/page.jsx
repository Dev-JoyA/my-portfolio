import React from 'react'
import Project from './Project'
import Sidebar from './Sidebar'
import styles from '../page.module.css'


const projects = [
  {
    name: "Miniature profile for Software Engineers",
    description: [
      "Developed a sophisticated miniature application tailored for software engineers.",
      "Key features include viewing the profiles of techies and navigating to their LinkedIn page, enhancing productivity and workflow efficiency.",
      "Employed cutting-edge technologies such as React and Express."
    ],
    githubLink: "https://github.com/Dev-JoyA/Miniature-Profile-App-for-Software-Engineers"
  },
  {
    name: "React Task Tracker",
    description: [
      "Spearheaded the creation of a dynamic task tracker using React, streamlining project management.",
      "Empowered users to optimize time, and documenting work done in a day also, promoting seamless collaboration.",
      "Technologies used: React, HTML, CSS."
    ],
    githubLink: "https://github.com/Dev-JoyA/react-task-tracker"
  },
  {
    name: "Star Wars App",
    description: [
      "Conceptualized and implemented an engaging Star Wars-themed application, catering to enthusiasts of the galaxy far, far away",
      "Delve into the Star Wars universe, exploring characters, planets, and more.",
      "Technologies used: JavaScript, HTML, CSS."
    ],
    githubLink: "https://github.com/Dev-JoyA/Star-Wars"
  },
  {
    name: "Counter App",
    description: [
      "Designed and implemented a versatile Counter App",
      "Technologies used: HTML, CSS."
    ],
    githubLink: "https://github.com/Dev-JoyA/counter-app"
  }
 
 
];

const Amount = () => {
  return (
    <div>
      <Sidebar />
      <div className={styles.container2}>
        <h1 className={styles.h12}>PROJECTS</h1>
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
};


export default Amount