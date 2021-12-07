import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Footer = () => (
  <footer>
    <a href='https://github.com/mikekuhl'>
      <FontAwesomeIcon icon={[fab, "github"]} />
      Made By Michael Milsap
    </a>
  </footer>
);
