import React, { Component } from "react";
import SelectCountry from "../../../AddUser/SelectCountry";
import ActionUser from "./ActionUser";

class EditTableDataRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }
  isChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      data:{
        [name]:value
      }
    });
  }
  render() {
    return (
      <tr className="text-center">
        <td className="align-middle">{this.props.stt}</td>
        <td className="align-middle">
          <input
            name="fFirstName"
            type="text"
            defaultValue={this.props.dataUser.first_name}
            style={{
              width: "100px",
              outline: "none",
              border: "none",
              fontStyle: "italic"
            }}
            autoFocus
            onChange={event => this.isChange(event)}
          />
        </td>
        <td className="align-middle">
          <input
            name="fLastName"
            type="text"
            defaultValue={this.props.dataUser.last_name}
            style={{
              width: "100px",
              outline: "none",
              border: "none",
              fontStyle: "italic"
            }}
            onChange={event => this.isChange(event)}
          />
        </td>
        <td className="align-middle">
          <input
            name="fTelephone"
            type="text"
            defaultValue={this.props.dataUser.telephone}
            style={{
              width: "120px",
              outline: "none",
              border: "none",
              fontStyle: "italic"
            }}
            onChange={event => this.isChange(event)}
          />
        </td>
        <td className="align-middle">
          <select
            className="custom-select"
            name="fCountry"
            onChange={event => this.isChange(event)}
          >
            <option defaultValue>{this.props.dataUser.country}</option>
            {this.props.dbCountry.map((value, key) => (
              <SelectCountry key={key} data={value} />
            ))}
          </select>
        </td>
        <td className="align-middle">
          <ActionUser
            stateEdit={this.props.stateEdit}
            isEdit={dl => this.props.isEdit(dl)}
            isDelete={this.props.isDelete}
            data={this.state.data}
          />
        </td>
      </tr>
    );
  }
}

export default EditTableDataRow;
