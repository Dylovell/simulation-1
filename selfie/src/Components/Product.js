import React from 'react';

 function Product(props) {
  return (
    <div id='submit'>
        <img id='image' src={props.el.imageurl} alt=''/>
        {props.el.item}
        {props.el.price}
        <button onClick={()=>props.deleteItem(props.el.id)}>Delete?</button>
        <hr/>
    </div>
  )
}

export default Product;
