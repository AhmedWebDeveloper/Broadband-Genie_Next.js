import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

const Landpage_5 = () => {
  return (
    <>
      <div className="land5-background d-flex justify-content-center">
        <section className="land5-container">
          <div className="land5-section">
            <div className="land5-main  ">
              <div className="featured-heading-parent">
                <h2 className="featured-heading">Featured in:</h2>
              </div>

              <div className="featured-parent">
                <ul className="featured-ul d-flex">
                  <li className="featured-li">
                   
                    <StaticImage
                      src="https://www.broadbandgenie.co.uk/img/kazaam/logos/bbc.png"
                      className="featured-img"
                      placeholder="blurred"
                      alt="img"
                    />
                  </li>
                  <li className="featured-li">
                    <StaticImage
                      src="https://www.broadbandgenie.co.uk/img/kazaam/logos/the-telegraph.png"
                      className="featured-img"
                      placeholder="blurred"
                      alt="img"
                    />
                  </li>
                  <li className="featured-li">
                    <StaticImage
                      src="https://www.broadbandgenie.co.uk/img/kazaam/logos/independent.png"
                      className="featured-img"
                      placeholder="blurred"
                      alt="img"
                    />
                  </li>
                  <li className="featured-li">
                    <StaticImage
                      src="https://www.broadbandgenie.co.uk/img/kazaam/logos/theguardian.png"
                      className="featured-img"
                      placeholder="blurred"
                      alt="img"
                    />
                  </li>
                  <li className="featured-li">
                    <StaticImage
                      src="https://www.broadbandgenie.co.uk/img/kazaam/logos/mirror.png"
                      className="featured-img"
                      placeholder="blurred"
                      alt="img"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Landpage_5;
