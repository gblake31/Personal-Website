import React, { useRef } from "react";
import "./theme/fontColors.css";
import "./theme/fonts.css";
import "./theme/buttons.css";

function Navigation() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "30px 0px 10px 0px",
          borderBottom: "5px solid #4C86A8"
        }}
      >
        <h3 style={{ padding: "0px", margin: "0px" }}>Blake Gassman</h3>
        <div style= {{display: 'flex', gap: '20px'}}>
          <button
            className="font_black"
          >
            Home
          </button>
          <button className="font_black">Experience</button>
          <button className="font_black">Projects</button>
          <button className="font_black">Contact</button>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
