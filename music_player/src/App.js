import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import MusicPage from './MusicPage';


class App extends Component {
  constructor(){
    super();
    this.state={
        q: "",
        music: [],
        dataLoaded: false
    }
  }
  onChange=(e)=> {
  this.setState({
    q: e.target.value
  }, console.log(this.state))
}

onSubmit=(e)=>{
  e.preventDefault();
  axios.get('http://localhost:8080/search?q='+this.state.q)
      .then(res=>{
        console.log(res.data.artists[0].strArtist)
        this.setState({
          music: res.data,
          dataLoaded: true
      }, ()=> console.log( this.state))
  })
  
      }
    

  render() {
    return (
        <div>
                <form onSubmit={this.onSubmit}>
                    <p> Search Artist</p>
                    <input value={this.state.q} name='q' onChange={this.onChange}/>
                    <button type='submit'>Click here!</button>
                </form>

                <p>ARTIST INFO</p>
                    
             <div>
                  {this.state.dataLoaded ? <MusicPage music={this.state.music} /> : null}
                   
               </div>
               <iframe width="560" height="315" src="https://www.youtube.com/embed/DHkbhQC1hDc" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
        </div>
      
    );
  }
}

export default App;
