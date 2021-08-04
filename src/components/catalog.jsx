import React, { Component } from 'react';
import "./catalog.css"
import Item from './item';
class Catalog extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="catalog">
            
            <h3>Here's my catalogue</h3>
            <div className="itemList">
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            </div>


        </div>
        );
    }
}
 
export default Catalog;


