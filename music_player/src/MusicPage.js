import React, { Component } from 'react';

class MusicPage extends Component {
    render(){
        return(
            <div>
                <h2>{this.props.music.artists[0].strArtist}</h2>
                  <p>GENRE: {this.props.music.artists[0].strGenre}</p>
                   <h3>BIO: {this.props.music.artists[0].strBiographyEN}</h3> 
                   <img src= {this.props.music.artists[0].strArtistBanner} height="300" width="800"/>
            </div>
        )
    }
}

export default MusicPage;