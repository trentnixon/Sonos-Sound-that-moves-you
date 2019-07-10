import React, { Component } from 'react';
import {Animated} from "react-animated-css";

export default  class TextSection extends Component {
  componentWillMount(){}
  render() { 
   // console.log(this.props.isVisible)
    return(
      <div className={"Text "+this.props.isVisible}>
        <div className="header">
          <Animated animationIn="fadeInDown" animationOut="fadeOutUp" animateOnMount={false} animationInDelay={0} animationOutDelay={200} isVisible={this.props.isVisible}>
              <h1>{this.props.Title}</h1>
          </Animated>
            
          <Animated animationIn="fadeInUp" animationOut="fadeOutDown" animateOnMount={false} animationInDelay={200} animationOutDelay={200} isVisible={this.props.isVisible}>
              <h2> {this.props.SubTitle }</h2>
          </Animated>
        </div>
          
        <div className="copy">
          <Animated animationIn="fadeInUp" animationOut="fadeOutDown" animateOnMount={false} animationInDelay={400} animationOutDelay={200} isVisible={this.props.isVisible}>
              {this.props.Copy.map((p,i)=>{
                //console.log(p)
                  return(
                        <p key={i}>{p}</p>
                  )
              })}
          </Animated> 
        </div>
           
      </div>
    )
  }
} 