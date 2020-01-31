import React from "react";
import Avatar from "../components/Avatar";

import HeadlineWithFocus from "../components/HeadlineWithFocus";

const Index = props => {
  return (
    <div className="c-content-box">
      <Avatar modifierClasses="c-avatar--as-logo" />

      <h2>Hello World, My name is Kien</h2>
      <HeadlineWithFocus
        modifierClassNames={`
          c-headline-focus 
          c-headline-focus--super-big 
        `}
      >
        I'm a front-end web developer.
      </HeadlineWithFocus>
      <p className="__intro">
        I'm a life-long learner with a passion for solving problems via code. I
        have a technical background in biochemistry and decided to make a career
        change. I created a blog to document my journey and progress, feel free
        to take a peak!
      </p>
    </div>
  );
};

export default Index;
