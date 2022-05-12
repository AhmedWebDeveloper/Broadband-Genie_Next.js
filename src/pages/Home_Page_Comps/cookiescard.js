import React, { useState } from "react";

const Cookies = () => {
  const [hidecookie, sethidecookie] = useState(false);
  const cookiefun = () => {
    sethidecookie(true);
  };

  return (
    <>
      <section className="cookies-container">
        <div className="cookies-main">
          <p className="c-para1">
            Broadband Genie, and some associated third party tools, use cookies.
            These are often necessary for the site to function properly and
            required to achieve the purposes illustrated in our{" "}
            <a href="#" className="c-para1-link">
              cookie policy
            </a>{" "}
            , where you can manage your consent options.{" "}
          </p>
          <p className="c-para2">
            By clicking "OK", closing this banner, clicking a link or continuing
            to browse otherwise, you agree to the use of cookies.
          </p>
          <a href="#" className="c-policy-link">
            Read our privacy policy
          </a>
          <button href="#" className="c-ok-btn" onClick={cookiefun}>
            OK
          </button>
        </div>
      </section>
      <style global jsx>{`
        .cookies-container {
          display: ${hidecookie ? "none" : "block"};
          transition: 1s;
        }
      `}</style>
    </>
  );
};

export default Cookies;
