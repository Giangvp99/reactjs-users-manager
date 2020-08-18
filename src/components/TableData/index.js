import React, { Component } from "react";
import TableDataRow from "./TableDataRow";

class TableData extends Component {
  render() {
    return (
      <table className="table table-striped table-hover col-lg-9">
        <thead>
          <tr className="text-center">
            <th>STT</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Telephone</th>
            <th>Country</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((value, key) => (
            <TableDataRow key={key} dataUser={value} stt={key+1}/>
          ))}
        </tbody>
      </table>
    );
  }
}

export default TableData;
