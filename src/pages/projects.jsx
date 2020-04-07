import React, { Component } from "react";
import HeadlineWithFocus from "../components/HeadlineWithFocus";
import ProjectItems from "../components/ProjectItems";
import ProjectGridStyle from "../components/ProjectGridStyle"

import Helmet from "react-helmet";

class Project extends Component {

  static defaultProps = {
    projects: [
      {
        key: 13,
        year: "2020",
        projectName: "Deck of Cards",
        projectLink: "https://kien-react-deckofcards.netlify.com/",
        built: "React",
        github: "https://github.com/kxdang/react-deck-of-cards"
      },
      {
        key: 12,
        year: "2020",
        projectName: "Yahtzee Game",
        projectLink: "https://kien-react-yahtzee.netlify.com/",
        built: "React",
        github: "https://github.com/kxdang/react-yahtzee"
      },
      {
        key: 11,
        year: "2020",
        projectName: "Simple Todo List",
        projectLink: "https://kien-react-todo.netlify.com/",
        built: "React",
        github: "https://github.com/kxdang/react-todo-list"
      },
      {
        key: 10,
        year: "2020",
        projectName: "LottoMin",
        projectLink: "https://kien-lotto-min.netlify.com/",
        built: "React",
        github: "https://github.com/kxdang/LottoMin"
      },
      {
        key: 9,
        year: "2020",
        projectName: "Disco Colour Box",
        projectLink: "https://kien-disco-boxes.netlify.com/",
        built: "React",
        github: "https://github.com/kxdang/color-box-reactapp"
      },
      {
        key: 8,
        year: "2020",
        projectName: "Realtor Website",
        projectLink: "https://kien-realtor-site.netlify.com/",
        built: "HTML · CSS/SASS",
        github: "https://github.com/kxdang/kien-realtor-site"
      },
      {
        key: 7,
        year: "2020",
        projectName: "Trillo Web App",
        projectLink: "https://kien-trillo-app.netlify.com/",
        built: "HTML · CSS/SASS",
        github: "https://github.com/kxdang/kien-trillo-app"
      },
      {
        key: 6,
        year: "2020",
        projectName: "Nature Landing Page",
        projectLink: "https://kien-nature-site.netlify.com/",
        built: "HTML · CSS/SASS",
        github: "https://github.com/kxdang/kien-nature-website"
      },
      {
        key: 5,
        year: "2020",
        projectName: "Places App",
        projectLink: "https://mern-places-udemy.firebaseapp.com/",
        built: "React · Express · Node.js · Firebase · Heroku",
        github: "https://github.com/kxdang/mern-places-app"
      },
      {
        key: 4,
        year: "2019",
        projectName: "Weather App",
        projectLink: "https://dang-sweater-weather.herokuapp.com/",
        built: "JavaScript · Node.js · Mapbox API · Darksky API · Heroku",
        github: "https://github.com/kxdang/sweather-app"
      },
      {
        key: 3,
        year: "2019",
        projectName: "RFQ Checker",
        projectLink: "https://www.kiendang.me/029-automated-job-process/",
        built: "Visual Basics for Applications",
        github: "https://github.com/kxdang/Excel-Macros-Checker"
      },
      {
        key: 2,
        year: "2019",
        projectName: "Personal Blog",
        projectLink: "https://www.kiendang.me/029-automated-job-process/",
        built: "React · Gatsby · Netlify · GraphQL",
        github: "https://github.com/kxdang/kiendang.me"
      },
      {
        key: 1,
        year: "2016",
        projectName: "PyFileOrganizer",
        projectLink: "https://www.kiendang.me/029-automated-job-process/",
        built: "Python",
        github: "https://github.com/kxdang/Organizing-File"
      }
    ]
  }
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="c-content-box project">
        <Helmet title="Kien's Projects" />
        <HeadlineWithFocus>
          Projects
        {/*<span>What's that?</span>*/}
        </HeadlineWithFocus>
        <p>All projects are live, click on the project name to open them!</p>
        <div style={{ minHeight: "500px" }}>
          {/* <ProjectItems projects={this.props.projects} /> */}
          <ProjectGridStyle projects={this.props.projects} />
        </div>


      </div>
    )
  }

}




export default Project