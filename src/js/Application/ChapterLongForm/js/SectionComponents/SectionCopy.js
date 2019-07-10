import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import {ParentClass} from "../../actions/actions";


export default  class TextSection extends Component {
  componentWillMount(){}
  CreateCopyType(data){
    //console.log(data) 
          switch(data.Tag) {
              case 'p':
                 return <p className={data.Class}>{data.Copy}</p>
                 // eslint-disable-next-line
              break;
              
              case 'h1':
                  return <h1 className={data.Class}>{data.Copy}</h1>
              // eslint-disable-next-line
              break;
              
              case 'h2':
                return <h2 className={data.Class}>{data.Copy}</h2>
              // eslint-disable-next-line
              break;
              
              case 'h3':
                  return <h3 className={data.Class}>{data.Copy}</h3>
              // eslint-disable-next-line
              break;

              default:
                  return <p className={data.Class}>{data.Copy}</p>
            }
  }

  render() { 
  // console.log(this.props, this.props.isVisible, this.props.Chapter)
   if(this.props.isVisible === true ){
      if(this.props.Chapter !== this.props.Parent)
        {
          ParentClass(this.props.Chapter)
        }
   }
    return(
        <Animated 
            animationIn="fadeInUp" 
            animationOut="fadeOut" 
            animateOnMount={false} 
            animationInDelay={100} 
            animationOutDelay={200} 
            isVisible={this.props.isVisible}
            className="Text">
            {this.CreateCopyType(this.props)} 
         </Animated>
    )
  }
} 