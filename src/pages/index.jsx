import React from "react";
import Avatar from "../components/Avatar";
import { FaLinkedin, FaGithubSquare, FaCanadianMapleLeaf } from "react-icons/fa";

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
      <div className="c-content-box__contact">
        <div className="c-content-box__contact--logo">
          <a
            href="https://www.linkedin.com/in/kien-dang/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.kiendang.me/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCanadianMapleLeaf id="leaf" />
          </a>
          <a
            href="https://github.com/kxdang"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare />
          </a>
        </div>

      </div>
      <p className="__intro">
        I am a lifelong learner with a passion for solving problems via code. I
        have a technical background in biochemistry and decided to make a career
        change. I created a <a href="https://www.kiendang.me/about">blog</a> to
            document my journey and progress; feel free to take a peek!
      </p>
    </div >
  );
};

export default Index;
