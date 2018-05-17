import React from 'react'
import { data } from '../../../globalData' 
import '../landing.css'

const slide = () => {
    return (
        <div id="index-banner" className="parallax-container">
          <div className="section no-pad-bot">
            <div className="container">
              <br />
              <h1 className="header center teal-text text-lighten-2 slide_title">
                {data.landing.slide_title}
              </h1>
              <div className="row center">
                <h5 className="header col s12 light">
                  {data.landing.slide_subtitle}
                </h5>
              </div>
              <div className="row center">
                <a
                  href={data.landing.slide_action_href}
                  id="download-button"
                  className="btn-large waves-effect waves-light teal lighten-1"
                >
                  {data.landing.slide_button_text}
                </a>
              </div>
              <br />
            </div>
          </div>
          <div className="parallax">
            <img
              src={data.landing.slide_img_src}
              alt="Unsplashed background img 1"
            />
          </div>
        </div>
    )
}

export default slide