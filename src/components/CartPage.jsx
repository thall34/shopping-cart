import { useState } from 'react';
import { useOutletContext } from 'react-router';
import ListItem from './ListItem';

const CartPage = () => {
    const { cart, setCart } = useOutletContext();

    const totalPrice = () => {
        let total = 0;

        cart.forEach((item) => {
            total = total + (item.quantity * item.price);
        });

        return total;
    };

    const handleChange = (id, newQuantity) => {
        setCart(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: parseInt(newQuantity) || 0 } : item
            )
        );
    };

    const handleRemoveFromCart = (product) => {
        const filteredCart = cart.filter(item => item.id !== product.id);
        setCart(filteredCart);
    };

    const handleIncrease = (id) => {
        setCart(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const handleDecrease = (id) => {
        setCart(prevItems =>
            prevItems.map(item =>
                item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };

    if (cart.length !== 0) {
        return (
            <div className='cart-list'>
                {cart.map((item) => (
                    <ListItem key={item.id} item={item} buttonText='Remove From Cart' onChange={handleChange} cartButton={handleRemoveFromCart} increaseButton={handleIncrease} decreaseButton={handleDecrease} styling='item cart' />
                ))}
                <p>Your total is ${totalPrice().toFixed(2)}</p>
            </div>
        );
    } else {
        return (
            <div className='cart-list'>
                <h1>Your cart is empty!</h1>
            </div>
        )
    }
};

export default CartPage;