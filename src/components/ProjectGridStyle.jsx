import React, { Component } from "react";
import ProjectGridCard from "./ProjectGridCard";

const projects = {
  notcodenames: {
    key: 15,
    year: "2020",
    projectName: "Not Codenames",
    projectLink: "https://notcodenames.com",
    built: "React · Firebase",
    github: "https://github.com/kxdang/notcodenames",
    img: "notcodenames",
  },
  paletteapp: {
    key: 14,
    year: "2020",
    projectName: "Palette App",
    projectLink: "https://kien-react-colour-palette.netlify.com/",
    built: "React · Material UI · Chroma.js · Emoji Mart",
    github: "https://github.com/kxdang/react-milestone-palette-app",
    img: "palette",
  },
  pomodoroapp: {
    key: 13,
    year: "2020",
    projectName: "Pomodoro Timer",
    projectLink: "https://kien-pomodoro-timer.netlify.app/",
    built: "React",
    github: "https://github.com/kxdang/react-pomodoro-timer",
    img: "pomodoro",
  },
  realtor: {
    key: 8,
    year: "2020",
    projectName: "Realtor Website",
    projectLink: "https://kien-realtor-site.netlify.com/",
    built: "HTML · CSS/SASS",
    github: "https://github.com/kxdang/kien-realtor-site",
    img: "nexter",
  },
  trillo: {
    key: 7,
    year: "2020",
    projectName: "Trillo Web App",
    projectLink: "https://kien-trillo-app.netlify.com/",
    built: "HTML · CSS/SASS",
    github: "https://github.com/kxdang/kien-trillo-app",
    img: "trillo",
  },
  deck: {
    key: 1341,
    year: "2020",
    projectName: "Deck of Cards",
    projectLink: "https://kien-react-deckofcards.netlify.com/",
    built: "React · Deck of Cards API",
    github: "https://github.com/kxdang/react-deck-of-cards",
    img: "deckofcards",
  },
  todo: {
    key: 11,
    year: "2020",
    projectName: "Todo List",
    projectLink: "https://kien-react-todo.netlify.com/",
    built: "React",
    github: "https://github.com/kxdang/react-todo-list",
    img: "todo",
  },
  lotto: {
    key: 10,
    year: "2020",
    projectName: "LottoMin",
    projectLink: "https://kien-lotto-min.netlify.com/",
    built: "React",
    github: "https://github.com/kxdang/LottoMin",
    img: "../images/projects/lottomin.png",
  },
  rfq: {
    key: 3,
    year: "2019",
    projectName: "RFQ Checker",
    projectLink: "https://www.kiendang.me/029-automated-job-process/",
    built: "Visual Basics for Applications",
    github: "https://github.com/kxdang/Excel-Macros-Checker",
  },
  nature: {
    key: 8,
    year: "2020",
    projectName: "Realtor Website",
    projectLink: "https://kien-realtor-site.netlify.com/",
    built: "HTML · CSS/SASS",
    github: "https://github.com/kxdang/kien-realtor-site",
    img: "../images/projects/nexter.png",
  },

}

export default class ProjectGridStyle extends Component {
  render() {

    return (
      <div className="ProjectGrid-Container">
        <ProjectGridCard
          key={projects.notcodenames.key}
          name={projects.notcodenames.projectName}
          built={projects.notcodenames.built}
          link={projects.notcodenames.projectLink}
          github={projects.notcodenames.github}
          img={require(`../images/projects/${projects.notcodenames.img}.png`)}
        />

        <ProjectGridCard
          key={projects.paletteapp.key}
          name={projects.paletteapp.projectName}
          built={projects.paletteapp.built}
          link={projects.paletteapp.projectLink}
          github={projects.paletteapp.github}
          img={require(`../images/projects/${projects.paletteapp.img}.png`)}
        />

        <ProjectGridCard
          key={projects.pomodoroapp.key}
          name={projects.pomodoroapp.projectName}
          built={projects.pomodoroapp.built}
          link={projects.pomodoroapp.projectLink}
          github={projects.pomodoroapp.github}
          img={require(`../images/projects/${projects.pomodoroapp.img}.png`)}
        />

        <ProjectGridCard
          key={projects.deck.key}
          name={projects.deck.projectName}
          built={projects.deck.built}
          link={projects.deck.projectLink}
          github={projects.deck.github}
          img={require(`../images/projects/${projects.deck.img}.png`)}
        />

        <ProjectGridCard
          key={projects.realtor.key}
          name={projects.realtor.projectName}
          built={projects.realtor.built}
          link={projects.realtor.projectLink}
          github={projects.realtor.github}
          img={require(`../images/projects/${projects.realtor.img}.png`)}
        />

        <ProjectGridCard
          key={projects.trillo.key}
          name={projects.trillo.projectName}
          built={projects.trillo.built}
          link={projects.trillo.projectLink}
          github={projects.trillo.github}
          img={require("../images/projects/trillo.png")}
        />

        <ProjectGridCard
          key={projects.todo.key}
          name={projects.todo.projectName}
          built={projects.todo.built}
          link={projects.todo.projectLink}
          github={projects.todo.github}
          img={require("../images/projects/todo.png")}
        />

        <ProjectGridCard
          key={projects.lotto.key}
          name={projects.lotto.projectName}
          built={projects.lotto.built}
          link={projects.lotto.projectLink}
          github={projects.lotto.github}
          img={require("../images/projects/lottomin.png")}
        />

        <ProjectGridCard
          key={projects.rfq.key}
          name={projects.rfq.projectName}
          built={projects.rfq.built}
          link={projects.rfq.projectLink}
          github={projects.rfq.github}
          img={require("../images/projects/blog.png")}
        />
      </div>
    );
  }
}
