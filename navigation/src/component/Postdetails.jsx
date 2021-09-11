import React from "react";

const Postdetails = (props) => {
  return (
    <div>
      {console.log(props)}
      PostDetails
      {/* <h1>{props.match.params.topic}</h1> */}
      {props.match.params.topic === "javascript"
        ? "javascript"
        : props.match.params.topic === "node"
        ? "node"
        : props.match.params.topic === "react"
        ? "React"
        : null}
    </div>
  );
};

export default Postdetails;
