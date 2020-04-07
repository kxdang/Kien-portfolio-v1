import React, { Component } from 'react'
import ProjectGridCard from './ProjectGridCard'



export default class ProjectGridStyle extends Component {
    render() {
        console.log(this.props)

        return (
            <div className="ProjectGrid-Container">
                <ProjectGridCard name={this.props.projects[6].projectName} built="HTML · CSS/SASS" img={require("../images/projects/yahtzee.png")} />
                <ProjectGridCard name="Project 1" built="React · Express · Node.js · Firebase · Heroku" img={require("../images/projects/todo.png")} />
                <ProjectGridCard name="Project 1" img={require("../images/projects/trillo.png")} />
                <ProjectGridCard name="Project 1" />
                <ProjectGridCard name="Project 1" />
                <ProjectGridCard name="Project 1" />
            </div>
        )
    }
}
