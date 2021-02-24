import React from "react";
import "./Footer.css";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import imgFooter from "./images/map.jpg";
function Footer() {
  return (
    <div className="footer">
      <div className="foot footer__left">
        <h4 className="footer__header">RLC</h4>
        <div className="footer__list">
          <p href="#">About Hope</p>
          <p>About Hope</p>
          <p>About Hope</p>
          <p>About Hope</p>
        </div>
      </div>
      <div className="foot footer__center">
        <h4 className="footer__header foot__center">Directions</h4>

        <img className="footer__image" src={imgFooter} />
      </div>
      <div className="foot footer__right">
        <h4 className="footer__header foot__right">Contact us</h4>
        <div className="footer__rightBody">
          <PhoneAndroidIcon />
          <h4>Repairer's Life Chapel</h4>
        </div>
        <div className="footer__rightBody">
          <FacebookIcon />
          <h4>Repairer's Life Chapel</h4>
        </div>
        <div className="footer__rightBody">
          <InstagramIcon />
          <h4>Repairer's Life Chapel</h4>
        </div>
        <div className="footer__rightBody">
          <TwitterIcon />
          <h4>Repairer's Life Chapel</h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;
