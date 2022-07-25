import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Hero_Section = () => {
  return (
    <>
      <div id="home" className="hero-background d-flex justify-content-center">
        <div className="hero-container">
          <div className="hero-section ">
            <div className="hero-main">
              <div className="hero-content-left">
                <p className="testings">
                  Your wish is <br /> our command.
                </p>
                <div className="hero-left-main-content">
                  <h1 className="-home">
                    Start your switch{" "}
                    <span className="">with Broadband Genie</span>{" "}
                  </h1>

                  <div className="pc-checker">
                    <form action="#">
                      <div className="hero-form-container">
                        {/* <input  type="text" className="hero-text-input" required="true"/> */}
                        {/* <label className="hero-hint-input">Enter Your Postcode</label> */}
                        {/* <TextField id="standard-basic" className="hero-text-input mt-5" label="Standard" /> */}
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control hero-text-input"
                            id="floatingInput"
                            placeholder="Enter Your Postcode"
                          />
                          {/* <label for="floatingInput" className="hero-hint-input">Enter Your Postcode</label> */}
                        </div>
                        <a href="#" id="postcode-submit">
                          Start
                        </a>
                      </div>
                    </form>
                  </div>

                  <a
                    href="#"
                    className="hero-why-postcode-link"
                    id="broadBands"
                  >
                    Why do we need your postcode?
                  </a>
                </div>
              </div>
              <div className="hero-content-right">
                {/* <img
                  className="hero-rigth-img"
                  src="https://www.broadbandgenie.co.uk/img/kazaam/genie/genie-bank-l@2x.png"
                  alt="img"
                /> */}
                <StaticImage
                  src="https://www.broadbandgenie.co.uk/img/kazaam/genie/genie-bank-l@2x.png"
                  className="hero-rigth-img"
                  alt="img"
                  placeholder="blurred"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero_Section;
