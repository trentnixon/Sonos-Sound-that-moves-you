import React, { Component } from 'react';
import TrackVisibility from 'react-on-screen';
import SectionCopy from "./SectionComponents/SectionCopy";

export default  class AppSection extends Component {
    componentWillMount(){}
  
    shouldComponentUpdate(nextProps, nextState){ return true;}
  
    componentWillUpdate(nextProps, nextState){} 

  render() {

   //console.log(this.props)


    return(
        <div className="AppSection" id="Int_Iframe" >
            <div className="SectionInner "> 
                <div className="TextSection SectionContent">
                    <TrackVisibility partialVisibility >
                        <SectionCopy 
                            Copy="Fine tune your mood"
                            Tag="h1"
                            Class=""
                            Chapter={6}
                        />
                    </TrackVisibility>
                </div>

                <div className="TextSection SectionContent">
                    <TrackVisibility partialVisibility >
                        <SectionCopy 
                            Copy="listen to the SONOS Sounds that move you playlist"
                            Tag="p"
                            Class=""
                            Chapter={6}
                        />
                    </TrackVisibility>
                </div>
             
            
            <iframe 
                src={"https://open.spotify.com/embed/user/spotify/playlist/"+this.props.src}
                width="100%" 
                height="400" 
                frameBorder="0" 
                allowtransparency="true"
                title="Spotify" 
                allow="encrypted-media">
                
                </iframe>     
            </div>
        </div>
    )
  }
} 