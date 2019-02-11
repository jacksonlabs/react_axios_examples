import React, { Component } from 'react';

import GetExample from './components/GetExample';
import GetExampleAsync from './components/GetExampleAsync';

import PostExample from './components/PostExample';
import PostExampleAsync from './components/PostExampleAsync';

import DeleteExample from './components/DeleteExample';
import DeleteExampleAsync from './components/DeleteExampleAsync';

class App extends Component {

  render() {
    return (
      <div>
        <table>
          <tr>
            <td><GetExample /></td><td><GetExampleAsync /></td>
          </tr>
          <tr>
            <td><PostExample /></td><td><PostExampleAsync /></td>
          </tr>
          <tr>
            <td><DeleteExample /></td><td><DeleteExampleAsync /></td>
          </tr>
        </table>
      </div>
    );
  }

}

export default App;