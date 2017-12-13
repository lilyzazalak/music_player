import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Search extends Component {
    render(){
   
        return(
            <div className='search-container'>
                <form onSubmit={this.props.getInfo}>
                    <p> Search Artist</p>
                    <input className='search-box' value={this.props.q} name='q' onChange={this.props.onChange}/>
                    <button className='search-button' type='submit'><i className="fa fa-search" aria-hidden="true"></i></button>
                </form>
                <Link to='page2' style={ {display: this.props.infoDataLoaded ? null : "none"}}><button >INFO</button></Link>
                <Link to='page3' style={ {display: this.props.infoDataLoaded ? null : "none"}}><button >VIDEO</button></Link>
                <Link to='page4' style={ {display: this.props.infoDataLoaded ? null : "none"}}><button >EVENTS</button></Link>
            </div>
        )
    }
}

export default Search;