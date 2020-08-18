import React, { Component } from "react";

class ActionUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: this.props.stateEdit
    };
  }
  ShowActionUser() {
    if (!this.state.isEdit) {
      return (
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-warning"
            onClick={this.props.isEdit}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.props.isDelete()}
          >
            Delete
          </button>
        </div>
      );
    } else {
      console.log(this.props.data);
      return (
        <button
          type="button"
          className="btn btn-primary w-100"
          onClick={() => this.props.isEdit(this.props.data)}
        >
          Save
        </button>
      );
    }
  }
  render() {
    return <div className="ActionUser">{this.ShowActionUser()}</div>;
  }
}

export default ActionUser;
