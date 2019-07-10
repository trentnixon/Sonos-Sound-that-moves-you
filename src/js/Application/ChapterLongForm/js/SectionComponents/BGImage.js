import React, { Component } from 'react';
import {Animated} from "react-animated-css";

export default  class TextSection extends Component {
  componentWillMount(){}
  render() {
      //console.log(this.props.isVisible);
    return(
            <Animated animationIn="fadeIn" animationOut="fadeOut" animateOnMount={false} animationInDelay={0} animationOutDelay={200} isVisible={this.props.isVisible}>
                <div  className="SectionBgImage">
                    <img src={this.props.BG} />
                </div>
            </Animated>
    )
  }
} 