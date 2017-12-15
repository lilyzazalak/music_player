import React, { Component } from 'react';
import './index.css';
import {Link} from 'react-router-dom';

class InfoPage extends Component {
    render(){
        return(
            <div className='info-container' >
                {/* <div className='info'>
                    {this.props.infoDataLoaded ? <h2>{this.props.music.artists[0].strArtist}</h2> : null}
                 </div> */}
                 <div className='row'>
                    <div className='banner col'>
                        {this.props.infoDataLoaded ?  <img className='banner-img' src= {this.props.music.artists[0].strArtistBanner} height="100" width="500"/> : null}
                    </div>
                 </div>
                 <div className='row'>
                     <div className='col'>
                        {this.props.infoDataLoaded ? <ul className='info-list'>
                    
                            <li><b>GENRE:</b> {this.props.music.artists[0].strGenre}</li>
                            <li><b>MEMBERS:</b> {this.props.music.artists[0].intMembers}</li>
                        
                            <li><b>YEAR FORMED:</b> {this.props.music.artists[0].intFormedYear}</li>
                            <li><b>COUNTRY:</b> {this.props.music.artists[0].strCountry}</li>
                        
                        </ul> : null}
                        <div className='bio-container'>
                        {this.props.infoDataLoaded ?  <p> <b>ABOUT</b> <br/> {this.props.music.artists[0].strBiographyEN}</p>  : null}
                        </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col'>
                        {this.props.infoDataLoaded ? <a className='info-link' href ={'https://' + this.props.music.artists[0].strFacebook}> <i className="fa fa-facebook-official fa-3x link-button1" aria-hidden="true"></i></a> : null }
                        {this.props.infoDataLoaded ? <a className='info-link' href= {'https://' + this.props.music.artists[0].strTwitter}><i className="fa fa-twitter-square fa-3x link-button2" aria-hidden="true"></i></a> : null}
                    </div>
                  </div>
                  <div className='row'>
                      <div className='col'>
                         <Link to='/'><i className="fa fa-long-arrow-left fa-3x back-button" aria-hidden="true"></i></Link>
                     </div>
                 </div>
            
            </div>
        )
    }
}

export default InfoPage;