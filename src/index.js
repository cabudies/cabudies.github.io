import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";
import { BrowserRouter as Router, Switch, Route, BrowserRouter, HashRouter, withRouter  } from "react-router-dom";
import HomePage from "../src/demos/SaaSProductLandingPage.js";
// import HomePage from "../demos/SaaSProductLandingPage.js";
import ContactUsPage from "../src/pages/ContactUs.js";
import BlogIndexPage from "../src/components/blogs/PopularAndRecentBlogPosts.js";
import PortfolioPage from "../src/components/cards/TabCardGrid.js";
import CoursesPage from "../src/components/cards/ThreeColSlider.js";

Modal.setAppElement("#root");

ReactDOM.render(
  <HashRouter basename='treact/#'>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
