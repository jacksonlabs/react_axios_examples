import React, { Component } from 'react';
import axios from 'axios';

class PostExampleAsync extends Component {

  state = {
    name: '',
    response_name: ''
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = async event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };
  
    const response = await axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
  
    console.log(response);
    console.log(response.data);

    this.setState({name: this.name, response_name: response.data.user.name})
  };

  render() {
    return (
      <div>
        <h2>Post Example Async</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
        <p>{this.state.response_name}</p>
      </div>
    );
  }

}

export default PostExampleAsync;