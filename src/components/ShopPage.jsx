import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import ListItem from './ListItem';

const ShopPage = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
    const fetchItems = async (count) => {
      const results = [];

      try {
        for (let id = 1; id <= count; id++) {
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);

          const items = await response.json();
          results.push(items);
          
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
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ShopPage;