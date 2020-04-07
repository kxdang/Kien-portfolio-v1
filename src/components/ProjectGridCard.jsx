import React, { Component } from 'react'
import { GoLinkExternal } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
export default class ProjectGridCard extends Component {
    render() {
        return (
            <div className="ProjectGridCard">
                <div className="ProjectGridCard-heading">
                    <h1>{this.props.name}</h1>
                    <div className="ProjectGridCard-Links"><FaGithub /><GoLinkExternal /></div>
                </div>

            </div >

        )
    }
}
