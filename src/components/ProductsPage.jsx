import { useState, useEffect } from 'react';
import { useOutlet, useOutletContext } from 'react-router';
import ListItem from './ListItem'

const ProductsPage = () => {
    // const [items, setItems] = useState([]);
    const { items, setItems, cart, setCart } = useOutletContext();
    // const [cart, setCart] = useOutletContext();

    useEffect(() => {
        const fetchItems = async (count) => {
            const results = [];

            try {
                for (let id = 1; id <= count; id++) {
                    const response = await fetch(`https://fakestoreapi.com/products/${id}`);

                    const item = await response.json();
                    item.quantity = 0;
                    results.push(item);

                };
                setItems(results);

            } catch (error) {
                console.error('Error fetching items:', error);
            };
        };
        // change the default count as needed
        fetchItems(5);
    }, []);

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
                <ListItem key={item.id} item={item} onChange={handleChange} addToCart={handleAddToCart} />
            ))}
        </div>
    );
};

export default ProductsPage;