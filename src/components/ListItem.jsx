import { useState } from 'react';

const ListItem = ({item}) => {
    const [quantity, setQuantity] = useState(0);

    const handleChange = (e) => {
        setQuantity(e.target.value);
    };

    return (
        <div>
          <h1>{item.title}</h1>
          <img src={item.image} width='100'/>
          <p>${item.price}</p>
          <label htmlFor='quantity'>Quantity (max of 10):</label>
          <input name='quantity' type='number' value={quantity} min='0' max='10' onChange={handleChange}></input>
        </div>
    );
};

export default ListItem;