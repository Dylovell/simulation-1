import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(){
        super()
        this.state={
            defaultImage:'DEFALTIMAGEURLHERE',
            imageUrlInput:'',
            itemNameInput:'',
            priceInput:0
        }

    }
    addButton(imageUrlInput,itemNameInput,priceInput) {
        let body = {
            imageurl: this.state.imageUrlInput,
            item: this.state.itemNameInput,
            price: this.state.priceInput,
          }
        axios.post(`/api/selfie`, body)
        .then((res)=>{
            this.setState({imageUrlInput:'',itemNameInput:'',priceInput:0})
        })
    
    }
    cancelButton(){
        this.setState({imageUrlInput:'',itemNameInput:'',priceInput:0})
    }

  render() {
    return (
      <div>
        
        <p>imageurl</p>
        <input value={this.state.imageUrlInput} onChange={e=>this.setState({imageUrlInput:e.target.value})}/>
        <p>itemName</p>
        <input value={this.state.itemNameInput} onChange={e=>this.setState({itemNameInput:e.target.value})}/>
        <p>price</p>
        <input value={this.state.priceInput} onChange={e=>this.setState({priceInput:e.target.value})}/>
        <button onClick={()=>this.addButton()}> Add</button>
        <button onClick={()=>this.cancelButton()}> Cancel</button>
      </div>
    );
  }
}

export default Form;
