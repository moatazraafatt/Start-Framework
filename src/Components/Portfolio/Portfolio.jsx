import React, { useState } from "react";
import styles from "./Portfolio.module.css";
import card1 from "../../images/poert1.png";
import card2 from "../../images/port2.png";
import card3 from "../../images/port3.png";

export default function Portfolio() {
  // State to manage the selected image and visibility of item2
  const [selectedImage, setSelectedImage] = useState(null);
  const [isItem2Visible, setIsItem2Visible] = useState(false);

  // Handle card click
  const handleImageClick = (src) => {
    setSelectedImage(src); // Update the displayed image
    setIsItem2Visible(true); // Show the item2 div
  };

  // Handle closing the item2 div
  const handleClose = () => {
    setIsItem2Visible(false); // Hide the item2 div
  };

  return (
    <>
      <div className={isItem2Visible ? "overlay-active" : ""}>
        <div>
          <div className="text-center my-5">
            <h3
              className={`${styles.portfoliosec}`}
             
            >
              PORTFOLIO SECTION
            </h3>
            {/* Line and star section */}
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div
                className="line me-3"
                style={{
                  backgroundColor: "#2C3E50",
                  height: "4px",
                  width: "80px",
                }}
              ></div>
              <i className="fa-solid fa-star" style={{ color: "#2C3E50" }}></i>
              <div
                className="line ms-3"
                style={{
                  backgroundColor: "#2C3E50",
                  height: "4px",
                  width: "80px",
                }}
              ></div>
            </div>
          </div>

          <div className="container">
            <div className="row g-5">
              {/* Card 1 */}
              <div
                className={`col-md-6 col-lg-4  ${styles.galleryCard}`}
                onClick={() => handleImageClick(card1)}
              >
                <div className="rounded-3 overflow-hidden position-relative">
                <img
                  src={card1}
                  alt="Card 1"
                  className="w-100 d-block rounded rounded-2 item"
                />
                <div
                  className={`${styles.cover} d-flex justify-content-center align-items-center rounded rounded-2 gap-0`}
                >
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
              </div>

              {/* Card 2 */}
              <div
                className={`col-md-6 col-lg-4 ${styles.galleryCard}`}
                onClick={() => handleImageClick(card2)}
              >
                <div className="rounded-3 overflow-hidden position-relative">
                <img
                  src={card2}
                  alt="Card 2"
                  className="w-100 d-block rounded rounded-2 item"
                />
                <div
                  className={`${styles.cover} w-100 h-100 d-flex justify-content-center align-items-center rounded rounded-2`}
                >
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
              </div>

              {/* Card 3 */}
              <div
                className={`col-md-6 col-lg-4 ${styles.galleryCard}`}
                onClick={() => handleImageClick(card3)}
              >
                 <div className="rounded-3 overflow-hidden position-relative">
                <img
                  src={card3}
                  alt="Card 3"
                  className="w-100 d-block rounded rounded-2 item"
                />
                <div
                  className={`${styles.cover} w-100 h-100 d-flex justify-content-center align-items-center rounded rounded-2`}
                >
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>

              {/* Card 4 */}
              <div
                className={`col-md-6 col-lg-4  ${styles.galleryCard}`}
                onClick={() => handleImageClick(card1)}
              >
                <div className="rounded-3 overflow-hidden position-relative">
                <img
                  src={card1}
                  alt="Card 1"
                  className="w-100 d-block rounded rounded-2 item"
                />
                <div
                  className={`${styles.cover} d-flex justify-content-center align-items-center rounded rounded-2 gap-0`}
                >
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
              </div>

              {/* Card 5 */}
              <div
                className={`col-md-6 col-lg-4 ${styles.galleryCard}`}
                onClick={() => handleImageClick(card2)}
              >
                <div className="rounded-3 overflow-hidden position-relative">
                <img
                  src={card2}
                  alt="Card 2"
                  className="w-100 d-block rounded rounded-2 item"
                />
                <div
                  className={`${styles.cover} w-100 h-100 d-flex justify-content-center align-items-center rounded rounded-2`}
                >
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
              </div>

              {/* Card 6 */}
              <div
                className={`col-md-6 col-lg-4 ${styles.galleryCard}`}
                onClick={() => handleImageClick(card3)}
              >
                 <div className="rounded-3 overflow-hidden position-relative">
                <img
                  src={card3}
                  alt="Card 3"
                  className="w-100 d-block rounded rounded-2 item"
                />
                <div
                  className={`${styles.cover} w-100 h-100 d-flex justify-content-center align-items-center rounded rounded-2`}
                >
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
          </div>
          </div>
          

          {/* Display the selected image in item2 */}
          {isItem2Visible && (
            <div className="item3 position-fixed top-0 bottom-0 start-0 end-0 bg-primary bg-opacity-25 w-100 h-100 d-flex justify-content-center align-items-center">
              <div className="position-relative">
                <img
                  src={selectedImage}
                  alt="Selected"
                  style={{ width: "600px" }}
                  className="item2 rounded"
                />
                {/* Close button */}
                <button
                  className={`btn btn-danger position-absolute top-0 end-0  ${styles.mar}`}
                  onClick={handleClose}
                >
                  X
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Overlay CSS */}

      <style jsx>{`
        .overlay-active {
          pointer-events: none;
        }

        .overlay-active .item3 {
          pointer-events: all;
        }
      `}</style>


<br />


    </>
  );
}
