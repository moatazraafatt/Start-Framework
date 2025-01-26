import React from "react";
import avatar from "../../images/avataaars.svg";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <div
        className={`${styles.home} d-flex justify-content-center align-items-center`}
      >
        <div className="row justify-content-center align-items-center">
          <div className=" text-center">
            <img
              src={avatar}
              alt="avatar"
              className={` mb-2 mx-auto d-block ${styles.profilepic}`}
              
            />
          </div>

          <div className="text-center mb-5">
            <h2 className="text-white fw-bolder">START FRAMEWORK</h2>
            {/* Line and star section */}
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div
                className="line me-3"
                style={{
                  backgroundColor: "white",
                  height: "4px",
                  width: "80px",
                }}
              ></div>
              <i className="fa-solid fa-star text-white"></i>
              <div
                className="line ms-3"
                style={{
                  backgroundColor: "white",
                  height: "4px",
                  width: "80px",
                }}
              ></div>
            </div>
            {/* Text section */}
            <span className="text-white">
              Graphic Artist - Web Designer - Illustrator
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
