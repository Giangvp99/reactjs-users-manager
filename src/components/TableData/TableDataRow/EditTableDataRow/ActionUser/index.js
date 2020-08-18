import React, { Component } from "react";

class ActionUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: true
    };
  }
  Edit() {
    this.setState({
      isEdit: !this.state.isEdit
    });
    this.props.isEdit();
  }
  ShowActionUser() {
    if (this.state.isEdit) {
      return (
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => this.Edit()}
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
      return (
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-warning"
            onClick={(() => this.Edit(), () => this.Edit())}
          >
            Save
          </button>
        </div>
      );
    }
  }
  render() {
    return <div className="ActionUser">{this.ShowActionUser()}</div>;
  }
}

export default ActionUser;
