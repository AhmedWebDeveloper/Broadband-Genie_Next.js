import React, { useState } from "react";

const Footer = () => {
  return (
    <>
      <div className="footer-background d-flex justify-content-center">
        <section className="footer-container">
          <div className="footer-section">
            <div className="footer-main  d-flex">
              <div className="f-left-parent">
                <a href="#" className="f-img-link">
                  <img
                    src="https://www.broadbandgenie.co.uk/img/kazaam/logos/bbg-white.svg"
                    alt="img-not-found"
                    className="f-img"
                  />
                  <p className="f-copyight">© Genie Ventures Ltd </p>
                </a>
              </div>

              <div className="f-right-parent d-flex text-white">
                <div className="f-detail">
                  <p className="f-detail-header">Broadband Genie</p>
                  <ul className="f-detail-ul">
                    <li className="f-detail-li">
                      <a href="#" className="f-detail-link">
                        About us
                      </a>
                    </li>
                    <li className="f-detail-li">
                      <a href="#" className="f-detail-link">
                        Sitemap
                      </a>
                    </li>
                    <li className="f-detail-li">
                      <a href="#" className="f-detail-link">
                        Press
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="f-detail">
                  <p className="f-detail-header">Privacy</p>
                  <ul className="f-detail-ul">
                    <li className="f-detail-li ">
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li className="f-detail-li ">
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li className="f-detail-li ">
                      <a href="#">Cookies policy</a>
                    </li>
                  </ul>
                </div>

                <div className="f-detail">
                  <p className="f-detail-header">Support</p>
                  <ul className="f-detail-ul">
                    <li className="f-detail-li  ">
                      <a href="#">Contact us</a>
                    </li>
                    <li className="f-detail-li ">
                      <a href="#">Help</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
