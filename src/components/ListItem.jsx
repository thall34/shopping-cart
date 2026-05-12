import PropTypes from 'prop-types';

const ListItem = ({ item, buttonText, onChange, cartButton, increaseButton, decreaseButton, styling }) => {
    return (
        <div className={styling}>
            <img src={item.image} className='list-item-image' />
            <h1>{item.title}</h1>
            <p>${item.price.toFixed(2)}</p>
            <p>Quantity:</p>
            <div>
                <button className='decrease' onClick={() => decreaseButton(item.id)}>-</button>
                <input name='quantity' type='text' inputmode='numeric' pattern='[0-9]*' value={item.quantity} onChange={(e) => onChange(item.id, e.target.value)}></input>
                <button className='increase' onClick={() => increaseButton(item.id)}>+</button>
            </div>
            <button className='submit' onClick={() => cartButton(item)}>{buttonText}</button>
        </div>
    );
};

ListItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    buttonText: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
};

export default ListItem;