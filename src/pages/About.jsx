import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div id="about">
        <div className="container">
          <div className="about-container">
            <div className="about-content-left">
              <h5>Established since 1977</h5>
              <h1>About The Surf</h1>
              <p className="about-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                ultricies metus eget diam fringilla, non luctus nisi molestie.
                Aliquam quis lacus eget neque faucibus tempor. Pellentesque ut
                sollicitudin sapien. Phasellus purus augue, auctor at lacinia
                et, imperdiet ac urna. Etiam congue arcu sed tellus hendrerit,
                ut commodo tellus molestie. Sed finibus ac ex in maximus.
                Pellentesque nec tempor neque. Donec ipsum massa, auctor ac
                tellus nec, pulvinar tristique justo. In eget nibh fringilla,
                ornare elit.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                ultricies metus eget diam fringilla, non luctus nisi molestie.
                Aliquam quis lacus eget neque faucibus tempor. Pellentesque ut
                sollicitudin sapien.
              </p>
              <button className="about-btn">Learn More</button>
            </div>
            <div className="about-content-right">
              <img
                src="images/about-the-surf.jpg"
                className="images"
                alt="the-surf"
              />
            </div>
          </div>
        </div>

        <div className="wave-2"></div>
      </div>
    </>
  );
}

export default About;
