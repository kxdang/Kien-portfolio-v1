import React, { Component } from 'react'
import { GoLinkExternal } from "react-icons/go";
export default class ProjectGridCard extends Component {
    render() {
        return (
            <div className="ProjectGridCard">
                <div className="ProjectGridCard-heading">
                    <h1>{this.props.name}</h1>
                    <div className="ProjectGridCard-svg"><GoLinkExternal /></div>
                </div>

            </div >

        )
    }
}
