import React, { Component } from 'react';
import axios from 'axios';

class DeleteExample extends Component {

  state = {
    id: '',
  }
    
  handleChange = event => {
    this.setState({ id: event.target.value });
  }
    
  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then(response => {
        console.log(response);
        console.log(response.data);
      })
  }

  render() {
    return (
      <div>
        <h2>Delete Example</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person ID:
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
          <p>See console for response data.</p>
        </form>
      </div>
    );
  }

}

export default DeleteExample;