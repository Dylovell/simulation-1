import React, { Component } from 'react';
import Product from './Product.js';
import axios from 'axios';

class Dashboard extends Component {
    constructor(){
        super()
        this.state={
            selfie:[],
        }

        this.deleteItem = this.deleteItem.bind(this)
    }

    componentDidMount() {
        axios.get('/api/selfie').then((res) => {
          this.setState({selfie: res.data})
        })
      } 
      
    deleteItem(id) {
        console.log(id)
        axios.delete(`/api/selfie/${id}`).then((res)=> {
            this.setState({selfie: res.data})
        })
    }

  render() {
    return (
        this.state.selfie.map((el,i) =>
      <div key={i + el} id='product'>
        <Product
            el={el}
            deleteItem={this.deleteItem}
            />
            {console.log(el)}
        </div>
      )
    );
  }
}

export default Dashboard;
