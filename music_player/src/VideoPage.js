import React, { Component } from 'react';
import './index.css';
import {Link} from 'react-router-dom';

class VideoPage extends Component {
    render(){
        let musicVid = this.props.videoDataLoaded ? this.props.songs.mvids.map((songs, i) =>{
            return(songs.strMusicVid.split('='))
          }) : null
            
        return(
            <div>
               { this.props.videoDataLoaded ? <h1> SONGS ARE HERE! </h1> : null}
                 <form onSubmit={this.props.getVideos}> 
                    <button type='submit'>ARTIST SONGS</button>
                </form> 
                {this.props.videoDataLoaded ? musicVid.map(video=>{
                        return (
                            
                              <iframe width="260" height="115" src={'https://www.youtube.com/embed/' + video[1]}
                               frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen>
                              </iframe>
                            
                        )
                    })
                    : null} 

                <Link to='/'><button>BACK</button></Link>
            </div>
        )
    }
}

export default VideoPage;