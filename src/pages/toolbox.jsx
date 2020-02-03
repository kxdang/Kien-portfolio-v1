import React from "react";
import HeadlineWithFocus from "../components/HeadlineWithFocus";
import Helmet from "react-helmet";

import ToolBoxListContainer from "../containers/ToolBoxListContainer";

export default () => (
  <div className="c-content-box">
    <Helmet title="Kien's Tools" />

    <HeadlineWithFocus>
      <span>Here are the</span> tools I use
    </HeadlineWithFocus>
    <ToolBoxListContainer />
  </div>
);
