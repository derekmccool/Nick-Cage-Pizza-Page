import React, {useState} from 'react';
import MovieDetails from './MovieDetails';
const Specials = props => {



    
    const handleClick = event =>{
        event.preventDefault();
        props.addToCart(specials.find(({id}) => id == event.target.value));
    }


    const specials = [
        {
            id: 1,
            name: 'The Face Off',
            items: [

                {
                    descr: 'Large Pizza - half pineapple, half ham',
                    qty: 1

                },

                {
                    descr: 'Large Pizza - half ham, half pineapple',
                    qty: 1

                }
            ],
            movie: 'Face/Off',
            price: 22.00
        },
        {
            id: 2,
            name: 'In-Flight Meal',
            items: [

                {
                    descr: 'Luau Long Sandwich',
                    qty: 2

                },

                {
                    descr: 'Pepsi Crystal',
                    qty: 1

                },
                {
                    descr: 'Bag of peanuts',
                    qty: 1

                }
            ],
            movie: 'Con Air',
            price: 12.99
        },
        {
            id: 3,
            name: 'Leaving Sauce Vegas',
            items: [

                {
                    descr: 'Large Pizza(No Sauce)',
                    qty: 1

                },

                {
                    descr: 'Pepsi Crystal',
                    qty: 2

                }

            ],
            movie: 'Leaving Las Vegas',
            price: 4.99
        },
        {
            id: 4,
            name: 'BreadStick Men',
            items: [
                {
                    descr: 'Breadsticks',
                    qty: 1

                },
                {
                    descr: 'Can of tune',
                    qty: 3

                }
            ],
            movie: 'Matchstick Men',
            price: 9.99
    
        },

        {
            id: 5,
            name: 'The Bees In My Eyes',
            items: [
                {
                    descr: 'Jar of Live Bees',
                    qty: 1
    
                },
                {
                    descr: 'Visine',
                    qty: 1
    
                }
            ],
            movie: 'The Wicker Man&y=2006',
            price: 9.99
    
        },
    
    
    ]
    return (
        <div>
            <h1>Specials</h1>
            <div 
                className="menu-wrapper"
            >
                {specials.map(item => {
                    return(
                        <div
                            className="menu-item" 
                            key={item.id}
                        >
                        <h2>{item.name}</h2>
                        <p>{item.descr}</p>
                        <button className="add-to-cart-btn" onClick={handleClick} value={item.id}>Add</button>
                        <MovieDetails movieTitle={item.movie} />
                    </div>
                    )
    
                })}
            </div>
        </div>
    );
};

export default Specials;