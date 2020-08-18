import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Search from "./Search";
import TableData from "./TableData";
import AddUser from "./AddUser";
import db from "../db.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      db: db,
      dbTableData: db
    };
    this.AddNewUser=this.AddNewUser.bind(this);
  }
  GetFirstName(dl) {
    let users = this.state.db.filter(
      user => user.first_name.indexOf(dl) !== -1
    );
    this.setState({
      dbTableData: users
    });
  }
  AddNewUser(user) {
    this.setState({
      db:[
        ...this.state.db, 
        user
      ], 
      dbTableData:[
        ...this.state.db, 
        user
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container mt-3">
          <div className="row">
            <Search getFirstName={dl => this.GetFirstName(dl)} />
          </div>
          <div className="row">
            <TableData data={this.state.dbTableData} />
            <AddUser addNewUser={this.AddNewUser}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
