import React, { Component } from 'react'
import ProjectGridCard from './ProjectGridCard'


export default class ProjectGridStyle extends Component {
    render() {

        const { projects } = this.props

        return (

            <div className="ProjectGrid-Container">
                <ProjectGridCard name={projects[0].projectName} built={projects[0].built} link={projects[0].projectLink} github={projects[0].github} img={require("../images/projects/palette.png")} />
                <ProjectGridCard name={projects[1].projectName} built={projects[1].built} link={projects[1].projectLink} github={projects[1].github} img={require("../images/projects/deckofcards.png")} />
                <ProjectGridCard name={projects[2].projectName} built={projects[2].built} link={projects[2].projectLink} github={projects[2].github} img={require("../images/projects/yahtzee.png")} />

                <ProjectGridCard name={projects[6].projectName} built={projects[6].built} link={projects[6].projectLink} github={projects[6].github} img={require("../images/projects/nexter.png")} />
                <ProjectGridCard name={projects[7].projectName} built={projects[7].built} link={projects[7].projectLink} github={projects[7].github} img={require("../images/projects/trillo.png")} />
                <ProjectGridCard name={projects[8].projectName} built={projects[8].built} link={projects[8].projectLink} github={projects[8].github} img={require("../images/projects/nature.png")} />

                <ProjectGridCard name={projects[3].projectName} built={projects[3].built} link={projects[3].projectLink} github={projects[3].github} img={require("../images/projects/todo.png")} />
                <ProjectGridCard name={projects[4].projectName} built={projects[4].built} link={projects[4].projectLink} github={projects[4].github} img={require("../images/projects/lottomin.png")} />
                <ProjectGridCard name={projects[12].projectName} built={projects[12].built} link={projects[12].projectLink} github={projects[12].github} img={require("../images/projects/blog.png")} />



            </div>


        )
    }
}
