import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { BsGrid3X3Gap } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import Search from "../../components/Search";
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
          <BsGrid3X3Gap className="icon" />
          <FaUserCircle className="icon" />
        </div>
      </div>
      <div className="homeBody">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <Search />

        <p>
          Google offered in: <span>Hausa</span> <span>Igbo</span>
          <span>Èdè Yorùbá </span> <span>Nigerian Pidgin</span>
        </p>
      </div>
    </div>
  );
}

export default Home;
