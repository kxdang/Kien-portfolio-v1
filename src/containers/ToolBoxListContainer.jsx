import React from "react";
import ToolBoxList from "../components/ToolBoxList";
import ToolBoxPopOver from "../components/ToolBoxPopOver";
import FaUser from "react-icons/lib/fa/user";

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
          id: 3,
          label: "HTML5 / CSS",
          description: `I learned HTML & CSS through <a href="https://www.freecodecamp.org/certification/kxdang/responsive-web-design" target="_blank">freeCodeCamp</a>, w3schools and Treehouse back in 2017.`,
          comment: `I had initial interest in building websites during school. I recently enrolled in a CSS course to improve my CSS skills.`
        },
        {
          id: 21,
          label: "SCSS/SASS",
          description: `I learned SCSS and SASS through a Udemy course by Jonas Schmedtmann. It covered advanced CSS knowledge which includes Flexbox, Grids and animations.`
        },
        {
          id: 5,
          label: "BEM",
          description: `I follow the BEM (Block, Element, Modifier) approach 
            <a href="https://en.bem.info/" target="_blank">approach</a> to web development.`
        },

        {
          id: 19,
          label: "Github",
          description: `A web-based Git version control repository hosting service.`,
          comment: `My <a href="https://github.com/kxdang" target="_blank">Github</a>`
        },
        {
          id: 7,
          label: "React",
          description: `A JavaScript <a href="https://reactjs.org/" target="_blank">library</a> for building user interfaces. 
            React makes it painless to create interactive UIs. Build encapsulated components 
            that manage their own state and then compose them to make complex UIs.`,
          comment: `I've been in love since using it for the first time.`
        },
        {
          id: 9,
          label: "Gatsby",
          description: `A static PWA (Progressive Web App) 
            <a href="https://www.gatsbyjs.org/" target="_blank">generator</a>. Gatsby lets 
            you build blazing-fast sites with your data, whatever the source.`,
          comment: `The website you are looking at now is built with Gatsby.`
        },
        {
          id: 20,
          label: "GraphQL",
          description: `It's a query language for APIs. <a href="http://graphql.org/" target="_blank">GraphQL</a> 
          gives clients the power to ask for exactly what they need and nothing more.`,
          comment: `The <a href="https://www.graph.cool/" target="_blank">Graphcool</a> framework and its
          <b>Cloud</b> service manages the GraphQL backend for my <a href="https://github.com/greglobinski/lazywill-demo" target="_blank">app.</a>`
        },
        {
          id: 10,
          label: "Banana",
          description: `A TypeScript-based open-source front-end web application 
            <a href="https://angular.io/" target="_blank">platform</a>.`
        },
        {
          id: 11,
          label: "ArangoDB / AQL",
          description: `A multi-model mostly-memory <a href="https://www.arangodb.com/" target="_blank">database</a>
            with a flexible data model for documents and graphs. It is designed as 
            a “general purpose database”, offering all the features you typically need for modern web applications.`
        },
        {
          id: 12,
          label: "npm",
          description: `A package <a href="https://www.npmjs.com/" target="_blank">manager</a> for 
            the JavaScript programming language.`
        },
        {
          id: 13,
          label: "Webpack",
          description: `An open-source JavaScript module <a href="https://webpack.js.org/" target="_blank">bundler</a>.
            Webpack takes modules with dependencies and generates static assets representing those modules.`
        },
        {
          id: 14,
          label: "jQuery",
          description: `A cross-platform JavaScript <a href="https://jquery.com/" target="_blank">library</a> designed to simplify 
            the client-side scripting of HTML.`,
          comment: `I used it much and often ... in the past.`
        },
        {
          id: 15,
          label: "Wordpress",
          description: `The largest self-hosted <a href="https://wordpress.org/" target="_blank">blogging tool</a>
            in the world, used on millions of sites.`,
          comment: `I've built some websites using it. Like  
            <a href="http://polishlanguage.dlachetnych.pl/" target="_blank">this</a> one or 
            <a href="http://lab.gregloby.com/" target="_blank">that</a> one.`
        },
        {
          id: 17,
          label: "PHP",
          description: `A server-side scripting <a href="http://php.net/" target="_blank">language</a> designed primarily 
            for web development but also used as a general-purpose programming language.`,
          comment: `Currently, my only contact with PHP is when theming WP.`
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
