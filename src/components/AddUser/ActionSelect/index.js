import React, { Component } from "react";

class ActionSelect extends Component {
  whatAction = () => {
    if (this.props.whatAction) {
      return (
        <button type="button" className="btn btn-primary mb-2" onClick={this.props.changeState}>
          Add a new user
        </button>
      );
    } else {
      return (
        <button type="button" className="btn btn-warning mb-2" onClick={this.props.changeState}>
          Hide
        </button>
      );
    }
  };
  render() {
    return (
      <div className="ActionSelect mb-3">
        <div className="btn-group-vertical w-100" role="group">
          {this.whatAction()}
        </div>
      </div>
    );
  }
}

export default ActionSelect;
