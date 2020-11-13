import React from 'react';

const Menu = props => {

    const handleClick = event =>{
        event.preventDefault();
        props.addToCart(menuItems.find(({id}) => id == event.target.value));
    }

    const menuItems = [
        {
            id: 1,
            name: 'Hawaiian Pizza',
            descr: 'Large Ham + Pineapple Pizza',
            img: 'hawaiian-pizza.jpg',
            price: 12.99,
            category: 'food'
        },
        {
            id: 2,
            name: 'Breadsticks',
            descr: 'Sticks Of Bread, 12 Of Them',
            img: 'breadsticks.jpg',
            price: 4.99,
            category: 'food'
        },
        {
            id: 3,
            name: 'Luau Long Sandwich',
            descr: 'Hawaiian Hotdog topped pineapple and jalapenos',
            img: 'long-sandwich.jpg',
            price: 4.99,
            category: 'food'
        },
        {
            id: 4,
            name: 'Crystal Pepsi',
            descr: 'Pepsi, but clear',
            img: 'crystal-pepsi.jpg',
            price: 1.99,
            category: 'beverage'
        },
        {
            id: 5,
            name: 'Surge',
            descr: 'Bold Citrus Soda',
            img: 'surge.jpg',
            price: 1.99,
            category: 'beverage'
        },
        {
            id: 6,
            name: 'Mondo Squeezers',
            descr: 'Squeezable Drink 6pack',
            img: 'mondo.png',
            price: 1.99,
            category: 'beverage'
        },

        {
            id: 7,
            name: 'Jar Of Live Bees',
            descr: 'They will get in your eyes',
            img: 'bees.jpg',
            price: 10.99,
            category: '!?!?!?'
        },

    ]
    return (
        <div>
            <h1>Menu</h1>
            <h2>Food</h2>
            <div className="menu-wrapper">
                {menuItems.filter(({category}) => category == 'food').map(item => {
                    return(
                        <div
                            className="menu-item" 
                            key={item.id}
                        >
                        <h2>{item.name}</h2>
                        <p>{item.descr}</p>
                        <img className="menu-item-img" src={item.img}></img>
                        <p>{item.price}</p>
                        <button className="add-to-cart-btn" onClick={handleClick} value={item.id}>Add</button>

                    </div>
                    )
    
                })}
            </div>
            <h2>Beverages</h2>
            <div 
                className="menu-wrapper"
            >
                
                {menuItems.filter(({category}) => category == 'beverage').map(item => {
                    return(
                        <div
                            className="menu-item" 
                            key={item.id}
                        >
                        <h2>{item.name}</h2>
                        <p>{item.descr}</p>
                        <img className="menu-item-img" src={item.img}></img>
                        <p>{item.price}</p>
                        <button className="add-to-cart-btn" onClick={handleClick} value={item.id}>Add</button>

                    </div>
                    )
    
                })}
            </div>
                <h2>!?!?!?!?</h2>
            <div 
                className="menu-wrapper"
            >
                
                {menuItems.filter(({category}) => category == '!?!?!?').map(item => {
                    return(
                        <div
                            className="menu-item" 
                            key={item.id}
                        >
                        <h2>{item.name}</h2>
                        <p>{item.descr}</p>
                        <img className="menu-item-img" src={item.img}></img>
                        <p>{item.price}</p>
                        <button className="add-to-cart-btn" onClick={handleClick} value={item.id}>Add</button>

                    </div>
                    )
    
                })}
            </div>
     
        </div>
    );
};

export default Menu;