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
        <a href="https://kien-react-todo.netlify.com/" target="_blank">
          <FaExternalLinkSquareAlt />
          Simple Todo List
        </a>
      </td>
      <td>React</td>
      <td>
        {" "}
        <a
          href="https://github.com/kxdang/react-todo-list"
          target="_blank"
          className="icon"
        >
          <FaGithub />
        </a>
      </td>
    </tr>

    <tr className="table_light">
      <td>2020</td>
      <td>
        <a href="https://kien-lotto-min.netlify.com/" target="_blank">
          <FaExternalLinkSquareAlt />
          LottoMin
        </a>
      </td>
      <td>React</td>
      <td>
        {" "}
        <a
          href="https://github.com/kxdang/LottoMin"
          target="_blank"
          className="icon"
        >
          <FaGithub />
        </a>
      </td>
    </tr>

    <tr className="table_light">
      <td>2020</td>
      <td>
        <a href="https://kien-disco-boxes.netlify.com/" target="_blank">
          <FaExternalLinkSquareAlt />
          Disco Colour Box
        </a>
      </td>
      <td>React</td>
      <td>
        {" "}
        <a
          href="https://github.com/kxdang/color-box-reactapp"
          target="_blank"
          className="icon"
        >
          <FaGithub />
        </a>
      </td>
    </tr>

    <tr className="table_light">
      <td>2020</td>
      <td>
        <a href="https://kien-realtor-site.netlify.com/" target="_blank">
          <FaExternalLinkSquareAlt />
          Realtor Website
        </a>
      </td>
      <td>HTML · CSS/SASS</td>
      <td>
        {" "}
        <a
          href="https://github.com/kxdang/kien-realtor-site"
          target="_blank"
          className="icon"
        >
          <FaGithub />
        </a>
      </td>
    </tr>

    <tr className="table_light">
      <td>2020</td>
      <td>
        <a href="https://kien-trillo-app.netlify.com/" target="_blank">
          <FaExternalLinkSquareAlt />
          Trillo Web App
        </a>
      </td>
      <td>HTML · CSS/SASS</td>
      <td>
        {" "}
        <a
          href="https://github.com/kxdang/kien-trillo-app"
          target="_blank"
          className="icon"
        >
          <FaGithub />
        </a>
      </td>
    </tr>

    <tr className="table_light">
      <td>2020</td>
      <td>
        <a href="https://kien-nature-site.netlify.com/" target="_blank">
          <FaExternalLinkSquareAlt />
          Nature Landing Page
        </a>
      </td>
      <td>HTML · CSS/SASS</td>
      <td>
        {" "}
        <a
          href="https://github.com/kxdang/kien-nature-website"
          target="_blank"
          className="icon"
        >
          <FaGithub />
        </a>
      </td>
    </tr>
    <tr>
      <td>2020</td>
      <td>
        <a href="https://mern-places-udemy.firebaseapp.com/" target="_blank">
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
