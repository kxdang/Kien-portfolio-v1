import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

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
        <a href="https://mern-places-udemy.firebaseapp.com/">
          <FaExternalLinkSquareAlt />
          Places App
        </a>
      </td>
      <td>React · Express · Node.js · Firebase · Heroku</td>
      <td>
        {" "}
        <a
          href="https://github.com/kxdang/mern-places-app"
          target="_blank"
          className="icon"
        >
          <FaGithub />
        </a>
      </td>
    </tr>
    <tr>
      <td>2019</td>
      <td>
        <a href="https://dang-sweater-weather.herokuapp.com/" target="_blank">
          <FaExternalLinkSquareAlt />
          Weather App
        </a>
      </td>
      <td>JavaScript · Node.js · Mapbox API · Darksky API · Heroku</td>
      <td>
        <a
          href="https://github.com/kxdang/sweather-app"
          target="_blank"
          className="icon"
        >
          <FaGithub />
        </a>
      </td>
    </tr>

    <tr className="table_light">
      <td>2019</td>
      <td>
        <a
          href="https://www.kiendang.me/029-automated-job-process/"
          target="_blank"
        >
          <FaExternalLinkSquareAlt />
          RFQ Checker
        </a>
      </td>
      <td>Visual Basics for Applications</td>
      <td>
        <a
          href="https://github.com/kxdang/Excel-Macros-Checker"
          target="_blank"
          className="icon"
        >
          <FaGithub />
        </a>
      </td>
    </tr>

    <tr className="table_light">
      <td>2019</td>
      <td>
        <a href="https://www.kiendang.me" target="_blank">
          <FaExternalLinkSquareAlt />
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
        <a href="https://github.com/kxdang/Organizing-File" target="_blank">
          <FaExternalLinkSquareAlt />
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
