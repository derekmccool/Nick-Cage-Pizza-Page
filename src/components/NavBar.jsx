import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Menu from './Menu';
import Specials from './Specials';
import Cart from './Cart';

const NavBar = props => {
    const [cartItems, setCart] = useState([]);
  
  
    const addToCart = event => {
        let cartItem = {
            id: event.id,
            name: event.name,
            price: event.price
        }
        setCart([
            ...cartItems,
            cartItem
        ])
    }
  
    const checkOut = event => {
        setCart([]);
    }
  
  
 
    return (
        <Router>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/specials">Specials</Link>
                    <Link to="/cart">Cart({(cartItems.length > 0 ) ? cartItems.length : 0 })</Link>
                </nav>
            <Switch>
              <Route path="/menu">
                  <Menu addToCart={addToCart}/>
              </Route>
              <Route path="/specials">
                  <Specials addToCart={addToCart}/>
              </Route>
              <Route path="/cart">
                  <Cart cartItems={cartItems} checkOut={checkOut}/>
              </Route>
              <Route exact path="/">
                  <h1>Home Cage</h1>
              </Route>
          </Switch>
        </Router>
 



    );
};

export default NavBar;