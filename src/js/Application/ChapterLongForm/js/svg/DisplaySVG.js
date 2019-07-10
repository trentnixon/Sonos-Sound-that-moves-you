import React, { Component } from 'react';

import Path1 from "./svg1";
import Path2 from "./svg2";


class DisplaySVG extends Component {
    render(){
        return(
            <div className={"svg svg_"+this.props.className} >
                {this.props.path}
            </div>
        )
    }
}


let ShowThisSVG=null,path=null,length=null;
export default  class SVGContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
            display:false,
            Chapter:null,
            class:"hide"
    };
  }


  animateSVG(go, id){
      
    let path = document.querySelector('.svg_'+id +' path');
    
 
    if(go === true){
      length = path.getTotalLength();

      path.style.transition = path.style.WebkitTransition ='none'
      path.style.strokeDasharray = length + ' ' + length;
      path.style.strokeDashoffset = length;
      
      path.getBoundingClientRect();
      
      path.style.transition = path.style.WebkitTransition ='stroke-dashoffset 4.5s ease-in-out';
      // Go!
      path.style.strokeDashoffset = '0';

    //console.log(this.props,length);
    }
}

  componentWillMount(){}

  shouldComponentUpdate(nextProps, nextState){ return true;}
  
  componentWillUpdate(nextProps, nextState){

        switch(this.props.Chapter) {
          case "1":
            // code block
            ShowThisSVG = <DisplaySVG className={nextProps.Chapter} path={<Path1 />} />
            break;
          case "2":
            // code block
            ShowThisSVG = <DisplaySVG className={this.props.Chapter}  path={<Path2 />}/>
            break;
          case "3":
            // code block
            ShowThisSVG = <DisplaySVG className={nextProps.Chapter} path= {<Path1 />} />
            break;
          case "4":
            // code block
            ShowThisSVG = <DisplaySVG className={nextProps.Chapter} path= {<Path2 />} />
            break;
            case "5":
            // code block
            ShowThisSVG = <DisplaySVG className={nextProps.Chapter} path= {<Path1 />} />
            break;
          case "6":
            // code block
            ShowThisSVG = <DisplaySVG className={nextProps.Chapter} path= {<Path2 />} />
            break;
          default:
            ShowThisSVG = <DisplaySVG className={nextProps.Chapter} path= {<Path1 />} />
        } 

        
        path = document.querySelector('.svg path');
        
        if(path !== null){

          if(this.props.isVisible != this.state.display){
              this.setState({ display:this.props.isVisible }, ()=>{

                  if(this.state.display === true){
                      setTimeout(function(){
                        this.animateSVG(this.props.isVisible , this.props.Chapter)
                        this.setState({ class:"show"})
                      }.bind(this),500)   
               
                }
            });
          }
        }
  } 

  render() {
    if(this.props.isVisible === true){
      return( <div id="" className={"DisplaySVG " + this.state.class}>{ShowThisSVG}</div> )
    }
    else{
      return(<div></div>)
    }
    
  }
} 