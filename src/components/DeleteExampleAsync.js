import React, { Component } from 'react';
import axios from 'axios';

class DeleteExampleAsync extends Component {

  state = {
    id: '',
  }
    
  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = async event => {
    event.preventDefault();

    const id = this.state.id;
  
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
  
    console.log(response);
    console.log(response.data);
  };

  render() {
    return (
      <div>
        <h2>Delete Example Async</h2>
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

export default DeleteExampleAsync;