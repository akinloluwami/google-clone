import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { BsGrid3X3Gap } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

function Home() {
  return (
    <div className="home">
      <div className="homeHeader">
        <div className="homeHeaderLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="homeHeaderRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <BsGrid3X3Gap />
          <FaUserCircle />
        </div>
      </div>
      <div className="homeBody">
        <h1>A LUU SINPEE</h1>
      </div>
    </div>
  );
}

export default Home;
