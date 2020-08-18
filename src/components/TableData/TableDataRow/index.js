import React, { Component } from "react";
import ActionUser from "./ActionUser";
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
    this.isEdit = this.isEdit.bind(this);
    this.isDelete = this.isDelete.bind(this);
  }
  isEdit = () => {
    this.setState({
      isEdit: !this.state.isEdit
    });
  };
  isDelete = () => {
    this.setState({
      isDelete: !this.state.isDelete
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
            <ActionUser isEdit={this.isEdit} isDelete={this.isDelete} />
          </td>
        </tr>
      );
    } else {
      return (
        <EditTableDataRow
          isEdit={this.isEdit}
          isDelete={this.isDelete}
          stt={this.props.stt}
          dataUser={this.props.dataUser}
          dbCountry={this.state.dbCountry}
        />
      );
    }
  }
  render() {
    return this.ShowTableDataRow();
  }
}

export default TableDataRow;
