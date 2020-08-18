import React, { Component } from "react";
import SelectCountry from "../../../AddUser/SelectCountry";
import ActionUser from "./ActionUser";

class EditTableDataRow extends Component {
  render() {
    return (
      <tr className="text-center">
        <td className="align-middle">{this.props.stt}</td>
        <td className="align-middle">
          <input
            type="text"
            defaultValue={this.props.dataUser.first_name}
            style={{
              width: "100px",
              outline: "none",
              border: "none",
              fontStyle: "italic"
            }}
          />
        </td>
        <td className="align-middle">
          <input
            type="text"
            defaultValue={this.props.dataUser.last_name}
            style={{
              width: "100px",
              outline: "none",
              border: "none",
              fontStyle: "italic"
            }}
          />
        </td>
        <td className="align-middle">
          <input
            type="text"
            defaultValue={this.props.dataUser.telephone}
            style={{
              width: "120px",
              outline: "none",
              border: "none",
              fontStyle: "italic"
            }}
          />
        </td>
        <td className="align-middle">
          <select className="custom-select">
            <option defaultValue>{this.props.dataUser.country}</option>
            {this.props.dbCountry.map((value, key) => (
              <SelectCountry key={key} data={value} />
            ))}
          </select>
        </td>
        <td className="align-middle">
          <ActionUser isEdit={this.props.isEdit} isDelete={this.props.isDelete} />
        </td>
      </tr>
    );
  }
}

export default EditTableDataRow;
