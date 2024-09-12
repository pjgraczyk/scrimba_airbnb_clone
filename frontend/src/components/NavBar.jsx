import { Link } from "react-router-dom";
import React from "react";
import { useTheme } from "../theme/ThemeProvider";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  const { theme } = useTheme();

  return (
    <div>
      <nav className={`navbar ${theme}`}>
        <div className="navbar-brand">
          <Link to="/">
            <img src='src/assets/airbnb_logo.svg' className="min-w-32"/>
          </Link>
        </div>
        <ThemeToggle />
      </nav>
    </div>
  );
}
