import React, { Component } from "react";

const Like = ({onLike , liked}) => {
    let classes = "fa fa-heart";
    if (!liked) classes += "-o";
    
    return (
      <i
        onClick={onLike}
        style={{cursor:"pointer"}}
        className={classes}
        aria-hidden="true"
      ></i>
    );
    
}
 

export default Like;
