import React, { Component } from "react";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";


export default class ProjectItems extends Component {

  render() {
    const projectRows = this.props.projects.map(item => (
      <tr className="table_light">
        <td>{item.year}</td>
        <td>
          <a href={item.projectLink} target="_blank">
            <FaExternalLinkSquareAlt />
            {item.projectName}
          </a>
        </td>
        <td>{item.built}</td>
        <td>
          {" "}
          <a href={item.github} target="_blank" className="icon">
            <FaGithub />
          </a>
        </td>
      </tr>
    ));
    return (
      <div className="project-div">
        <table>
          <tr>
            <th>Year</th>
            <th>Project Name</th>
            <th>Built with</th>
            <th>Code</th>
          </tr>
          {projectRows}
        </table>


      </div>

    );
  }
}
