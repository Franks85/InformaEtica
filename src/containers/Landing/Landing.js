import React, { Component } from "react";
import Slide from './landSections/slide'
import SectionOne from './landSections/section1'
import SlideTwo from './landSections/slide2'
import SectionTwo from './landSections/section2'
import SlideThree from './landSections/slide3'

class Landing extends Component {
  render() {
    return (
      <div>
        <Slide />
        <SectionOne />
        <SlideTwo />
        <SectionTwo />
        <SlideThree />
      </div>
    );
  }
}

export default Landing;


