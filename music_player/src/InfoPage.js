import React, { Component } from 'react';
import './index.css';
import {Link} from 'react-router-dom';

class InfoPage extends Component {
    render(){
        return(
            <div>
                {this.props.infoDataLoaded ? <h2>{this.props.music.artists[0].strArtist}</h2> : null}
                 {this.props.infoDataLoaded ?  <p>GENRE: {this.props.music.artists[0].strGenre}</p> : null}
                  {this.props.infoDataLoaded ?  <h3>BIO: {this.props.music.artists[0].strBiographyEN}</h3>  : null}
                  {this.props.infoDataLoaded ?  <img src= {this.props.music.artists[0].strArtistBanner} height="300" width="800"/> : null}
                  <Link to='/'><button>BACK</button></Link>
            </div>
        )
    }
}

export default InfoPage;