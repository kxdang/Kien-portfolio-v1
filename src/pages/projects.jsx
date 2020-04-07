import React, { Component } from "react";
import HeadlineWithFocus from "../components/HeadlineWithFocus";
import ProjectItems from "../components/ProjectItems";
import ProjectGridStyle from "../components/ProjectGridStyle"
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';



import Helmet from "react-helmet";

class Project extends Component {

  static defaultProps = {
    projects: [{
      key: 14,
      year: "2020",
      projectName: "Palette App",
      projectLink: "https://kien-react-colour-palette.netlify.com/",
      built: "React · Material UI · Chroma.js · Emoji Mart",
      github: "https://github.com/kxdang/react-milestone-palette-app",
      img: "../images/projects/palette.png"
    },
    {
      key: 13,
      year: "2020",
      projectName: "Deck of Cards",
      projectLink: "https://kien-react-deckofcards.netlify.com/",
      built: "React · Deck of Cards API",
      github: "https://github.com/kxdang/react-deck-of-cards",
      img: "../images/projects/deckofcards.png"
    },
    {
      key: 12,
      year: "2020",
      projectName: "Yahtzee",
      projectLink: "https://kien-react-yahtzee.netlify.com/",
      built: "React",
      github: "https://github.com/kxdang/react-yahtzee",
      img: "../images/projects/yahtzee.png"
    },
    {
      key: 11,
      year: "2020",
      projectName: "Todo List",
      projectLink: "https://kien-react-todo.netlify.com/",
      built: "React",
      github: "https://github.com/kxdang/react-todo-list",
      img: "../images/projects/todo.png"
    },
    {
      key: 10,
      year: "2020",
      projectName: "LottoMin",
      projectLink: "https://kien-lotto-min.netlify.com/",
      built: "React",
      github: "https://github.com/kxdang/LottoMin",
      img: "../images/projects/lottomin.png"
    },
    {
      key: 9,
      year: "2020",
      projectName: "Disco",
      projectLink: "https://kien-disco-boxes.netlify.com/",
      built: "React",
      github: "https://github.com/kxdang/color-box-reactapp",
      img: "../images/projects/disco.png"
    },
    {
      key: 8,
      year: "2020",
      projectName: "Realtor Website",
      projectLink: "https://kien-realtor-site.netlify.com/",
      built: "HTML · CSS/SASS",
      github: "https://github.com/kxdang/kien-realtor-site",
      img: "../images/projects/nexter.png"
    },
    {
      key: 7,
      year: "2020",
      projectName: "Trillo Web App",
      projectLink: "https://kien-trillo-app.netlify.com/",
      built: "HTML · CSS/SASS",
      github: "https://github.com/kxdang/kien-trillo-app",
      img: "../images/projects/trillo.png"
    },
    {
      key: 6,
      year: "2020",
      projectName: "Nature Page",
      projectLink: "https://kien-nature-site.netlify.com/",
      built: "HTML · CSS/SASS",
      github: "https://github.com/kxdang/kien-nature-website",
      img: "../images/projects/nature.png"
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
      projectLink: "https://www.kiendang.me/",
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
      toggle: 0,
      viewDisplay: 'gridDisplay' //0 for gridDisplay, 1 for listDisplay
    };
    this.changeView = this.changeView.bind(this)
  }

  changeView() {
    if (this.state.viewDisplay === 'gridDisplay') {
      return this.setState({ toggle: 1, viewDisplay: 'listDisplay' })
    }

    if (this.state.viewDisplay === 'listDisplay') {
      return this.setState({ toggle: 0, viewDisplay: 'gridDisplay' })
    }
  }

  render() {

    return (

      <div className="c-content-box project">
        <Helmet title="Kien's Projects" />
        <HeadlineWithFocus>
          Projects
         </HeadlineWithFocus>
        <div className="slider-container">
          <Slider defaultValue={this.state.toggle} dots={true} min={0} max={1} step={1} marks={{ 0: 'Featured', 1: 'List View' }} onAfterChange={this.changeView} />
        </div>

        <div className="c-content-box project">
          {this.state.viewDisplay === 'gridDisplay' ? <ProjectGridStyle projects={this.props.projects} /> : <ProjectItems projects={this.props.projects} />}
        </div>



      </div>





    )
  }

}




export default Project