import React, { useEffect } from "react";
import "./Background.css";
import { useIntersection } from "react-use";

import { TimelineMax } from "gsap";
import { Power2 } from "gsap/gsap-core";

import { Controller, Scene } from "react-scrollmagic";
function Background() {
  const intersectionRef = document.querySelectorAll(".background__content");
  const tl = new TimelineMax();

  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  intersection && intersection.intersectionRatio < 0.5
    ? tl.fromTo(
        intersectionRef,
        2,
        { opacity: 1 },
        { opacity: 0, ease: Power2.easeInOut }
      )
    : tl.fromTo(intersectionRef, 2, { opacity: 0 }, { opacity: 1 });

  return (
    <div className="background">
      <div className="background__content" ref={intersectionRef}>
        <h1>Upcoming Event</h1>
        <h3>Grace and Glory Conference</h3>
        <p> 21/06/2021</p>
      </div>
    </div>
  );
}

export default Background;
