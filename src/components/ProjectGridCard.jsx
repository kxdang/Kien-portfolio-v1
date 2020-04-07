import React, { Component } from 'react'
import { GoLinkExternal } from "react-icons/go";
import { FaGithub } from "react-icons/fa";



export default class ProjectGridCard extends Component {
    render() {
        return (
            <div className="ProjectGridCard">
                <div className="ProjectGridCard-heading">
                    <h1>{this.props.name}</h1>
                    <div className="ProjectGridCard-Links"><a href="www.github.com/kxdang"><FaGithub /></a><a href=""><GoLinkExternal /></a></div>

                </div>
                <div className="ProjectGridCard-image">
                    <img src={this.props.img} />

                </div>
                <div className="ProjectGridCard-description"><p>{this.props.built}</p></div>
            </div >

        )
    }
}
