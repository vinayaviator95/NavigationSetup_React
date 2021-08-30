import React from "react";
import { Link } from "react-router-dom";
const Post = () => {
  return (
    <div>
      <h3>Javascript</h3>
      <Link exact to="/postDetails/javascript">
        Details
      </Link>
      <h3>React</h3>
      <Link exact to="/postDetails/react">
        Details
      </Link>
      <h3>Node</h3>
      <Link exact to="/postdetails/node">
        Details
      </Link>
    </div>
  );
};

export default Post;
