import React, { Component } from 'react';

class SelectCountry extends Component {

  render() {
    return (
      <option value={this.props.data.country}>{this.props.data.country}</option>
    );
  }
}

export default SelectCountry;
