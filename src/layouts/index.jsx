import React from "react";

import { connect } from "react-redux";
import Helmet from "react-helmet";

import "../scss/main.scss";
require("typeface-exo");
require("typeface-roboto");

import RemarkScreenContainer from "../containers/RemarkScreenContainer";

import MainFooter from "../components/MainFooter";
import MainHeader from "../components/MainHeader";

class DefaultLayout extends React.Component {
  render() {
    return (
      <div className="l-page-wrapper">
        <Helmet
          title="Kien Dang"
          meta={[
            {
              name: "description",
              content: `I build web applications:  HTML5, CSS, CSS3, JavaScript, BEM, React, Gatsby, Webpack ...`
            }
          ]}
        />

        <div className={`l-page-container`}>
          <MainHeader />
          <main className="l-main">{this.props.children()}</main>
          <MainFooter />
        </div>
        {this.props.location.pathname === "/" ||
          this.props.location.pathname === "/contact/"}
        <RemarkScreenContainer
          locationPathName={this.props.location.pathname}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { remarkScreenisActive: state.remarkScreen.isActive };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);
