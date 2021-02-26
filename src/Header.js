import React, { useEffect, useRef } from "react";
import couple from "./images/couple.jpg";
import "./Header.css";

import { useIntersection } from "react-use";
import { Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import Love from "@material-ui/icons/FavoriteBorder";
import { TimelineMax } from "gsap";

import { Power2 } from "gsap/gsap-core";

function Header({ leaders }) {
  const intersectionRef = document.querySelectorAll(".header");
  const backgroundRef = document.querySelector(".about");
  const tl = new TimelineMax();
  const intersectionHeader = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "300px",
    threshold: 1,
  });

  // useEffect(() => {
  //   console.log(intersectionHeader, "int", backgroundRef);
  // }, [intersectionHeader]);

  // intersectionHeader && intersectionHeader.isIntersecting
  //   ? tl
  //       .fromTo(
  //         ".header__loveIcon",
  //         1.2,
  //         { x: "40%", opacity: 0 },
  //         { x: "0%", opacity: 1, ease: Power2.easeInOut }
  //       )
  //       .fromTo(
  //         ".header__text",
  //         1.2,
  //         { x: "10%", opacity: 0 },
  //         { x: "0%", opacity: 1, ease: Power2.easeInOut }
  //       )
  //       .fromTo(
  //         "hr",
  //         1.2,
  //         { x: "-40%", opacity: 0 },
  //         { x: "0%", opacity: 1, ease: Power2.easeInOut }
  //       )
  //       .fromTo(
  //         ".header__comment",
  //         1.2,
  //         { x: "40%", opacity: 0 },
  //         { x: "0%", opacity: 1, ease: Power2.easeInOut }
  //       )
  //       .fromTo(
  //         ".header__loveIcon",
  //         1.2,
  //         { scale: 1 },
  //         { scale: 1.2, color: "red", ease: Power2.easeInOut }
  //       )
  //   : tl.fromTo(
  //       ".header__about",
  //       1,
  //       { opacity: 0 },
  //       { opacity: 1, ease: Power2.easeInOut }
  //     );
  return (
    <div className="header" ref={intersectionRef}>
      <div className="header__container">
        <div className="header__pastor">
          <img className="header__image " src={couple} alt="" />
          <div className="header__about">
            <div className="header__aboutHeader">
              <Love className="header__loveIcon" />

              <h3 className="header__text">OLU AKINLOSOTU</h3>
              <Love className="header__loveIcon" />
            </div>
            <hr />

            <p className="header__comment">
              We Welcome you to Repairer's Life Chapel, where Christ makes the
              difference
            </p>
          </div>
        </div>
        <div className="header__pastor">
          <img className="header__image " src={couple} alt="" />
          <div className="header__about">
            <div className="header__aboutHeader">
              <Love className="header__loveIcon" />

              <h3 className="header__text">OLU AKINLOSOTU</h3>
              <Love className="header__loveIcon" />
            </div>
            <hr />

            <p className="header__comment">
              We Welcome you to Repairer's Life Chapel, where Christ makes the
              difference
            </p>
          </div>
        </div>
        {/* <div className="header__pastor">
          <img src={couple} alt="" />
          <div className="header__about">
            <h4 className="header__text">OLU AKINLOSOTU</h4>
            <hr />

            <p>
              We Welcome you to Repairer's Life Chapel, where Christ makes the
              difference
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Header;
