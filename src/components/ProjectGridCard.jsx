import React, { Component } from 'react'
import { GoLinkExternal } from "react-icons/go";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";



export default class ProjectGridCard extends Component {
    render() {
        return (
            <div className="ProjectGridCard">
                <div className="ProjectGridCard-heading">
                    <div className="ProjectGridCard-heading--name">
                        <h1><a href={this.props.link} target="_target">{this.props.name}<FaExternalLinkAlt class="ProjectGridCard-external" /></a><a href=""></a></h1>
                    </div>

                    <div className="ProjectGridCard-Github"><a href={this.props.github}><FaGithub /></a></div>

                </div>
                <div className="ProjectGridCard-image">
                    <img src={this.props.img} />

                </div>

                <div className="ProjectGridCard-description"><p>{this.props.built}</p></div>
            </div >

        )
    }
}
