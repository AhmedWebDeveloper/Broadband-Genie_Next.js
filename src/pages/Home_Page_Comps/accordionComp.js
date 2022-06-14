import React, { useState } from "react";

const Accordion = ({ heading, para1, para2, number }) => {
  const [isActive, setisActive] = useState(false);
  console.log(isActive);
  return (
    <>
      <div className="accordion mb-2" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2
            class="accordion-header mb-0"
            id={`panelsStayOpen-heading${number}  `}
          >
            <button
              class={`accordion-button position-relative d-flex align-items-center text-left collapsed w-100 border-0 bg-white`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#panelsStayOpen-collapse${number}`}
              aria-expanded="false"
              aria-controls={`panelsStayOpen-collapse${number}`}
              onClick={() => setisActive(!isActive)}
            >
              <span className="d-inline-block">{heading}</span>
              <div className="expander-parent d-flex flex-column justify-content-center align-items-center  ">
                <div className="expanderX expander"></div>
                <div
                  className={`expanderY expander  ${
                    isActive ? "activeAccordion" : ""
                  }`}
                ></div>
              </div>
            </button>
          </h2>
          <div
            id={`panelsStayOpen-collapse${number}`}
            class="accordion-collapse collapse"
            aria-labelledby={`panelsStayOpen-heading${number}`}
          >
            <div class="accordion-body">
              {para1}
              <br />
              {para2}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
