import React, { Component } from 'react';
import TrackVisibility from 'react-on-screen';
import SectionCopy from "./SectionComponents/SectionCopy";
import SectionAudio from "./SectionComponents/SectionAudio";
//import BgImage from "./SectionComponents/BGImage";
//import DisplaySVG from "./svg/DisplaySVG";
//import Parallax from "./SectionComponents/ParallaxSection";


export default  class AppSection extends Component {
    componentWillMount(){}
  
    shouldComponentUpdate(nextProps, nextState){ return true;}
  
    componentWillUpdate(nextProps, nextState){} 

  render() {

   //console.log(this.props)
    // <Parallax  Data={Section.Parallax} />

/**
 *  <TrackVisibility once partialVisibility>
                        <DisplaySVG  Chapter={this.props.Meta.Chapter} />
                    </TrackVisibility>
 *   <TrackVisibility className="BgContainer" partialVisibility>
                <BgImage BG = {this.props.Meta.BGImage} />
            </TrackVisibility> 
 */

    //let Section = this.props.data;
    return(
        <div className="AppSection" id={"Int_"+this.props.SectionInt} style={{backgroundImage: "url(" + this.props.Meta.BGImage + ")"}}>
                   
                   
                    <div className="SectionInner "> 
                        <div className="TextSection SectionContent">
                            {
                                // eslint-disable-next-line
                                this.props.Data.map((data,i)=>{
                                  
                                        if(data.Chapter === this.props.Meta.Chapter&& data.Tag==='h1')
                                            {
                                                return(
                                                    <TrackVisibility partialVisibility key={i}>
                                                        <SectionCopy 
                                                            Copy={data.Copy}
                                                            Tag={data.Tag}
                                                            Class={data.Class}
                                                            key={i}
                                                            Chapter={this.props.Meta.Chapter}
                                                            Parent={this.props.Parent }
                                                        />
                                                    </TrackVisibility>
                                                )
                                            }
                                })
                            }
                             
                        </div>
                        <div className="AudioSection SectionContent">
                            <TrackVisibility  partialVisibility once>
                            <div className="ListenTip">Take a Listen</div>
                                <SectionAudio 
                                    src={this.props.Meta.Audio}
                                    chapter ={this.props.Meta.Chapter}
                                />
                            </TrackVisibility>
                        </div>

                        <div className="TextSection SectionContent Gradient">
                            {
                                // eslint-disable-next-line
                                this.props.Data.map((data,i)=>{
                                  //console.log(data);
                                        if(data.Chapter === this.props.Meta.Chapter && data.Tag==='p')
                                            {
                                                return(
                                                    <TrackVisibility partialVisibility key={i}>
                                                        <SectionCopy 
                                                            Copy={data.Copy}
                                                            Tag={data.Tag}
                                                            Class={data.Class}
                                                            key={i}
                                                            Chapter={this.props.Meta.Chapter}
                                                            Parent={this.props.Parent }
                                                        />
                                                    </TrackVisibility>
                                                )
                                            }
                                })
                            }
                             
                        </div>
                    </div>
               
        </div>
    )
  }
} 