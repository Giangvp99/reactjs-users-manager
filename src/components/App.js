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
      textSearch: ""
    };
    this.AddNewUser = this.AddNewUser.bind(this);
  }
  GetFirstName(dl) {
    if (dl !== undefined) {
      this.setState({
        textSearch: dl
      });
    }
  }
  AddNewUser(user) {
    this.setState({
      db: [...this.state.db, user]
    });
  }
  GetUserEdit(dl) {
    if (dl.id !== undefined) {
      let index = this.state.db.findIndex(user => user.id === dl.id);
      this.setState({
        db: [
          ...this.state.db.slice(0, index),
          {
            ...dl
          },
          ...this.state.db.slice(index + 1)
        ]
      });
    }
  }
  DeleteUser(dl) {
    if (dl.id !== undefined) {
      let index = this.state.db.findIndex(user => user.id === dl.id);
      this.setState({
        db: [...this.state.db.slice(0, index), ...this.state.db.slice(index + 1)]
      });
    }
  }
  render() {
    let users = [];
    users = this.state.db.filter(
      user => user.first_name.indexOf(this.state.textSearch) !== -1
    );
    return (
      <div className="App">
        <Header />
        <div className="container mt-3">
          <div className="row">
            <Search getFirstName={dl => this.GetFirstName(dl)} />
          </div>
          <div className="row">
            <TableData
              data={users}
              getUserEdit={dl => this.GetUserEdit(dl)}
              deleteUser={dl => this.DeleteUser(dl)}
            />
            <AddUser addNewUser={this.AddNewUser} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
