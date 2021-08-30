import React from "react";

const Postdetails = (props) => {
  return (
    <div>
      {console.log(props)}
      PostDetails
      <h1>{props.match.params.topic}</h1>
    </div>
  );
};

export default Postdetails;
