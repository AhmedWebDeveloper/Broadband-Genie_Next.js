import React, { useState } from "react";

const Landpage_4 = () => {
  return (
    <>
      <div id="help" className="land4-background d-flex justify-content-center">
        <section className="land4-container">
          <div className="land4-section">
            <div className="land4-main  ">
              <div className="help-heading-parent">
                <h2 className="help-heading text-white">Help & advice</h2>
              </div>
              <div className="help-sub-heading text-white">
                Having broadband issues or looking for buying advice? Become a
                broadband expert with our guides.
              </div>
              <ul className="help-ul d-flex">
                <div className="li-parent d-flex">
                  <li className="help-li">
                    <a
                      href="#"
                      className="help-link"
                      title="Broadband beginners guide"
                    >
                      What is broadband and how does it work?
                    </a>
                  </li>
                  <li className="help-li help-li-sec-col">
                    <a
                      href="#"
                      className="help-link "
                      title="Broadband installation and activation"
                    >
                      Broadband installation and activation
                    </a>
                  </li>
                  <li className="help-li">
                    <a
                      href="#"
                      className="help-link"
                      title="Broadband moving home guide"
                    >
                      A guide to Broadband &amp; moving home
                    </a>
                  </li>
                  <li className="help-li help-li-sec-col">
                    <a href="#" className="help-link" title="Broadband speed">
                      Broadband speed guide
                    </a>
                  </li>
                  <li className="help-li">
                    <a href="#" className="help-link" title="Broadband Routers">
                      What is a broadband router?
                    </a>
                  </li>
                  <li className="help-li help-li-sec-col">
                    <a href="#" className="help-link" title="Consumer rights">
                      Your broadband consumer rights
                    </a>
                  </li>
                  <li className="help-li">
                    <a href="#" className="help-link" title="5G">
                      5G guide: What is 5G?
                    </a>
                  </li>
                  {/* </div> */}

                  {/* <div className="Second-li-column"> */}
                  <li className="help-li help-li-sec-col">
                    <a
                      href="#"
                      className="help-link"
                      title="Online safety for kids"
                    >
                      Online safety for children: A guide
                    </a>
                  </li>
                  <li className="help-li">
                    <a href="#" className="help-link" title="VPNs">
                      What is a VPN? How do they work?
                    </a>
                  </li>
                  <li className="help-li help-li-sec-col">
                    <a
                      href="#"
                      className="help-link"
                      title="Fibre availability checker"
                    >
                      Fibre availability checker: Can I get fibre?
                    </a>
                  </li>
                  <li className="help-li">
                    <a
                      href="#"
                      className="help-link"
                      title="How to switch broadband"
                    >
                      How to switch broadband and save
                    </a>
                  </li>
                  <li className="help-li help-li-sec-col">
                    <a href="#" className="help-link" title="Fastest broadband">
                      What is the fastest broadband?
                    </a>
                  </li>
                  <li className="help-li">
                    <a
                      href="#"
                      className="help-link"
                      title="Broadband in rental properties"
                    >
                      A guide to broadband in rented homes
                    </a>
                  </li>
                  <li className="help-li help-li-sec-col">
                    <a
                      href="#"
                      className="help-link"
                      title="Mobile broadband help"
                    >
                      Mobile broadband help and advice
                    </a>
                  </li>

                  <li className="full-giude-li">
                    <a
                      href="#"
                      className="full-giude-li"
                      title="See all guides"
                    >
                      See all guides{" "}
                      <span className="full-giude-pointer  ">►</span>{" "}
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Landpage_4;
