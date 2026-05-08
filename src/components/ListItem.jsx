import { useState } from 'react';

const ListItem = ({ item, onChange, addToCart }) => {
    return (
        <div>
          <h1>{item.title}</h1>
          <img src={item.image} width='100'/>
          <p>${item.price}</p>
          <label htmlFor='quantity'>Quantity:</label>
          <input name='quantity' type='number' value={item.quantity} min='0' onChange={(e) => onChange(item.id, e.target.value)}></input>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
    );
};

export default ListItem;