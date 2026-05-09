import { useState } from 'react';
import { useOutletContext } from 'react-router';
import ListItem from './ListItem'

const CartPage = () => {
    const { cart, setCart } = useOutletContext();

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

    if (cart.length !== 0) {
    return (
        <div>
            {cart.map((item) => (
                <ListItem key={item.id} item={item} buttonText='Remove From Cart' onChange={handleChange} onClick={handleRemoveFromCart} />
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