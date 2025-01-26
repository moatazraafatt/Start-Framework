import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={`${styles.myFooter}  d-flex align-items-center`}>
       
        <div className="container ">
          <div className={`row ${styles.row} g-5 my-5`}>
       
            <div className="col-md-4">
              <div className="text-center ">
                <h2 className={`${styles.head}`}>LOCATION</h2>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <h2 className={`${styles.head}`}>AROUND THE WEB</h2>
                <div className={styles.icons}>
                  <i className="fa-brands fa-facebook mx-2 icon"></i>
                  <i className="fa-brands fa-twitter mx-2 icon"></i>
                  <i className="fa-brands fa-linkedin-in mx-2 icon"></i>
                  <i className="fa-solid fa-globe mx-2 icon"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <h2 className={`${styles.head}`}>ABOUT FREELANCER</h2>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className={`${styles.copyright} text-center p-4`}>
        Copyright © Your Website 2021
      </div>
    </>
  );
}
