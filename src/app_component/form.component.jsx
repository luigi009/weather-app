import React from 'react';
import './form.style.css';

const Form = props => {
    return (
        <div className="container">
            <div>{props.error ? error(): null}</div>
            <form onSubmit={props.loadweather}>
                <div className="city-country-info">
                    <div className="d-flex justify-content-center">
                        <input type="text" className="form-control slide-in-right" placeholder={translateDescription("City")} name="city" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <input type="text" className="form-control slide-in-left" placeholder={translateDescription("Country")} name="country" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-result-weather bounce-in-top">{translateDescription("Search Weather")}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

function error(){
    return(
        <div className="alert alert-danger mx-5" role="alert">
            {translateDescription("Please Enter City and Country")}
        </div>
    );
}

function translateDescription(description) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=pt&dt=t&q=" + description, false);
    xhttp.send(null);
    var response = JSON.parse(xhttp.responseText);
    return response[0][0][0];
  }

export default Form;