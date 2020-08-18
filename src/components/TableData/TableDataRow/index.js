import React, { Component } from "react";
import ActionUser from "./EditTableDataRow/ActionUser";
import dbCountry from "../../AddUser/dbCountry.json";
import EditTableDataRow from "./EditTableDataRow";

class TableDataRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      isDelete: false,
      dbCountry: dbCountry
    };
  }
  isEdit = (dl) => {
    this.setState(state => {
      return {
        isEdit: !state.isEdit
      };
    });
    console.log("hi "+dl.first_name);
  };
  isDelete = () => {
    this.setState(state => {
      return {
        isDelete: !state.isDelete
      };
    });
  };
  ShowTableDataRow() {
    if (!this.state.isEdit) {
      return (
        <tr className="text-center">
          <td className="align-middle">{this.props.stt}</td>
          <td className="align-middle">{this.props.dataUser.first_name}</td>
          <td className="align-middle">{this.props.dataUser.last_name}</td>
          <td className="align-middle">{this.props.dataUser.telephone}</td>
          <td className="align-middle">{this.props.dataUser.country}</td>
          <td className="align-middle">
            <ActionUser stateEdit={this.state.isEdit} isEdit={(dl)=>this.isEdit(dl)} isDelete={this.isDelete} />
          </td>
        </tr>
      );
    } else {
      return (
        <EditTableDataRow
          isEdit={(dl)=>this.isEdit(dl)}
          isDelete={this.isDelete}
          stt={this.props.stt}
          dataUser={this.props.dataUser}
          dbCountry={this.state.dbCountry}
          stateEdit={this.state.isEdit}
        />
      );
    }
  }
  render() {
    return this.ShowTableDataRow();
  }
}

export default TableDataRow;
