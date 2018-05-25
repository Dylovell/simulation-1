import React, { Component } from 'react';
import Product from './Product.js'

class Dashboard extends Component {
  render() {
    return (
      <div>
          <p>Dashboard</p>
            <Product/>
      </div>
    );
  }
}

export default Dashboard;
