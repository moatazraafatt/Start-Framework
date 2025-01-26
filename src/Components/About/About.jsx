import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <>
      <div
        className={`${styles.high} ${styles.about} d-flex flex-column justify-content-center align-items-center `}
      >
        <div className="text-center mb-5">
          <h2 className="text-white fw-bolder">ABOUT COMPONENT</h2>
          {/* Line and star section */}
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div
              className="line me-3"
              style={{ backgroundColor: "white", height: "4px", width: "80px" }}
            ></div>
            <i className="fa-solid fa-star text-white"></i>
            <div
              className="line ms-3"
              style={{ backgroundColor: "white", height: "4px", width: "80px" }}
            ></div>
          </div>
        </div>

        <div className={`container ${styles.container}`}>
          <div className="row">
            <div className="col-md-6 text-white">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6 text-white">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

