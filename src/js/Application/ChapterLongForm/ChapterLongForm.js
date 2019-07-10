import React, { Component } from 'react';
//import { ParallaxProvider } from 'react-scroll-parallax';
import AppSection from "./js/Section_Container";
import SectionIframe from "./js/Section_Container_Iframe";
export default  class Default extends Component {
 
  componentWillMount(){
  //console.log(this.props.App[0]);
  }
  shouldComponentUpdate(nextProps, nextState){ return true;}
  componentWillUpdate(nextProps, nextState){}
  render() {

 //console.log(this.props)

    return(
      <div className={"ApplicationShell Section_" + this.props.Parent}>
          {
            this.props.App[0].map((section,i)=>{
              return(
                <AppSection  
                  key={i}
                  Meta={section}
                  Data={this.props.App[1]}
                  Parent={this.props.Parent }
                  SectionInt={i}
                />
              ) 
            })
          }


            <SectionIframe 
              src="4CPZna3w0GLMwM2V8MQnlN" 
            />
              
      </div>
    )
  }
}  