import React, { Component } from 'react';
import axios from 'axios';

class GetExampleAsync extends Component {

  state = {
    persons: []
  }

  componentDidMount = async event => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)

    console.log(response);
    console.log(response.data);
        
    this.setState({ persons: response.data });
  }

  render() {
    return (
      <div>
        <h2>Get Example Async</h2>
        <ul>
          { this.state.persons.map(person => <li>{person.name}</li>)}
        </ul>
      </div>
    );
  }

}

export default GetExampleAsync;