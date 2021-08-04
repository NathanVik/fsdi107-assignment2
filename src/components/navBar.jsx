import React, { Component } from 'react'; // "imrc"
import "./navBar.css";

class NavBar extends Component {  //class component "cc"
    state = {  }
    render() { 
        return ( //wrapper that isn't reflected on html
            <React.Fragment> 
            <nav>
                <h4 className="nav-title">Vik's Vittles</h4>
                <ul className="menu-items">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>

            </React.Fragment>
         );
    }
}
 
export default NavBar;