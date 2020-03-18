import React, { Component } from 'react'
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";

export default class ProjectItems extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          key: 1,
          year: '2020',
          projectName: 'Simple Todo List',
          projectLink: "https://kien-react-todo.netlify.com/",
          built: 'React',
          github: 'https://github.com/kxdang/react-todo-list'
        },
        {
          key: 2,
          year: '2020',
          projectName: 'LottoMin',
          projectLink: "https://kien-lotto-min.netlify.com/",
          built: 'React',
          github: 'https://github.com/kxdang/LottoMin'
        },
        {
          key: 3,
          year: '2020',
          projectName: 'Disco Colour Box',
          projectLink: "https://kien-disco-boxes.netlify.com/",
          built: 'React',
          github: 'https://github.com/kxdang/color-box-reactapp'
        },
        {
          key: 4,
          year: '2020',
          projectName: 'Realtor Website',
          projectLink: "https://kien-realtor-site.netlify.com/",
          built: 'HTML · CSS/SASS',
          github: 'https://github.com/kxdang/kien-realtor-site'
        },
        {
          key: 5,
          year: '2020',
          projectName: 'Trillo Web App',
          projectLink: "https://kien-trillo-app.netlify.com/",
          built: 'HTML · CSS/SASS',
          github: 'https://github.com/kxdang/kien-trillo-app'
        },
        {
          key: 6,
          year: '2020',
          projectName: 'Nature Landing Page',
          projectLink: "https://kien-nature-site.netlify.com/",
          built: 'HTML · CSS/SASS',
          github: 'https://github.com/kxdang/kien-nature-website'
        },
        {
          key: 7,
          year: '2020',
          projectName: 'Places App',
          projectLink: "https://mern-places-udemy.firebaseapp.com/",
          built: 'React · Express · Node.js · Firebase · Heroku',
          github: 'https://github.com/kxdang/mern-places-app'
        },
        {
          key: 8,
          year: '2019',
          projectName: 'Weather App',
          projectLink: "https://dang-sweater-weather.herokuapp.com/",
          built: 'JavaScript · Node.js · Mapbox API · Darksky API · Heroku',
          github: 'https://github.com/kxdang/sweather-app'
        },
        {
          key: 9,
          year: '2019',
          projectName: 'RFQ Checker',
          projectLink: "https://www.kiendang.me/029-automated-job-process/",
          built: 'Visual Basics for Applications',
          github: 'https://github.com/kxdang/Excel-Macros-Checker'
        },
        {
          key: 10,
          year: '2019',
          projectName: 'Personal Blog',
          projectLink: "https://www.kiendang.me/029-automated-job-process/",
          built: 'React · Gatsby · Netlify · GraphQL',
          github: 'https://github.com/kxdang/kiendang.me'
        },
        {
          key: 11,
          year: '2016',
          projectName: 'PyFileOrganizer',
          projectLink: "https://www.kiendang.me/029-automated-job-process/",
          built: 'Python',
          github: 'https://github.com/kxdang/Organizing-File'
        },

      ]
    }
  }


  render() {

    const projectRows = this.state.projects.map(item => (
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
          <a
            href={item.github}
            target="_blank"
            className="icon"
          >
            <FaGithub />
          </a>
        </td>
      </tr>

    ))
    return (
      <div>
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
    )
  }
}
