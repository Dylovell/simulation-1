import React, { Component } from 'react';
import Product from './Product.js';
import axios from 'axios';

class Dashboard extends Component {
    constructor(){
        super()
        this.state={
            selfie:[],
        }
    }

    componentDidMount() {
        axios.get('/api/selfie').then((res) => {
          this.setState({
            selfie: res.data
          })
        })
      }    

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
