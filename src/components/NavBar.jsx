import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Menu from './Menu';
import Specials from './Specials';
import Cart from './Cart';

const NavBar = props => {
    const [cartItems, setCart] = useState([]);
    const [cartMsg, setCartMsg] = useState("");

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
        setCartMsg(cartItem.name + " added to cart.");
        document.getElementById("cart-msg").style.display = "hidden";

        setTimeout(() => {
            setCartMsg("");
            document.getElementById("cart-msg").style.display = "block";
        }, 2000);
    }
  
    const checkOut = event => {
        setCart([]);
    }
  
  
 
    return (
        <Router>
                <div className="page-title">
                    <h2>The Nick Cage Pizza Page</h2>
                </div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/specials">Specials</Link>
                    <Link to="/cart">Cart({(cartItems.length > 0 ) ? cartItems.length : 0 })</Link>
                </nav>
                <div className="msg-wrapper">
                    <h2 id="cart-msg">{cartMsg}</h2>
                </div>
            
            <Switch>
              <Route path="/menu">
                  <Menu addToCart={addToCart}/>
              </Route>
              <Route path="/specials">
                  <Specials addToCart={addToCart}/>
              </Route>
              <Route path="/cart">
                  <Cart cartItems={cartItems} checkOut={checkOut}/>
                  <div id="thanks-wrapper">
                    <img id="thanks" src="thanks.gif" alt="thanks.gif"/>
                    <h3>Enjoy</h3>
                 </div>  
              </Route>
              <Route exact path="/">
                  <div className="content-wrapper">
                    <h1>Home Cage</h1>
                    <div>
                        <img src="cage-dancing.gif" alt="cage-dancing.gif"/>
                    </div>
                  </div>
              </Route>
          </Switch>
        </Router>
 



    );
};

export default NavBar;