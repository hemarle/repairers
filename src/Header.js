import React, { useEffect, useRef } from "react";
import couple from "./images/couple.jpg";
import "./Header.css";

import { useIntersection } from "react-use";
import { Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import Love from "@material-ui/icons/FavoriteBorder";

function Header({ leaders }) {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    console.log("Header", state);
  }, [state]);

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__pastor">
          <img src={couple} alt="" />
          <div className="header__about">
            <div className="header__aboutHeader">
              <Love />

              <h3 className="header__text">OLU AKINLOSOTU</h3>
              <Love />
            </div>
            <hr />

            <p>
              We Welcome you to Repairer's Life Chapel, where Christ makes the
              difference
            </p>
          </div>
        </div>
        <div className="header__pastor">
          <img src={couple} alt="" />
          <div className="header__about">
            <h4 className="header__text">OLU AKINLOSOTU</h4>
            <hr />

            <p>
              We Welcome you to Repairer's Life Chapel, where Christ makes the
              difference
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
