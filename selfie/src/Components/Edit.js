import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
  constructor(props){
    super(props)

    this.state={
      selfie:[],

    }
    
}

editItem(id) {
    console.log(id)
    axios.delete(`/api/selfie/${id}`).then((res)=> {
        this.setState({selfie: res.data})
    })
}

render() {
    return (
      <div >
        {/* {this.props.el.id} */}
      </div>
    );
  }
}

export default App;
