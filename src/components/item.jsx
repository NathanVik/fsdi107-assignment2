import React, { Component } from 'react';
import QuantityPicker from './quantityPicker';
import "./item.css";

class Item extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="itemFrame">
                <img src="https://picsum.photos/300/300" alt="product img" width="200"></img>
                <h5>Title for Item</h5>
                <p>Unit Price: {10}</p>
            <QuantityPicker></QuantityPicker>
            <p>Total Price: 10</p>
            <button className="btn btn-primary">Add to Cart <i className="fa fa-cart-plus"></i></button>
            </div>
         );
    }
}
 
export default Item;