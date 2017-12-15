import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Search extends Component {
    render(){
   
        return(
            <div>
                <div className='row'>
                    <div className='col search-container'>
                        <form onSubmit={this.props.getInfo} className='search-form'>
                            <h5> Search Artist</h5>
                            <input className='search-box' value={this.props.q} name='q' onChange={this.props.onChange}/>
                            <button className='search-button' type='submit'><i className="fa fa-search" aria-hidden="true"></i></button>
                        </form>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                       {this.props.infoDataLoaded ? null : <h1 className='app-name'>MUSIC</h1>}
                        <p className={ this.props.infoDataLoaded ? 'nav-buttons1 label' : "nav-buttons-hidden"}>INFO</p>
                        <Link to='page2' className='link'> <i className={ this.props.infoDataLoaded ? 'nav-buttons1 nav fa fa-info-circle fa-5x' : "nav-buttons-hidden"} aria-hidden="true"></i></Link>
                    </div>
                    <div className='col'>
                        <p className={ this.props.infoDataLoaded ? 'nav-buttons2 label2' : "nav-buttons-hidden"}>VIDEOS</p>
                        <Link to='page3' className='link'>  <i className={ this.props.infoDataLoaded ? 'nav-buttons2 nav fa fa-youtube-square fa-5x' : "nav-buttons-hidden"} aria-hidden="true"></i></Link>
                    </div>
                    <div className='col'>
                        <p className={ this.props.infoDataLoaded ? 'nav-buttons3 label2' : "nav-buttons-hidden"}>EVENTS</p>
                        <Link to='page4' className='link'>  <i className={ this.props.infoDataLoaded ? 'nav-buttons3 nav fa fa-calendar fa-5x' : "nav-buttons-hidden"} aria-hidden="true"></i></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;