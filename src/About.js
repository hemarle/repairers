import React, { useEffect, useRef } from "react";
import "./About.css";
import { TimelineMax } from "gsap";
import { useIntersection } from "react-use";
function About() {
  //   const churchNameRef = document.querySelector(".about__churchName");
  let churchNameRef = useRef(null);
  let textRef = useRef(null);
  let bodyRef = useRef(null);
  let aboutRef = document.querySelectorAll(".about");

  let tl = new TimelineMax();

  const intersection = useIntersection(aboutRef, {
    root: document.querySelector(".background"),
    rootMargin: "0px",
    threshold: 0.5,
  });

  const fadeIn = () => {
    tl.fromTo(aboutRef, 1, { x: "10%" }, { x: "20%" });
  };
  const fadeOut = () => {
    tl.fromTo(aboutRef, 1, { x: "-10%" }, { x: "0" });
  };

  intersection && intersection.intersectionRatio < 0.5 ? fadeOut() : fadeIn();

  return (
    <div ref={aboutRef} className="about">
      <h2 className="about__churchName" ref={churchNameRef}>
        Repairer's Life Chapel
      </h2>
      <p ref={(el) => (textRef = el)}>
        You need a place where you belong, where people are real and they really
        care for you. At Grace we love people and we love Jesus. No matter what
        you like, where you’re from or where you’ve been Grace is a place where
        you are loved. Come experience God this week.
      </p>

      <div className="about__body">
        <h4 ref={(el) => (bodyRef = el)}>GATHERING TIMES</h4>
        <div className="about__content">
          <div className="about__c c1">
            <h5>MID-WEEK SERVICES</h5>
            <hr />
            <p>Wednesday Healing Service @10:30am</p>
          </div>

          <div className="about__c c2">
            <h5>WEEKEND SERVICES</h5>
            <hr />
            <p>SAturday Prayer Service @10:30am</p>
          </div>

          <div className="about__c c3">
            <h5>MID-WEEK SERVICES</h5>
            <hr />
            <p>Wednesday Healing Service @10:30am</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
