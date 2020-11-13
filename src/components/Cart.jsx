import React, { useState } from 'react';

const Cart = props => {
    const [total, setTotal] = useState(
        props.cartItems.reduce(function(prev, cur) {
            return prev + cur.price;
        }, 0)
    );
    
    const TAX = 1.08;
    
    
    console.log(props.cartItems);
    console.log(total);
    const handleCheckout = event => {
        props.checkOut();
        setTotal(0);
    }
    if(total){
        return (
            <ul>
                {props.cartItems.map((item,i )=> {
                    return(
                        <li
                            key={i}
                        
                        >
                            <p>{item.name}</p><p>{'$' + item.price}</p>
                        </li>
                        
                        )
                })}
                <li>{'Total: $' + (total * TAX).toFixed(2)}</li>
                <button onClick={handleCheckout}>Checkout</button>
            </ul>
        );
    }else{
        return (
            <div>
                Your cart is empty
            </div>
        )
    }

};

export default Cart;