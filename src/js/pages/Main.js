import React, { Component } from 'react';
// Import Layout Components
import OuterShell from "../dom/OuterShell";
//import Background from "../dom/BackgroundGradient";
/*
import Header from "../dom/Header";
import BodyCopy from "../dom/BodyCopy";
import Footer from "../dom/Footer";
import SocialBar from "../dom/CTA_SocialShare_Bar";
*/
// Application
import ChapterLongForm from "../Application/ChapterLongForm/ChapterLongForm";

// Use this component to build up the Project Layout
//<Background ParentClass={this.props.APP.ParentClass} />

export default class Main extends Component {
  render() {
    //console.log(this.props.APP.ParentClass)
    return (
        <div className="container-fluid" id="Glabs">

          <OuterShell  {... this.props} >
              <ChapterLongForm 
                App={this.props.APP.APPLICATION} 
                Parent={this.props.APP.ParentClass }
              />
          </OuterShell>
        </div>
        ) 
  }
} 
  