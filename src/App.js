import React, { useRef } from "react";
import "./App.css";
import Navigation from "./Navigation";
import Header from "./Header";
import Background from "./Background";
import Body from "./Body";
import About from "./About";
import Footer from "./Footer";
import SermonPost from "./SermonPost";
import AddPost from "./AddPost";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Gallery from "./Gallery";
import Sermon from "./Sermon";
import BackendLogic from "./BackendLogic";
import Event from "./Event";
import Title from "./Title";

function App() {
  return (
    <Router>
      <div className="app">
        <BackendLogic />
        <Navigation />

        <Switch>
          <Route exact path="/home">
            <Redirect to="/" />
          </Route>
          <Route exact path="/">
            <>
              <Background />
              <About />
              <Title title="Our Pastors" />
              <Header />

              <Title title="Latest Sermon" />
              <Body />

              {/* <Title title="Upcoming Events" /> */}
              <Event />
            </>
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/sermon">
            <Sermon />
          </Route>
          <Route path="/sermons/:roomid">
            <SermonPost />
          </Route>
          <Route path="/admin">
            <AddPost />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
