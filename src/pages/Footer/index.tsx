import React from "react";

// Assets
import usa_flag from "~/assets/usa-flag.png";
import arrow_up from "~/assets/ico-back-to-top.svg";
import facebook_logo from "~/assets/facebook.svg";
import instagram_logo from "~/assets/instagram.svg";

// Styles
import { Container } from "./styles";

const Footer = () => (
  <Container>
    <div>
      <div id="social">
        <p>24/7 Prayer</p>
        <a href="#f">
          <img src={facebook_logo} alt="Facebook link" />
        </a>
        <a href="#i">
          <img src={instagram_logo} alt="Instagram link" />
        </a>
      </div>
      <div id="address">
        <img src={usa_flag} alt="USA flag" />
        <address>
          <p>Orlando, EUA</p>
          <p>111 E. Monument Avenue </p>
          <p>Suite 141</p>
          <p>+1 (321) 123-4567</p>
        </address>
      </div>
    </div>
    <a href="#main">
      <img src={arrow_up} alt="Back to top button" />
    </a>
  </Container>
);

export default Footer;
