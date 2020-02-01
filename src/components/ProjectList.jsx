import React from "react";
import { FaGithub } from "react-icons/lib/fa/";

const ProjectList = () => (
  <table>
    <tr>
      <th>Year</th>
      <th>Project Name</th>
      <th>Built with</th>
      <th>Code</th>
    </tr>

    <tr className="table_light">
      <td>2020</td>
      <td>
        <a href="#">Places App</a>
      </td>
      <td>React · Express · Node.js · Firebase · Heroku</td>
      <td>
        <a href="%" className="icon">
          <FaGithub />
        </a>
      </td>
    </tr>
    <tr>
      <td>2019</td>
      <td>
        <a href="https://dang-sweater-weather.herokuapp.com/">
          Weather Application
        </a>
      </td>
      <td>JavaScript · Node.js · Mapbox API · Darksky API </td>
      <td>
        <a href="%" className="icon">
          <FaGithub />
        </a>
      </td>
    </tr>

    <tr className="table_light">
      <td>2019</td>
      <td>
        <a href="https://www.kiendang.me" target="_blank">
          Personal Blog
        </a>
      </td>
      <td>React · Gatsby · Netlify · GraphQL</td>
      <td>
        <a
          href="https://github.com/kxdang/gatsbyblog"
          target="_blank"
          className="icon"
        >
          <FaGithub />
        </a>
      </td>
    </tr>

    <tr className="table_light">
      <td>2016</td>
      <td>
        <a href="https://www.kiendang.me" target="_blank">
          PyFileOrganizer
        </a>
      </td>
      <td>Python</td>
      <td>
        <a
          href="https://github.com/kxdang/Organizing-File"
          target="_blank"
          className="icon"
        >
          <FaGithub />
        </a>
      </td>
    </tr>
  </table>
);

export default ProjectList;