import React from 'react';
import styles from './Contact.module.css'


export default function Contact() {
  return (
    <>
      <div>
      <div className="text-center my-5">
            <h4 className={`fw-bolder ${styles.contactsec}`}  >CONTACT SECTION</h4>
              {/* Line and star section */}
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div
              className="line me-3"
              style={{ backgroundColor: "#2C3E50", height: "4px", width: "80px" }}
            ></div>
            <i className="fa-solid fa-star "  style={{ cssText: "color: #2C3E50 !important"}}></i>
            <div
              className="line ms-3"
              style={{ backgroundColor: "#2C3E50", height: "4px", width: "80px" }}
            ></div>
          </div> </div>
        <form className="w-50 p-3 mx-auto mt-5">
       
          <input
            id="userName"
            type="text"
            placeholder="userName"
            name="userName"
            className="form-control border-0 border-bottom py-3 mb-4 position-relative"
          />
          
       
          <input
            id="userAge"
            type="text"
            placeholder="userAge"
            name="userAge"
            className="form-control border-0 border-bottom py-3 mb-4 position-relative"
          />
          
       
          <input
            id="userEmail"
            type="email"
            placeholder="userEmail"
            name="userEmail"
            className="form-control border-0 border-bottom py-3 mb-4 position-relative"
          />
          

          <input
            id="userPassword"
            type="password"
            placeholder="userPassword"
            name="userPassword"
            className="form-control border-0 border-bottom py-3 mb-4 position-relative"
          />
          
          <button
            className="btn my-4 text-white"
            style={{ backgroundColor: "#1abc9c" }}
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}

