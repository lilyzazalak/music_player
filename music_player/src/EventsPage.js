
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
          events: []
        };
      }
    
      handleChange1 = (event, date) => {
        this.setState({
          value1: date,
        });
      };
      handleChange2 = (event, date) => {
        let formatedDate2 = moment(date).format()
        let NewDate2 = formatedDate2.split('T')
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
        axios.get('http://localhost:8080/events/' + NewDate1[0] + '/' + NewDate2[0] + '/' + this.props.q)
            .then(res=>{
              this.setState({
               events : res.data,
            }, ()=> console.log(this.state))
        })
       }

    render(){
        
        return(
            <div>
                <DatePicker hintText="Pick A Date" value={this.state.value1} onChange={this.handleChange1}/>
                <DatePicker hintText="Pick Another Date" value={this.state.value2} onChange={this.handleChange2} />
                <button onClick={this.onSubmit} >Find Events</button>
                <div>
                     <table>
                         <tr>
                            <th>DATE & TIME</th>
                            <th>VENUE</th>
                            <th>LOCATION</th>
                        </tr>
                        {this.state.events.map(event=>{
                        let EventTime = event.datetime.split('T');
                        return (
                        <tr>
                            <th>{EventTime[0]} {EventTime[1]}</th>
                            <th>{event.venue.name}</th>
                            <th>{event.venue.city} , {event.venue.country}</th>
                        </tr>
                        )}) }
                    </table>
                </div>
                <Link to='/'><button>BACK</button></Link>
            </div>
        )
    }
}

export default EventsPage;