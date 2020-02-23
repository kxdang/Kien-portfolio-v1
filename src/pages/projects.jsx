import React from "react";
import HeadlineWithFocus from "../components/HeadlineWithFocus";
import ProjectList from "../components/ProjectList";
import { FaExternalLink, FaGithub } from "react-icons/fa";
import Helmet from "react-helmet";

export default () => (
  <div className="c-content-box">
    <Helmet title="Kien's Projects" />
    <HeadlineWithFocus>
      Projects
      {/*<span>What's that?</span>*/}
    </HeadlineWithFocus>
    <p>More projects coming with React!</p>
    <ProjectList />
  </div>
);
