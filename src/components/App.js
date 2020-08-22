import React from "react";
import Search from "./search";
import axios from "axios";
import "./style.css";

class App extends React.Component {
  state = {
    confirmed: "",
    recovered: "",
    deaths: "",
    total: "",
    lastUpdateDate: "",
  };
  onSearchSubmit = async (name, iso2, iso3) => {
    const response = await axios.get(
      "https://covid19.mathdro.id/api/countries/" + name,
      iso2,
      iso3
    );

    this.setState({ confirmed: response.data.confirmed.value });
    this.setState({ recovered: response.data.recovered.value });
    this.setState({ deaths: response.data.deaths.value });
    this.setState({ lastUpdateDate: response.data.lastUpdate });
    this.setState({
      remaining:
        response.data.confirmed.value -
        response.data.recovered.value -
        response.data.deaths.value,
    });
  };
  render() {
    return (
      <div className="ui container">
        <Search onSubmit={this.onSearchSubmit} />
        <div>
          <ul>
            <li className="confirmed">Confirmed = {this.state.confirmed} </li>
            <li className="recovered">Recovered = {this.state.recovered}</li>
            <li className="death">Deaths = {this.state.deaths}</li>
            <li className="total">Remaining = {this.state.remaining}</li>
            <li className="date">
              Last Update Date = {this.state.lastUpdateDate}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default App;
