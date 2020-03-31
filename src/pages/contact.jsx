import React from "react";
import HeadlineWithFocus from "../components/HeadlineWithFocus";
import Obfuscate from "react-obfuscate";
import { FaEnvelopeOpen, FaTwitter } from "react-icons/fa";
import Helmet from "react-helmet";

export default props => {
  return (
    <div className="c-content-box">
      <Helmet title="Contact me" />

      <HeadlineWithFocus>
        You can get in touch <span>anytime through</span>
      </HeadlineWithFocus>
      <ul className="c-contact-list">
        <li className="c-contact-list__item">
          <FaEnvelopeOpen />
          <Obfuscate email="hello@kien.dev" />
        </li>
        <li className="c-contact-list__item">
          <FaTwitter />
          <a
            href="https://twitter.com/k1dang"
            target="_blank"
            rel="noopener noreferrer"
          >
            k1dang
          </a>
        </li>
      </ul>
      <div>
        <p className="__contact">
          If you are reaching me via phone and hear a robot on the line, please
          note that I am using a{" "}
          <a href="" target="__blank">
            Google Call Screen
          </a>{" "}
          service to combat the increasing robocalls in the GTA. I will have a
          live transcript of your message and will pick up once you are
          screened.
        </p>
      </div>
    </div>
  );
};
