import React, { Component } from 'react';
import { Parallax,ParallaxBanner } from 'react-scroll-parallax';

export default  class Default extends Component {
  componentWillMount(){}
  render() {
    return(
        <div className="ParallaxSection row">
                <div className="col-md-12 Image">
                    {
                            this.props.Data["0"].Right.map((Image,i)=>{
                                return(
                                    <div key={i} className="imageContainer">
                                        <img src={Image.Image} />
                                        <span>{Image.Title}</span>
                                    </div>
                                )
                            })
                    }
                </div> 
        </div>
    )
  }
}