import React from "react";

function PhotoFrame(props) {
  return (
    <div>
      <h1> varun</h1>
      <h1> {props.photo.status}</h1>

      <img src={props.photo.message} alt="dogphoto"></img>
    </div>
  );
}

export default PhotoFrame;
