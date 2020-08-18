import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  FirstName(event) {
    let firstName = "";
    firstName = event.target.value;
    this.props.getFirstName(firstName);
  }
  render() {
    return (
      <div className="Search col-12 mt-5 mb-5">
        <h3>Find info users by first name</h3>
        <div className="input-group w-75">
          <input
            type="text"
            className="form-control"
            placeholder="Input first name of user ..."
            onKeyUp={event => this.FirstName(event)}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Find
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
