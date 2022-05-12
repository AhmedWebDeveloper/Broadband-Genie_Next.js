import React from "react";


const Header = () => {
  return (
    <>
     
      <div className="header-background d-flex justify-content-center ">
        <section className="header-container">

          <div className="header-section">
                      
            <div className="header-main  d-flex">
              <header className="header ">
                <a href="#" className="h-img-parent">
                  <img
                    src="https://www.broadbandgenie.co.uk/img/kazaam/logos/bbg-logo.svg"
                    alt=""
                    className="h-img"
                  />
                </a>
                <div className="h-right-side ">
                  <div className="h-nav-parent">
                    <ul className="h-nav-main-ul">
                      <div className="h-nav-main-p-li">
                        <li className="h-nav-main-li">
                          <a href="#" className="header-menu-text">
                            <span>Broadband</span>
                          </a>
                        </li>
                      </div>
                      <div className="h-nav-main-p-li">
                        <li className="h-nav-main-li">
                          <a href="#" className="header-menu-text">
                            <span>TV</span>
                          </a>
                        </li>
                      </div>
                      <div className="h-nav-main-p-li">
                        <li className="h-nav-main-li">
                          <a href="#" className="header-menu-text">
                            <span>Broadband Guides</span>
                          </a>
                        </li>
                      </div>
                      <div className="h-nav-main-p-li">
                        <li className="h-nav-main-li">
                          <a href="#" className="header-menu-text">
                             
                            <span>Tools & Resources</span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  </div>

                  <div className="hotline-parent">
                    <p className="hotline-title">ORDER BY PHONE</p>
                    <p className="hotline-number">0800 4661 043</p>
                    <div className="hotline-time">
                      <span className="hotline-days-parent">
                        Open Mon - Sat &nbsp;
                      </span>
                      <span className="hotline-link">
                        <a href="#">What's this number?</a>
                      </span>{" "}
                    </div>
                  </div>

                  <a href="#" class="t-parent-link">
                    <div class="t-parent">
                      <div class="t-lines t-top-left "></div>
                      <div class="t-lines t-top-right "></div>
                      <div class="t-lines t-midddle"></div>
                      <div class="t-lines  t-bottom-left"></div>
                      <div class="t-lines t-bottom-right"></div>
                    </div>
                  </a>
                </div>
              </header>
            </div>
          </div>
        </section>
      </div>
      
    </>
  );
};

export default Header;
