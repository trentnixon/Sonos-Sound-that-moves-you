import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import HTMLAUDIO from "../Elements/html5_Audio";

export default  class SctionAudio extends Component {
  componentWillMount(){}
  render() {  
    return(
          <div className="AudioPlayerContainerOuter">
            <Animated 
              animationIn="fadeIn" 
              animationOut="fadeOut" 
              animateOnMount={false} 
              animationInDelay={300} 
              animationOutDelay={400} 
              isVisible={this.props.isVisible}
              
          >
              <HTMLAUDIO 
                src={this.props.src}
              />
            </Animated>
          </div>
    )
  }
} 