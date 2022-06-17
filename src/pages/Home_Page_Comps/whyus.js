import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Landpage_2 = () => {
  return (
    <>
      <div className="land2-background d-flex justify-content-center">
        <div>
          <section className="land2-container">
            <div className="land2-section">
              <div className="land2-main  d-flex ">
                <h2 className="land2-header text-white">
                  Why you can trust us
                </h2>
 

                <div className="cards-container d-flex ">
                  <div className="card-main  mx-0 mx-sm-3">
                    <div className="cards card1">
                      <p className="cards-head-text card1-head-text">
                        We're 100% independent and unbiased
                      </p>
                      <div className="card-img-parent card1-img-parent ">
                    
                        <StaticImage
                          src="https://www.broadbandgenie.co.uk/img/kazaam/ills/stars.png"
                          className="card1-img card-img"
                          placeholder="blurred"
                          alt="img"
                        />
                      </div>
                      <p className="card-bottom-data card1-bottom-data">
                        While we work with providers to bring you the best
                        deals, our comparison tools are developed in-house by
                        our experts, and editorial content is completely
                        independent.
                      </p>
                    </div>
                  </div>

                  <div className="card-main  mx-0 mx-sm-3">
                    <div className="cards card2">
                      <p className="cards-head-text ">
                        Our reviews speak
                        <br />
                        for themselves{" "}
                      </p>
                      <div className="card2-center-elem">
                        <div className="card2-center-elems card-img">
                          <div>
                            <span className="review-score-get">4.7</span>
                            <span className="review-score-out">/5</span>
                          </div>
                          <a
                            href="#"
                            className="review-link text-white"
                            rel="noopener"
                          >
                            594 reviews
                          </a>

                          <StaticImage
                            src="../../images/trustpilot.png"
                            width="130"
                            height="33"
                            placeholder="blurred"
                            alt="img"
                          />
                        </div>
                      </div>

                      <p className="card-bottom-data card2-bottom-data">
                        You can buy with confidence through Broadband Genie
                        knowing that we're highly rated by our customers on
                        Trustpilot,the independent review service.
                      </p>
                    </div>
                  </div>

                  <div className="card-main mx-0 mx-sm-3">
                    <div className="cards card3">
                      <p className="cards-head-text">
                        We're safe and
                        <br />
                        secure to use
                      </p>
                      <div className="card3-img-parent">
                        {/* <img
                          src="https://www.broadbandgenie.co.uk/img/kazaam/ills/safe.png"
                          alt=""
                          className="card2-img card-img"
                        /> */}
                        <StaticImage
                          src="https://www.broadbandgenie.co.uk/img/kazaam/ills/safe.png"
                          className="card2-img card-img"
                          alt=""
                          placeholder="blurred"
                        />
                      </div>
                      <p className="card3-bottom-data card-bottom-data">
                        Our site conforms to industry standard security and
                        privacy standards, and we will never share your details
                        with third parties without permission.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Landpage_2;
