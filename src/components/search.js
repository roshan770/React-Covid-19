import React from "react";

class Search extends React.Component {
  state = {
    name: "",
    iso2: "",
    iso3: "",
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.name);
    this.props.onSubmit(this.state.iso2);
    this.props.onSubmit(this.state.iso3);
  };

  render() {
    return (
      <div className="ui segment">
        <div className="field">
          <form onSubmit={this.onFormSubmit} className="ui form">
            <input
              placeholder="Please Enter the valid Country Name, IOS2, IOS3"
              required
              type="text"
              value={this.state.name}
              onChange={(e) =>
                this.setState({
                  name: e.target.value,
                  iso2: e.target.value,
                  iso3: e.target.value,
                })
              }
            />
          </form>
        </div>
      </div>
    );
  }
}
export default Search;
