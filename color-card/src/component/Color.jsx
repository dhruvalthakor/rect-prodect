import React, { useState } from "react";

let a=0;
let ss;
function Color() {
  const colors = ["orange", "red", "green"];
  let currentColor = colors[a];
  

  const changeColor = () => {
   ss=(
  <div key={colors}  style={{ Color: currentColor, height: 400, width: 700 }}>scsdsdsdsd</div>
  )
      a++
      console.log(ss);
      return  currentColor = colors[a];
  };

  return (
    <div>
      <div className="container">
      <h1 className=" text-center text-bg-dark py-2">COLORS</h1>
        <div style={{ height: 400 }} className="d-flex align-items-center mt-5">
          <div className="w-25 h-25  d-flex align-items-center justify-content-center">
            <button className="btn btn-danger">Change Color</button>
          </div>
          <div className="w-50 h-100 border border-1 d-flex align-items-center justify-content-center">
           {ss}
          </div>
          <div className="w-25 h-25  d-flex align-items-center justify-content-center">
            <button className="btn btn-danger"  onClick={changeColor}>Another Button</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Color;
