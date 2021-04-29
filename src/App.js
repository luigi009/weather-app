import './App.css';
import Weather from './app_component/weather.component'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'weather-icons/css/weather-icons.css'
import React from 'react'
import Form from './app_component/form.component'


//api call api.openweathermap.org/data/2.5/weather?q=London&appid={API key}
const API_key ="c0966deb384170eb6f1c92b0a0c9c803";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false
    };

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wisleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmospher: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    }
  }

  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  get_WeatherIcon(icons, rangeId) {
    switch(true) {
        case rangeId >= 200 && rangeId <= 232:
        this.setState({icon: this.weatherIcon.Thunderstorm});
        break;
        case rangeId >= 300 && rangeId <= 321:
          this.setState({icon: this.weatherIcon.Drizzle});
          break;
          case rangeId >= 500 && rangeId <= 531:
            this.setState({icon: this.weatherIcon.Rain});
            break;
            case rangeId >= 600 && rangeId <= 622:
              this.setState({icon: this.weatherIcon.Snow});
              break;
              case rangeId >= 701 && rangeId <= 781:
                this.setState({icon: this.weatherIcon.Atmospher});
                break;
                case rangeId === 800:
                  this.setState({icon: this.weatherIcon.Clear});
                  break;
                  case rangeId >= 801 && rangeId <= 804:
                    this.setState({icon: this.weatherIcon.Clouds});
                    break;
                    default:
                      this.setState({icon: this.weatherIcon.Clouds});
    }
  }

  getWeather = async (e) =>{

    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.city.value;

    if(city && country ) {
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`);

      const response = await api_call.json();
  
      console.log(response);
  
      this.setState({
        city: `${response.name}, ${response.sys.country}`,
        celsius: this.calCelsius(response.main.temp),
        temp_max: this.calCelsius(response.main.temp_max),
        temp_min: this.calCelsius(response.main.temp_min),
        description: translateDescription (response.weather[0].description),
        error: false
      });
  
      this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
    } else {
      this.setState({error: true});
    }
  };

  state = {}
  render() {
    return(
      <div className="App">
        <Form loadweather={this.getWeather} error={this.state.error}/>
        <Weather 
        city={this.state.city} 
        country={this.state.country} 
        temp_celsius={this.state.celsius} 
        temp_max={this.state.temp_max} 
        temp_min={this.state.temp_min}
        description={this.state.description}
        weatherIcon={this.state.icon}
        />
      </div>
    );
  }
}

function translateDescription(description) {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=pt&dt=t&q=" + description, false);
  xhttp.send(null);
  var response = JSON.parse(xhttp.responseText);
  return response[0][0][0];
}

export default App;
