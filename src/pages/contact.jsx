import React from "react";
import HeadlineWithFocus from "../components/HeadlineWithFocus";
import Obfuscate from "react-obfuscate";
import { FaEnvelopeO, FaLinkedin, FaGithub } from "react-icons/lib/fa/";
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
          <FaEnvelopeO />
          <Obfuscate email="hello@kien.dev" />
        </li>
        <li className="c-contact-list__item">
          <FaLinkedin />
          <a
            href="https://www.linkedin.com/in/kien-dang/"
            target="_blank"
            rel="noopener noreferrer"
          >
            kien-dang
          </a>
        </li>
        <li className="c-contact-list__item">
          <FaGithub />
          <a
            href="https://github.com/kxdang"
            target="_blank"
            rel="noopener noreferrer"
          >
            kxdang
          </a>
        </li>
      </ul>
    </div>
  );
};
