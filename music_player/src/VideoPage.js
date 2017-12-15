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
                <div className='row'>
                    <div className='col'>
                        <h1 className='video-title'>MUSIC VIDEOS</h1>
                        {this.props.infoDataLoaded ? <h3>Click Here to load {this.props.music.artists[0].strArtist}'s music videos</h3> : null}
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        {this.props.infoDataLoaded ? <form onSubmit={this.props.getVideos}> 
                            <button className='video-button' type='submit'><i  class="fa fa-video-camera fa-3x" aria-hidden="true"></i></button>
                            </form> : null}
                    </div>
                </div>
                {this.props.videoDataLoaded ? musicVid.map(video=>{
                        return (
                            <div className='video'>
                              <iframe width="260" height="115" src={'https://www.youtube.com/embed/' + video[1]}
                               frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen>
                              </iframe>
                            </div>
                        )
                    })
                    : null} 

                <Link to='/'><i className="fa fa-long-arrow-left fa-3x back-button-video" aria-hidden="true"></i></Link>
            </div>
        )
    }
}

export default VideoPage;