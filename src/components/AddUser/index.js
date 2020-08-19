import React, { Component } from "react";
import dbCountry from "./dbCountry.json";
import SelectCountry from "./SelectCountry";
import ActionSelect from "./ActionSelect";

const shortid=require('shortid');

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dbCountry: dbCountry,
      whatAction: true
    };
  }

  ChangeState() {
    this.setState({
      whatAction: !this.state.whatAction
    });
  }

  isChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value
    });
  }
  NewUser() {
    let user = {};
    user.id=shortid.generate();
    user.first_name = this.state.fFirstName;
    user.last_name = this.state.fLastName;
    user.telephone = this.state.fTelephon;
    user.country = this.state.fCountry;
    this.props.addNewUser(user);
  }
  ShowCardAddUser = () => {
    if (!this.state.whatAction) {
      return (
        <div className="card border-info mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-header h3 text-primary">Add a new user</div>
          <div className="card-body text-info">
            <form action="#2">
              <div className="input-group">
                <input
                  name="fFirstName"
                  type="text"
                  className="form-control w-100 mb-2 rounded"
                  placeholder="Enter first name"
                  onChange={event => this.isChange(event)}
                />
                <input
                  name="fLastName"
                  type="text"
                  className="form-control w-100 mb-2 rounded"
                  placeholder="Enter last name"
                  onChange={event => this.isChange(event)}
                />
                <input
                  name="fTelephon"
                  type="text"
                  className="form-control w-100 mb-2 rounded"
                  placeholder="Enter telephone number"
                  onChange={event => this.isChange(event)}
                />
                <select
                  className="custom-select mb-3"
                  name="fCountry"
                  onChange={event => this.isChange(event)}
                >
                  <option defaultValue>Select country</option>
                  {this.state.dbCountry.map((value, key) => (
                    <SelectCountry key={key} data={value} />
                  ))}
                </select>
                <input
                  type="reset"
                  value="Add"
                  className="btn btn-primary w-100"
                  onClick={() => this.NewUser()}
                />
              </div>
            </form>
          </div>
        </div>
      );
    }
  };
  render() {
    return (
      <div className="col-lg-3">
        <ActionSelect
          changeState={() => this.ChangeState()}
          whatAction={this.state.whatAction}
        />
        {this.ShowCardAddUser()}
      </div>
    );
  }
}

export default AddUser;
