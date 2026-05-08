import { useState, useEffect } from 'react';
import { Outlet } from 'react-router';
import NavBar from './NavBar';
import ListItem from './ListItem';

const ShopPage = () => {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);

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

    return (
    <div>
        <NavBar />
        <Outlet context={{ items, setItems, cart, setCart }}/>
    </div>
  );
};

export default ShopPage;