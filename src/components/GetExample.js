import React, { Component } from 'react';
import axios from 'axios';

class GetExample extends Component {

  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(response => {
        console.log(response);
        console.log(response.data);

        this.setState({ persons: response.data });
      })
  }

  render() {
    return (
      <div>
        <h2>Get Example</h2>
        <ul>
          { this.state.persons.map(person => <li>{person.name}</li>)}
        </ul>
      </div>
    );
  }

}

export default GetExample;