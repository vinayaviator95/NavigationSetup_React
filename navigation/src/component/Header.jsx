import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Link exact to="/home">
        <button>Home</button>
      </Link>
      <Link exact to="/post">
        <button>Post</button>
      </Link>
      <Link exact to="/profile">
        <button>Profile</button>
      </Link>
      <Link exact to="/contact">
        <button>Contact</button>
      </Link>
    </div>
  );
};

export default Header;
