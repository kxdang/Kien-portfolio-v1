import React from "react";
import HeadlineWithFocus from "../components/HeadlineWithFocus";
import Helmet from "react-helmet";
import PageTransition from 'gatsby-plugin-page-transitions';

import ToolBoxListContainer from "../containers/ToolBoxListContainer";

export default () => (
  <PageTransition transitionTime={200}>
    <div className="c-content-box">
      <Helmet title="Kien's Tools" />

      <HeadlineWithFocus>
        <span>Here are the</span> tools I use
    </HeadlineWithFocus>
      <ToolBoxListContainer />

    </div>
  </PageTransition>
);
