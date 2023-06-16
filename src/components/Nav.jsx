import React from "react";
import { Link } from "react-router-dom";


export default function Nav() {
  return (
    <div className="topnav">
      <Link className="active" to="Home">Home</Link>
      <Link to="News">News</Link>
      <Link to="Contact">Contact</Link>
      <Link to="About">About</Link>
    </div>
  );
}