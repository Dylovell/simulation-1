import React from 'react';
import {Link} from 'react-router-dom';
import Edit from './Edit.js';

 function Product(props) {
  return (
    <div id='submit'>
        <img id='image' src={props.el.imageurl} alt=''/>
        {props.el.item}
        {props.el.price}
        <Link to={`/item/${props.el.id}`} >
            <p>Edit?</p>
        </Link>
        <button onClick={()=>props.deleteItem(props.el.id)}>Delete?</button>
        <hr/>
    </div>
  )
}

export default Product;
