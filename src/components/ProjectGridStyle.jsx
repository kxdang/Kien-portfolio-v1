import React, { Component } from "react";
import ProjectGridCard from "./ProjectGridCard";

export default class ProjectGridStyle extends Component {
  render() {
    const { projects } = this.props;
    return (
      <div className="ProjectGrid-Container">
        <ProjectGridCard
          name={projects[0].projectName}
          built={projects[0].built}
          link={projects[0].projectLink}
          github={projects[0].github}
          img={require("../images/projects/notcodenames.png")}
        />
        <ProjectGridCard
          name={projects[1].projectName}
          built={projects[1].built}
          link={projects[1].projectLink}
          github={projects[1].github}
          img={require("../images/projects/palette.png")}
        />
        <ProjectGridCard
          name={projects[2].projectName}
          built={projects[2].built}
          link={projects[2].projectLink}
          github={projects[2].github}
          img={require("../images/projects/deckofcards.png")}
        />


        <ProjectGridCard
          name={projects[8].projectName}
          built={projects[8].built}
          link={projects[8].projectLink}
          github={projects[8].github}
          img={require("../images/projects/nexter.png")}
        />
        <ProjectGridCard
          name={projects[9].projectName}
          built={projects[9].built}
          link={projects[9].projectLink}
          github={projects[9].github}
          img={require("../images/projects/trillo.png")}
        />
        <ProjectGridCard
          name={projects[10].projectName}
          built={projects[10].built}
          link={projects[10].projectLink}
          github={projects[10].github}
          img={require("../images/projects/nature.png")}
        />

        <ProjectGridCard
          name={projects[4].projectName}
          built={projects[4].built}
          link={projects[4].projectLink}
          github={projects[4].github}
          img={require("../images/projects/todo.png")}
        />
        <ProjectGridCard
          name={projects[5].projectName}
          built={projects[5].built}
          link={projects[5].projectLink}
          github={projects[5].github}
          img={require("../images/projects/lottomin.png")}
        />
        <ProjectGridCard
          name={projects[13].projectName}
          built={projects[13].built}
          link={projects[13].projectLink}
          github={projects[13].github}
          img={require("../images/projects/blog.png")}
        />
      </div>
    );
  }
}
