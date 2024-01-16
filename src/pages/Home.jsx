import React from "react";
import HomeNavbar from "../navbars/HomeNavbar.jsx";
import Footer from "../Footer/Footer.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <HomeNavbar />
      <Link to="/shop">
        <button className="button is-focused is-medium">Enter</button>
      </Link>
      <Footer />
    </>
  );
};

export default Home;
