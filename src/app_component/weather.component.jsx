import React from 'react';
import './wheatherResult.css'

const Weather = (props) => {
    return (
        <div className="container text-light">
            <div className="cards pt-4">
                {/**Show max and min temp */}
                {minmaxTemp(props.temp_min,props.temp_max)}

                <h5 className="wheather-icon">
                    <i className={`wi ${props.weatherIcon} display-1`}></i>
                </h5>

                <div className="d-flex flex-row justify-content-center">
                    {props.temp_celsius ? (<h1 className="temp-now scale-in-ver-center">{props.temp_celsius}&deg;</h1>): null}

                    <h1 className="description">{props.description}</h1>
                </div>

                <h4 className="city">{props.city}</h4>

            </div>
        </div>
    );
};

function minmaxTemp(min, max) {

    if(min && max) {
        return(
            <h3>
            <span className="temp-min slide-in-left">Min: {min}&deg;</span>
            <span className="temp-max slide-in-right">Max: {max}&deg;</span>
        </h3>
        );
    }
}

export default Weather;