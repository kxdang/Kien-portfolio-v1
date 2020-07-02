import React from "react";
import HeadlineWithFocus from "../components/HeadlineWithFocus";
import Helmet from "react-helmet";
import PageTransition from 'gatsby-plugin-page-transitions';

import ToolBoxListContainer from "../containers/ToolBoxListContainer";
import ToolBoxListContainerLearning from "../containers/ToolBoxListContainerLearning";

export default () => (
  <PageTransition>
    <div className="c-content-box">
      <Helmet title="Kien's Tools" />

      <HeadlineWithFocus>
        <span>Here are the</span> tools I use
      </HeadlineWithFocus>
      <ToolBoxListContainer />

      <HeadlineWithFocus>
        <span>Tools I am currently</span> learning
      </HeadlineWithFocus>

      <ToolBoxListContainerLearning />

    </div>
  </PageTransition>
);
