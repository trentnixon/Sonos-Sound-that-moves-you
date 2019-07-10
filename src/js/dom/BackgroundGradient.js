import React from 'react';


export default class BackgroundGradient extends React.Component {
    state={}
    constructor(props) {
        super(props);
        this.state = {
                class: 0,
                opacity:'show',
                HoldClass:0
        };
      }

    opacity(){
            //console.log("this");
            this.setState({
                opacity:'show',
                HoldClass: this.props.ParentClass,
               
              });
    }
  render() {

    if(this.props.ParentClass !== this.state.class){
        this.setState({
            opacity:'hide',
            class: this.props.ParentClass,
          });

          setTimeout(function(){ this.opacity()}.bind(this) , 300)
    }
    return(
        <div className={"SectionParent Section_" + this.state.HoldClass + ' ' + this.state.opacity }> </div>
    )
  }
}
 