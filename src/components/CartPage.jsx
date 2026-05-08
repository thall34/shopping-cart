import { useState } from 'react';
import { useOutletContext } from 'react-router';
import ListItem from './ListItem'

const CartPage = () => {
    const { cart, setCart } = useOutletContext();

    if (cart.length !== 0) {
    return (
        <div>
            {cart.map((item) => (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <img src={item.image} width='100' />
                    <p>${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                </div>
            ))}
        </div>
    );
} else {
    return (
        <h1>Your cart is empty!</h1>
    )
}
};

export default CartPage;