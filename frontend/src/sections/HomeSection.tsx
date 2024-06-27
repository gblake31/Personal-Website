import React, { ReactNode } from "react";
import "../theme/fontColors.css";
import "../theme/fonts.css";

function HomeSection() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "50px",
          justifyContent: "space-between",
          padding: "80px 0px",
          borderBottom: '5px solid #e5ac34'
        }}
      >
        <div>
          <h1 className="font_blue font_fancy">
            Hey, I'm Blake
          </h1>
          <h2 className="font_black">
            Software Developer
          </h2>
          <div>
            <p style={{margin: '32px 0px', fontSize: '24px'}}>
              I am a <b>Software Developer at Epic</b> and a recent graduate from
              the <b>University of Central Florida</b>. In my free time, I enjoy
              playing the French Horn and exploring the outdoors. I love solving
              problems and tackling challenging projects.
            </p>
            <button className='niceButton'>
              <h5 style = {{textTransform: 'uppercase'}}>See some of my recent work</h5>
            </button>
          </div>
        </div>
        <div>
          <img
            src="./assets/blake.jpg"
            style={{
              width: "500px",
              borderRadius: "15px",
              boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.3)',
            }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
