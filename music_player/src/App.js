import React, { Component } from 'react';
import './index.css';
import axios from 'axios';
import MusicPage from './MusicPage';
import SongsPage from './SongsPage';
import Search from './Search';

class App extends Component {
  constructor(){
    super();
    this.state={
        q: "",
        music: [],
        songs: [],
        infoDataLoaded: false,
        videoDataLoaded: false
    }
  }
  onChange=(e)=> {
  this.setState({
    q: e.target.value
  })
}

getInfo=(e)=>{
  e.preventDefault();
  axios.get('http://localhost:8080/search?q='+this.state.q)
      .then(res=>{
        // console.log(res.data.artists[0].strArtist)
        this.setState({
          music: res.data,
          infoDataLoaded: true,
      }, ()=> console.log(this.state))
  })
 }

 getSongs=(e) => {
   e.preventDefault();
   axios.get('http://localhost:8080/songs/' + this.state.music.artists[0].idArtist)
    .then(res =>{
      console.log(res.data.mvids[0].strMusicVid)
      this.setState({
        songs: res.data,
        videoDataLoaded: true
      }
    , ()=> console.log(this.state))
    })
 }
    

  render() {
   let musicVid = this.state.videoDataLoaded ? this.state.songs.mvids.map((songs, i) =>{
      return(songs.strMusicVid.split('='))
    }) : null


    console.log(musicVid);

    return (
        <div className ='app'>
          <Search getInfo={this.getInfo} onChange={this.onChange} q={this.state.q} />
          {this.state.infoDataLoaded ? <MusicPage music={this.state.music} songs={this.state.songs}/> : null }
          { this.state.videoDataLoaded ? <SongsPage songs={this.state.songs} /> : null }
          {this.state.videoDataLoaded ? musicVid.map(video=>{
                        return (
                            
                              <iframe width="260" height="115" src={'https://www.youtube.com/embed/' + video[1]}
                               frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen>
                              </iframe>
                            
                        )
                    })
                    : null}
          <form onSubmit={this.getSongs}>
            <button type='submit'>ARTIST SONGS</button>
          </form>
          
      </div>
      
        
      
    );
  }
}

export default App;
