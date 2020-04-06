import React from "react";
import HeadlineWithFocus from "../components/HeadlineWithFocus";
import Obfuscate from "react-obfuscate";
import { FaEnvelopeOpen, FaTwitter } from "react-icons/fa";
import Helmet from "react-helmet";

export default (props) => {
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
          If you are reaching me via phone, please note that I am actively using{" "}
          <a href="https://youtu.be/O4jOdVTkqS4?t=11" target="__blank">
            Google Call Screen
          </a>{" "}
          service to defer frequent robocalls. Your call will be transcribed and
          I will pick up once you are screened.
        </p>
      </div>
    </div>
  );
};
