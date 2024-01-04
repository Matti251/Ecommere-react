import React from "react";
import "./Colors.css";
export const Colors = ({Setcolor}) => {
  return(
    <>
      <div className="colors-container">
      <div className="d-flex mixture"  onClick={() => Setcolor("")}>
        <div className="mixRed"></div>
        <div className="mixWhite"></div>
        <div className="mixGreen"></div>
        <div className="mixBlack"></div>
      </div>
      <div className="red" onClick={() => Setcolor("red")}></div>
      <div className="white" onClick={() => Setcolor("white")}></div>
      <div className="green" onClick={() => Setcolor("green")}></div>
      <div className="black" onClick={() => Setcolor("black")}></div>
    </div>
    </>
      
  )
};
export default Colors;
