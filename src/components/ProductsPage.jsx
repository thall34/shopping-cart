import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router';
import ListItem from './ListItem';

const ProductsPage = () => {
    const { items, setItems, cart, setCart } = useOutletContext();

    const handleChange = (id, newQuantity) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: parseInt(newQuantity) || 0 } : item
            )
        );
    };

    const handleAddToCart = (product) => {
        if (product.quantity === 0) return;

        const existingItem = cart.find(item => item.id === product.id);

        if (existingItem) {
            setCart(cart.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
            ));
        } else {
            setCart([...cart, product]);
        };
    };

    return (
        <div>
            {items.map((item) => (
                <ListItem key={item.id} item={item} buttonText='Add To Cart' onChange={handleChange} onClick={handleAddToCart} />
            ))}
        </div>
    );
};

export default ProductsPage;