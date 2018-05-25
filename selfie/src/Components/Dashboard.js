import React, { Component } from 'react';
import axios from 'axios';
import Product from './Product.js';
import Edit from './Edit.js';

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
    editItem(id) {
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
            editItem={this.editItem}
            />
            {console.log(el)}
        </div>
      )
    );
  }
}

export default Dashboard;
