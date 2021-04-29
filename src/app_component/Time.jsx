import React, { Component } from 'react'
import './time.css'

class Timer extends Component {
    state = {
        time: new Date(),
        date: new Date()
    };

    callMe() {
        setInterval(() => {
            this.setState({time: new Date()})
        }, 1000);
    }

    render () {
        return (
            <div className="time-data">
                <h5 className="date-string slide-in-blurred-right">{this.state.date.toLocaleDateString()}</h5>
                <h1 className="time-string slide-in-blurred-left">{this.state.time.toLocaleTimeString()}</h1>
                {this.callMe()}
            </div>
        );
    }
}

export default Timer;