import React, {Component} from 'react';
import DatePicker from 'material-ui/DatePicker';
import axios from 'axios';
import moment from 'moment';
import {Link} from 'react-router-dom';

class EventsPage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          value1: null,
          value2: null,
          events: [],
          eventDataLoaded: false
        };
      }
    
    handleChange1 = (event, date) => {
        this.setState({
          value1: date,
        });
    };

    handleChange2 = (event, date) => {
        this.setState({
          value2: date,
        });
    };

    onSubmit=(e)=>{
        e.preventDefault();
        let formatedDate1 = moment(this.state.value1).format()
        let NewDate1 = formatedDate1.split('T')
        let formatedDate2 = moment(this.state.value2).format()
        let NewDate2 = formatedDate2.split('T')
        axios.get('/events/' + NewDate1[0] + '/' + NewDate2[0] + '/' + this.props.q)
            .then(res=>{
              this.setState({
               events : res.data,
               eventDataLoaded: true
            })
        })
    }

    render(){
        return(
            <div>
                <div className='row'>
                    <div className='col'>
                        <h1 className='events-title'>
                            Events
                        </h1>
                        {this.props.infoDataLoaded ? 
                            <h3>
                                Find {this.props.info.artists[0].strArtist}'s upcoming events
                            </h3> 
                        : null}
                        <div className='date-container'>
                            <div className='date-picker1'>
                                <DatePicker hintText="Pick A Date" 
                                            value={this.state.value1} 
                                            onChange={this.handleChange1}/>
                            </div>
                            <div className='date-picker2'>    
                                <DatePicker hintText="Pick Another Date" 
                                            value={this.state.value2} 
                                            onChange={this.handleChange2} />
                            </div>
                            <button className='events-button' onClick={this.onSubmit} >
                                <i className="fa fa-search " aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
                {this.state.eventDataLoaded ?
                    <div className='event-container row'>
                        <table className='event-table col'>
                            <tbody>
                                <tr className='header-row'>
                                    <th><h4>DATE & TIME</h4></th>
                                    <th><h4>VENUE</h4></th>
                                    <th><h4>LOCATION</h4></th>
                                </tr>
                                {this.state.events.map(event=>{
                                     let EventTime = event.datetime.split('T');
                                     return (
                                        <tr>
                                            <th className='event-border'>{EventTime[0]} {EventTime[1]}</th>
                                            <th className='event-border'>{event.venue.name}</th>
                                            <th>{event.venue.city} , {event.venue.country}</th>
                                        </tr>
                                )}) }
                            </tbody>
                        </table> 
                    </div> 
                : null}
                <Link to='/'>
                    <i className="fa fa-long-arrow-left fa-3x back-button-video" aria-hidden="true"></i>
                </Link>
            </div>
        )
    }
}

export default EventsPage;