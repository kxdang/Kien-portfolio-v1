import React from "react";
import HeadlineWithFocus from "../components/HeadlineWithFocus";
import ProjectItems from "../components/ProjectItems";

import Helmet from "react-helmet";

export default () => (
  <div className="c-content-box">
    <Helmet title="Kien's Projects" />
    <HeadlineWithFocus>
      Projects
      {/*<span>What's that?</span>*/}
    </HeadlineWithFocus>
    <p>All projects are live, click on the project name to open them!</p>

    <ProjectItems />
  </div>
);
