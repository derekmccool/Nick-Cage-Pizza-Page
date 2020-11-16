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
        document.getElementById("thanks-wrapper").style.display = "block";
        props.checkOut();
        setTotal(0);
        setTimeout(() => {
            document.getElementById("thanks-wrapper").style.display = "none";
        }, 3000);
    }
    if(total){
        return (
            <div className="content-wrapper">

                <table className="cart-table">
                    {props.cartItems.map((item,i )=> {
                        return(
                            <tr
                            key={i}
                            >
                                <td className="name-col">{item.name}</td>
                                <td className="price-col">{'$' + item.price}</td>
                            </tr>
                                
                            
                        )
                    })}
                    <tr className="total">
                        <td className="name-col">Total</td>
                        <td className="price-col">{'$' + (total * TAX).toFixed(2)}</td>
                    </tr>

                </table>
                <button onClick={handleCheckout}>Checkout</button>

            </div>
 
        );
    }else{
        return (
            <div className="content-wrapper">
                Your cart is empty
            </div>
        )
    }

};

export default Cart;