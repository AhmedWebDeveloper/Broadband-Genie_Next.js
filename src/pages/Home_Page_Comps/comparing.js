import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

const Landpage_1 = () => {
  return (
    <>
      <span className="land1-adds-left">
        <StaticImage
          src="https://www.broadbandgenie.co.uk/images/takeover/Shell-side-banner-15.png"
          className="img-fluid img-land1-adds-left"
          alt="img"
          placeholder="blurred"
        />
      </span>
      <span className="land1-adds-right">
        <StaticImage
          src="https://www.broadbandgenie.co.uk/images/takeover/Shell-side-banner-15.png"
          className="img-fluid img-land1-adds-left"
          alt="img"
          placeholder="blurred"
        />
      </span>
      <div className="land1-background d-flex justify-content-center">
        <section className="land1-container">
          <div className="land1-section">
            <div className="land1-main  ">
              {/* <div className="land-sec-1"><div className="land-sec-1-content"> */}

              <div className="land1-p-center">
                <h1 className=" h1 land1-header">
                  Compare the best broadband providers
                </h1>
                <div className="land1-cente-ul-p">
                  <ul className="land1-cente-ul">
                    <li className="land1-li">
                      <a href="#" className="img-parent">
                        {/* <img
                          src="https://www.broadbandgenie.co.uk/images/logos/networks/36.png"
                          className="img-fluid land1-images"
                          alt=""
                        /> */}
                        <StaticImage
                          src="https://www.broadbandgenie.co.uk/images/logos/networks/36.png"
                          className="img-fluid land1-images"
                          placeholder="blurred"
                          alt="img"
                        />
                      </a>
                    </li>
                    <li className="land1-li">
                      <a href="#" className="img-parent">
                        {/* <img
                          src="https://www.broadbandgenie.co.uk/images/logos/networks/7.png"
                          className="img-fluid land1-images"
                          alt=""
                        /> */}
                        <StaticImage
                          src="https://www.broadbandgenie.co.uk/images/logos/networks/7.png"
                          className="img-fluid land1-images"
                          placeholder="blurred"
                          alt="img"
                        />
                      </a>
                    </li>
                    <li className="land1-li">
                      <a href="#" className="img-parent">
                        {/* <img
                          src="https://www.broadbandgenie.co.uk/images/logos/networks/32.png"
                          className="img-fluid land1-images"
                          alt=""
                        /> */}
                        <StaticImage
                          src="https://www.broadbandgenie.co.uk/images/logos/networks/32.png"
                          className="img-fluid land1-images"
                          placeholder="blurred"
                          alt="img"
                        />
                      </a>
                    </li>
                    <li className="land1-li">
                      <a href="#" className="img-parent">
                        {/* <img
                          src="https://www.broadbandgenie.co.uk/images/logos/networks/43.png"
                          className="img-fluid land1-images"
                          alt=""
                        /> */}
                        <StaticImage
                          src="https://www.broadbandgenie.co.uk/images/logos/networks/43.png"
                          className="img-fluid land1-images"
                          placeholder="blurred"
                          alt="img"
                        />
                      </a>
                    </li>
                    <li className="land1-li">
                      <a href="#" className="img-parent">
                        {/* <img
                          src="https://www.broadbandgenie.co.uk/images/logos/networks/28.png"
                          className="img-fluid land1-images"
                          alt=""
                        /> */}
                        <StaticImage
                          src="https://www.broadbandgenie.co.uk/images/logos/networks/28.png"
                          className="img-fluid land1-images"
                          placeholder="blurred"
                          alt="img"
                        />
                      </a>
                    </li>
                    <li className="land1-li">
                      <a href="#" className="img-parent">
                        {/* <img
                          src="https://www.broadbandgenie.co.uk/images/logos/networks/33.png"
                          className="img-fluid land1-images"
                          alt=""
                        /> */}
                        <StaticImage
                          src="https://www.broadbandgenie.co.uk/images/logos/networks/33.png"
                          className="img-fluid land1-images"
                          placeholder="blurred"
                          alt="img"
                        />
                      </a>
                    </li>
                    <li className="land1-li">
                      <a href="#" className="img-parent">
                        {/* <img
                          src="https://www.broadbandgenie.co.uk/images/logos/networks/88.png"
                          className="img-fluid land1-images"
                          alt=""
                        /> */}
                        <StaticImage
                          src="https://www.broadbandgenie.co.uk/images/logos/networks/88.png"
                          className="img-fluid land1-images"
                          placeholder="blurred"
                          alt="img"
                        />
                      </a>
                    </li>
                    <li className="land1-li">
                      <a href="#" className="img-parent">
                        {/* <img
                          src="https://www.broadbandgenie.co.uk/images/logos/networks/91.png"
                          className="img-fluid land1-images"
                          alt=""
                        /> */}
                        <StaticImage
                          src="https://www.broadbandgenie.co.uk/images/logos/networks/91.png"
                          className="img-fluid land1-images"
                          placeholder="blurred"
                          alt="img"
                        />
                      </a>
                    </li>
                    <li className="land1-li">
                      <a href="#" className="img-parent">
                        {/* <img
                          src="https://www.broadbandgenie.co.uk/images/logos/networks/97.png"
                          className="img-fluid land1-images"
                          alt=""
                        /> */}
                        <StaticImage
                          src="https://www.broadbandgenie.co.uk/images/logos/networks/97.png"
                          className="img-fluid land1-images"
                          placeholder="blurred"
                          alt="img"
                        />
                      </a>
                    </li>
                    <li className="land1-li">
                      <a href="#" className="img-parent">
                        {/* <img
                          src="https://www.broadbandgenie.co.uk/images/logos/networks/101.png"
                          className="img-fluid land1-images"
                          alt=""
                        /> */}
                        <StaticImage
                          src="https://www.broadbandgenie.co.uk/images/logos/networks/101.png"
                          className="img-fluid land1-images"
                          placeholder="blurred"
                          alt="img"
                        />
                      </a>
                    </li>
                    <li className="land1-li">
                      <a href="#" className="img-parent">
                        {/* <img
                          src="https://www.broadbandgenie.co.uk/images/logos/networks/108.png"
                          className="img-fluid land1-images"
                          alt=""
                        /> */}
                        <StaticImage
                          src="https://www.broadbandgenie.co.uk/images/logos/networks/108.png"
                          className="img-fluid land1-images"
                          placeholder="blurred"
                          alt="img"
                        />
                      </a>
                    </li>
                    <li className="land1-li">
                      <a href="#" className="img-parent">
                        {/* <img
                          src="https://www.broadbandgenie.co.uk/images/logos/networks/122.png"
                          className="img-fluid land1-images"
                          alt=""
                        /> */}
                        <StaticImage
                          src="https://www.broadbandgenie.co.uk/images/logos/networks/122.png"
                          className="img-fluid land1-images"
                          placeholder="blurred"
                          alt="img"
                        />
                      </a>
                    </li>
                    <li className="land1-li">
                      <a href="#" className="img-parent">
                        {/* <img
                          src="https://www.broadbandgenie.co.uk/images/logos/networks/129.png"
                          className="img-fluid land1-images"
                          alt=""
                        /> */}
                        <StaticImage
                          src="https://www.broadbandgenie.co.uk/images/logos/networks/129.png"
                          className="img-fluid land1-images"
                          placeholder="blurred"
                          alt="img"
                        />
                      </a>
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

export default Landpage_1;
