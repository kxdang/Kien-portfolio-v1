import React from "react";
import ToolBoxList from "../components/ToolBoxList";
import ToolBoxPopOver from "../components/ToolBoxPopOver";

class ToolBoxListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.itemListOnClickHandler = this.itemListOnClickHandler.bind(this);
    this.popOverOnClickHandler = this.popOverOnClickHandler.bind(this);
    this.windowResizeHandler = this.windowResizeHandler.bind(this);
    this.windowClickHandler = this.windowClickHandler.bind(this);
    this.windowKeyDownHandler = this.windowKeyDownHandler.bind(this);
    this.deactivatePopOver = this.deactivatePopOver.bind(this);

    this.state = {
      items: [
        {
          id: 1,
          label: "JavaScript",
          description: `I learned JavaScript through MDN, freeCodeCamp and from <a href="https://www.udemy.com/certificate/UC-RIO305CO/" target="_blank">Andrew Mead</a>`,
          comment: `I found multiple resources to learn the fundamentals and ES6+`
        },
        {
          id: 2,
          label: "HTML5 / CSS",
          description: `I learned HTML & CSS through <a href="https://www.freecodecamp.org/certification/kxdang/responsive-web-design" target="_blank">freeCodeCamp</a>, w3schools and Treehouse back in 2017.`,
          comment: `I had initial interest in building websites during school. I recently enrolled in a CSS course to improve my CSS skills.`
        },
        {
          id: 18,
          label: "SCSS/SASS",
          description: `I learned SCSS and SASS through a Udemy course by Jonas Schmedtmann. It covered advanced CSS knowledge which includes Flexbox, Grids and animations.`
        },
        {
          id: 19,
          label: "Github",
          description: `I host all my projects on Github to track my progress in programming.`,
          comment: `My <a href="https://github.com/kxdang" target="_blank">Github</a>`
        },
        {
          id: 7,
          label: "React",
          description: `I've been learning about this library to build web applications.`,
          comment: `My journey is still on-going!`
        },
        {
          id: 9,
          label: "Gatsby",
          description: `I built this website and my personal blog using Gatsby which is a static PWA (Progressive Web App) generator. `,
          comment: `I love the simplicity of Gatsby how fast the websites are.`
        },
        {
          id: 20,
          label: "GraphQL",
          description: `It's a query language for APIs <a href="http://graphql.org/" target="_blank">GraphQL</a>.`,
          comment: `I love learning the latest tech. My <a href="http://graphql.org/" target="_blank">blog</a> currently uses GraphQL to parse its data from the markdown files`
        },
        {
          id: 12,
          label: "Node.js",
          description: `A runtime environment for executing JavaScript code outside of the browser used to build back-end services (APIs) which powers the client applications like web apps and mobile apps`,
          comment: `I completed and my Nodejs and Express bootcamp from <a href="https://www.udemy.com/certificate/UC-YMFEZRDR/" target="_blank">Andrew Mead</a> and a MERN development course from <a href="https://www.udemy.com/certificate/UC-JWMOPYQP/" target="_blank">Academind</a>`
        },
        {
          id: 11,
          label: "MongoDB",
          description: `A NoSQL database program that I've been using in my projects`,
          comment: `I completed a Node.js and Express bootcamp from <a href="https://www.udemy.com/certificate/UC-YMFEZRDR/" target="_blank">Andrew Mead</a> and a MERN development course from <a href="https://www.udemy.com/certificate/UC-JWMOPYQP/" target="_blank">Academind</a>`
        },
        {
          id: 5,
          label: "Express",
          description: `A web application framework for Node.js. It helps organize web applications into an MVC architecture on the server side.`,
          comment: `I learned this along with MongoDB from <a href="https://www.udemy.com/certificate/UC-YMFEZRDR/" target="_blank">Andrew Mead</a>and <a href="https://www.udemy.com/certificate/UC-JWMOPYQP/" target="_blank">Academind</a>.`
        },
        {
          id: 15,
          label: "Wordpress",
          description: `I initially hosted my blog using Wordpress, however, my curiousity lead me to hosting on a Netlify with Gatsby to reduce cost.`,
          comment: `I still remember how to use Wordpress!`
        },
        {
          id: 22,
          label: "Photoshop",
          description: `I use this program recreationally and for other purposes such as to sampling image colours for my personal projects and creating mock-ups.`,
          comment: `Alternatively, I use <a href="https://www.photopea.com/" target="_blank"> Photopea</a> when I'm not on my personal computer`
        },
        {
          id: 23,
          label: "Illustrator",
          description: `I use this program recreationally. I learned all of my skills from YouTube 😅.`
        },
        {
          id: 17,
          label: "PHP",
          description: `Currently learning PHP to make a Spotify clone`,
          comment: `I will be adding this to my projects soon!`
        }
      ],
      activatedItem: null,
      popOver: {
        isActive: false,
        topPx: "auto",
        bottomPX: "auto",
        leftPx: "auto",
        rightPx: "auto",
        description: "",
        comment: ""
      },
      popOverPosition: null
    };
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.windowResizeHandler, false);
      window.addEventListener("click", this.windowClickHandler, false);
      window.addEventListener("keydown", this.windowKeyDownHandler, false);
    }
  }

  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.windowResizeHandler, false);
      window.removeEventListener("click", this.windowClickHandler, false);
      window.removeEventListener("keydown", this.windowKeyDownHandler, false);
    }
  }

  componentWillReceiveProps(nextProps) {
    //
  }

  windowKeyDownHandler(e) {
    if (this.state.activatedItem && e.which == 27) {
      this.deactivatePopOver();
    }
  }

  windowResizeHandler() {
    if (this.state.activatedItem) {
      this.deactivatePopOver();
    }
  }

  windowClickHandler(e) {
    const isValidClickTarget =
      e.target.nodeName === "A" || e.target.nodeName === "BUTTON"
        ? true
        : false;
    if (!isValidClickTarget && this.state.activatedItem) {
      this.deactivatePopOver();
    }
  }

  itemListOnClickHandler(e, id) {
    const anchor = {
      offsetTop: e.target.offsetTop,
      offsetLeft: e.target.offsetLeft,
      offsetWidth: e.target.offsetWidth,
      offsetHeight: e.target.offsetHeight
    };
    /*
      check why the initial shape of the code does'n work in iPhone 4
      it semas as array.find() function is not transpiled corectlyu
      const popOver = this.state.items.find(el => el.id === id);
    */
    const popOver = this.state.items.filter(el => el.id === id)[0];
    this.positionPopOver(anchor, popOver);

    this.setState(() => ({
      activatedItem: id
    }));
  }

  positionPopOver(anchor, popOver) {
    const popWidth = 200;
    const popHeight = 100;
    const body = document.querySelector("body");

    const spaceUnder =
      body.offsetHeight - anchor.offsetTop - anchor.offsetHeight;
    const spaceOnRight =
      body.offsetWidth - anchor.offsetLeft - anchor.offsetWidth;

    const verticalPositionUnder = spaceUnder >= anchor.offsetTop ? true : false;
    const horizontalPositionOnRight =
      spaceOnRight >= anchor.offsetLeft ? true : false;

    const verticalPosition = verticalPositionUnder
      ? anchor.offsetTop
      : anchor.offsetTop - popHeight + anchor.offsetHeight;
    const horizontalPosition = horizontalPositionOnRight
      ? anchor.offsetLeft
      : anchor.offsetLeft - popWidth + anchor.offsetWidth;

    const topPx = verticalPositionUnder
      ? `${anchor.offsetTop + anchor.offsetHeight}px`
      : `auto`;
    const bottomPx = verticalPositionUnder
      ? `auto`
      : `${body.offsetHeight - anchor.offsetTop}px`;
    const leftPx = horizontalPositionOnRight
      ? `${anchor.offsetLeft}px`
      : `auto`;
    const rightPx = horizontalPositionOnRight
      ? `auto`
      : `${body.offsetWidth - anchor.offsetLeft - anchor.offsetWidth}px`;
    const positionUnderModifierClass = "";

    this.setState(() => ({
      popOver: {
        isActive: true,
        topPx: topPx,
        bottomPx: bottomPx,
        leftPx: leftPx,
        rightPx: rightPx,
        modifierClasses: `${positionUnderModifierClass}`,
        description: popOver.description,
        comment: popOver.comment
      },
      popOverPosition: verticalPositionUnder ? "under" : "above"
    }));
  }

  popOverOnClickHandler() {
    this.deactivatePopOver();
  }

  deactivatePopOver() {
    this.setState(() => ({
      popOver: {
        isActive: false
      },
      activatedItem: null,
      popOverPosition: null
    }));
  }

  render() {
    return (
      <div>
        <ToolBoxList
          items={this.state.items}
          activatedItem={this.state.activatedItem}
          itemOnClick={this.itemListOnClickHandler}
          popOverPosition={this.state.popOverPosition}
        />
        {this.state.popOver.isActive && (
          <ToolBoxPopOver
            top={this.state.popOver.topPx}
            bottom={this.state.popOver.bottomPx}
            left={this.state.popOver.leftPx}
            right={this.state.popOver.rightPx}
            modifierClasses={this.state.popOver.modifierClasses}
            description={this.state.popOver.description}
            comment={this.state.popOver.comment}
            onClick={this.popOverOnClickHandler}
          />
        )}
      </div>
    );
  }
}

export default ToolBoxListContainer;
