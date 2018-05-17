import React from "react";
import { data } from '../../../globalData' 

const sectionTwo = () => {
  return (
    <div className="container">
      <div className="section" id='sec2'>
        <div className="row">
          <div className="col s12 center">
            <h3>
              <i className="mdi-content-send brown-text" />
            </h3>
            <h4>{data.landing.secondSection_title}</h4>
            <p className="left-align light">
              {data.landing.secondSection_content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sectionTwo;
