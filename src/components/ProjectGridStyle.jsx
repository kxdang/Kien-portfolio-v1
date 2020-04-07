import React, { Component } from 'react'
import ProjectGridCard from './ProjectGridCard'

export default class ProjectGridStyle extends Component {
    render() {
        console.log(this.props)

        return (
            <div className="ProjectGrid-Container">
                <ProjectGridCard name="Project 1" />
                <ProjectGridCard name="Project 1" />
                <ProjectGridCard name="Project 1" />
                <ProjectGridCard name="Project 1" />
                <ProjectGridCard name="Project 1" />
                <ProjectGridCard name="Project 1" />
                <ProjectGridCard name="Project 1" />
                <ProjectGridCard name="Project 1" />
                <ProjectGridCard name="Project 1" />
            </div>
        )
    }
}
