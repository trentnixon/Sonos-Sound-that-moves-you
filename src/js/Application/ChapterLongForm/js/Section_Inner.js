import React, { Component } from 'react';

import Text from "./SectionComponents/TextSection"
import ParallaxSection from "./SectionComponents/ParallaxSection";
export default  class TextSection extends Component {
  componentWillMount(){}
  render() {
    //console.log(this.props.isVisible)
    return(
            <div className="AppSection">
                <div className="container">
                    <div className="row">
                        <div className="SectionInner">
                            <Text {... this.props}/>
                          
                        </div>
                    </div>
                </div>
            </div> 

       
    )
  }
} 