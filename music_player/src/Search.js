import React, { Component } from 'react';
class Search extends Component {
    render(){
   
        return(
            <div className='search-container'>
                <form onSubmit={this.props.getInfo}>
                    <p> Search Artist</p>
                    <input className='search-box' value={this.props.q} name='q' onChange={this.props.onChange}/>
                    <button className='search-button' type='submit'><i className="fa fa-search" aria-hidden="true"></i></button>
                </form>
            </div>
        )
    }
}

export default Search;