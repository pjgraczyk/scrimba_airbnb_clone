// src/components/Footer.jsx
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <footer className="footer">
      <GitHubIcon className="footer-icon" />
      <LinkedInIcon className="footer-icon" />
      <FacebookIcon className="footer-icon" />
      <InstagramIcon className="footer-icon" />
    </footer>
  );
}
