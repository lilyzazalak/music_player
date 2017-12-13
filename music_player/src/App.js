import React, { Component } from 'react';
import './index.css';
import axios from 'axios';
import InfoPage from './InfoPage';
import VideoPage from './VideoPage';
import Search from './Search';
import EventsPage from './EventsPage';
import { Route, Switch} from 'react-router-dom';



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

 getVideos=(e) => {
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

    

    return (
        <div className ='app'>
          <Switch>
             <Route path='/'exact render={()=> <Search getInfo={this.getInfo} onChange={this.onChange} q={this.state.q} infoDataLoaded={this.state.infoDataLoaded}/> } />
             <Route path='/page2' render={()=> <InfoPage music={this.state.music} songs={this.state.songs} infoDataLoaded ={this.state.infoDataLoaded}/> } /> 
             <Route path='/page3' render={()=> <VideoPage songs={this.state.songs} getVideos={this.getVideos} videoDataLoaded ={this.state.videoDataLoaded}/> } />
             <Route path='/page4' render={()=> <EventsPage music={this.state.music} q={this.state.q} />} /> 
          </Switch>
        
        
      </div>
      
        
      
    );
  }
}

export default App;
