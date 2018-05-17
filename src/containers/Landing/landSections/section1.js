import React from "react";
import { data } from '../../../globalData' 

const sectionOne = () => {
  return (
    <div className="container">
      <div className="section" id='sec1'>
        <div className="row">
          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center brown-text">
                <i className="material-icons">flash_on</i>
              </h2>
              <h5 className="center">{data.landing.firstSection_firstColumn_title}</h5>

              <p className="light">
               {data.landing.firstSection_firstColumn_description}
              </p>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center brown-text">
                <i className="material-icons">group</i>
              </h2>
              <h5 className="center">{data.landing.firstSection_secondColumn_title}</h5>

              <p className="light">
               {data.landing.firstSection_secondColumn_description}
              </p>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center brown-text">
                <i className="material-icons">settings</i>
              </h2>
              <h5 className="center">{data.landing.firstSection_thirdColumn_title}</h5>

              <p className="light">
                {data.landing.firstSection_thirdColumn_description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sectionOne;
