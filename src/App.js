import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      members: []
    }
  }

  componentDidMount() {
    axios.get('https://reqres.in/api/users?page=1')
        .then(response => {
          this.setState({ members: response.data.data })
        })
        .catch(error => {
            console.log('error', error)
        })
  }

  inputOnchangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div className="container">
        <h1>Codepolitan DevSchool</h1>
        <div className="row" >
          <div className="col-6" style={{ border: '1px solid black'}}>
            <h2>Member</h2>
            <div className="row" >

            { this.state.members.map((member) => (
              <div className="col-md-6" key={member.id}>
                <div className="card" style={{ margin: 10}}>
                  <div className="card-body">
                  <h5 className="card-title">{member.id}</h5>
                    <h5 className="card-title">{member.first_name}</h5>
                    <h5 className="card-title">{member.last_name}</h5>
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                  </div>
                </div>
              </div>
            ))}

            </div>
          </div>

          <div className="col-6" style={{ border: '1px solid black'}}>
            <h2>Form</h2>
            <form>
              <div className="form-group">
                <label>First Name</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={this.state.first_name}
                  onChange={this.inputOnchangeHandler}
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={this.state.last_name}
                  onChange={this.inputOnchangeHandler}
                />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;