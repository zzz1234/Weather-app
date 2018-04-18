import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Location from './containers/Location/Location';
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Location />    
          </Layout>
      </div>
    );
  }
}

export default App;
