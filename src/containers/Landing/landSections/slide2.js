import React from "react";
import { data } from '../../../globalData' 

const slideTwo = () => {
  return (
    <div className="parallax-container valign-wrapper">
      <div className="section no-pad-bot">
        <div className="container">
          <div className="row center">
            <h5 className="header col s12 light">
              {data.landing.secondSlide_title}
            </h5>
          </div>
        </div>
      </div>
      <div className="parallax">
        <img src={data.landing.secondSlide_img_src} alt="Unsplashed background img 2" />
      </div>
    </div>
  );
};

export default slideTwo;
