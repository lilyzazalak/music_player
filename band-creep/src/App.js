import React, { Component } from 'react';
import './index.css';
import axios from 'axios';
import InfoPage from './components/InfoPage';
import VideoPage from './components/VideoPage';
import Search from './components/Search';
import EventsPage from './components/EventsPage';
import { Route, Switch} from 'react-router-dom';



class App extends Component {
  constructor(){
    super();
    this.state={
        q: "",
        info: [],
        video: [],
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
    axios.get('/search?q='+this.state.q)
      .then(res=>{
        this.setState({
          info: res.data,
          infoDataLoaded: true,
        })
      })
  }

 getVideos=(e) => {
   e.preventDefault();
   axios.get('/songs/' + this.state.info.artists[0].idArtist)
    .then(res =>{
      this.setState({
        video: res.data,
        videoDataLoaded: true
      })
    })
  }

  render() {
    return (
        <div>
          <Switch>
             <Route path='/'exact 
                render={()=> <Search getInfo={this.getInfo} 
                                      onChange={this.onChange} 
                                      q={this.state.q} 
                                      infoDataLoaded={this.state.infoDataLoaded}/> } />
             <Route path='/page2' 
                render={()=> <InfoPage info={this.state.info}
                                        infoDataLoaded ={this.state.infoDataLoaded}/> } /> 
             <Route path='/page3' 
                render={()=> <VideoPage info={this.state.info} 
                                          video={this.state.video} 
                                          getVideos={this.getVideos} 
                                          videoDataLoaded ={this.state.videoDataLoaded} 
                                          infoDataLoaded={this.state.infoDataLoaded}/> } />
             <Route path='/page4' 
                render={()=> <EventsPage info={this.state.info} 
                                          q={this.state.q} 
                                          infoDataLoaded={this.state.infoDataLoaded}/>} /> 
          </Switch>
      </div>
    );
  }
}

export default App;
