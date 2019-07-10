import React, { Component } from 'react';
import {GA} from  "../../../../../actions/ga";



class Timer extends Component{
    render(){
        if(this.props.Duration !== undefined){
            return(
                <p>{`${this.props.Current} / ${this.props.Duration}` }</p>
            )
        }
        else{
            return(<div></div>)
        }
    }
}


export default  class HTML5Audio extends Component {
    state={}
    constructor(props) {
        super(props);
        this.state = {
                ButtonIcon:"play_arrow",
                duration:0,
                currentTime:0,
                percentage:0
        };
      }
    componentWillMount(){ }
  
    componentDidMount() {

            this.player.addEventListener("timeupdate", e => {
                this.setState({
                  currentTime: this.getTime(e.target.currentTime),
                  duration: this.getTime(e.target.duration),
                  percentage:(e.target.currentTime/e.target.duration)*100+"%"
                 
                });
              });
    
        this.player.src = this.props.src;
      }
     
      getTime(time) {
        if(!isNaN(time)) {
          return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
        }
      }

    PlayAudio(){
        if (this.player.paused) {
            this.player.play();
            this.setState({ButtonIcon:'pause'});
            GA('Audio Clicked', 'Play', this.props.src)
          } else {
            this.player.pause();
            this.setState({ButtonIcon:'play_arrow'});
            GA('Audio Clicked', 'Paused', this.props.src)
          }
    }

    PlayAgain(){ 
        this.player.currentTime = 0;  
        GA('Audio Clicked', 'Reset', this.props.src)
    }
    componentWillUnmount() { this.player.removeEventListener("timeupdate", () => {}); }

    render() {  

      return(
          <div className="AudioPlayerContainerInner">
              
              <div className="ControlBar">

                <div className="ActionButton" >
                    <button onClick={()=>{this.PlayAudio()}}>
                        <i className="material-icons"> {this.state.ButtonIcon} </i>
                    </button>
                </div >
                       
          
                <div className="AudioMeta">
                    <Timer Current={this.state.currentTime} Duration= {this.state.duration}  />
                </div>
                

                <div className="ResetAudio">
                    <button onClick={()=>{this.PlayAgain()}} >
                            <i className="material-icons"> settings_backup_restore </i>
                    </button>
                </div>

              </div>
                
            
            <div className="progressBar" style={{"width":this.state.percentage}}></div>

            <audio ref={ref => this.player = ref} id="audio_player"   controlsList="nodownload">
                <source src="" type="audio/mpeg" />
                <p>Your browser does not support the audio element.</p>
            </audio>
          </div>
       
      )
    }
  } 