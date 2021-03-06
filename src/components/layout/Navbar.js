import React from "react";
import { FaGithub } from "react-icons/fa";
// import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar(props) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl size-responsive" />
          <Link to="/" className="text-lg font-bold align-middle responsive">
            {props.title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/home" className="btn btn-ghost btn-xl rounded-btn ">Home</Link>
            <Link to="/about" className="btn btn-ghost btn-xl rounded-btn ">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.defaultProps = {
  title: "Github User Finder",
};
Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
