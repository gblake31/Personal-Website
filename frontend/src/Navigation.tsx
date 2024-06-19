import React, { useRef } from "react";
import "./theme/fontColors.css";
import "./theme/fonts.css";
import "./theme/buttons.css";

function Navigation() {
  const myRef = useRef<HTMLElement | null>(null);
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px 10px",
        }}
      >
        <h3 style={{ padding: "0px", margin: "0px" }}>Blake Gassman</h3>
        <div>
          <button
            className="font_black"
            onClick={() =>
              myRef.current?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Home
          </button>
          <button className="font_black">About</button>
          <button className="font_black">Experience</button>
          <button className="font_black">Projects</button>
          <button className="font_black">Contact</button>
        </div>
      </div>
      <hr style={{ border: "1px solid lightgray" }} />
    </div>
  );
}

export default Navigation;
