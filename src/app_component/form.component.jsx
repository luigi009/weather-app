import React from 'react';
import './form.style.css';

const Form = props => {
    return (
        <div className="container">
            <div>{props.error ? error(): null}</div>
            <form onSubmit={props.loadweather}>
                <div className="city-country-info">
                    <div className="d-flex justify-content-center">
                        <input type="text" className="form-control slide-in-right" placeholder="City" name="city" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <input type="text" className="form-control slide-in-left" placeholder="Country" name="country" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-result-weather bounce-in-top">Search Weather</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

function error(){
    return(
        <div className="alert alert-danger mx-5" role="alert">
            Please Enter City and Country
        </div>
    );
}

export default Form;