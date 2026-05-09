import PropTypes from "prop-types";

const ListItem = ({ item, buttonText, onChange, onClick }) => {
    return (
        <div>
            <h1>{item.title}</h1>
            <img src={item.image} width='100' />
            <p>${item.price.toFixed(2)}</p>
            <p>Quantity:</p>
            <input name='quantity' type='number' value={item.quantity} min='0' onChange={(e) => onChange(item.id, e.target.value)}></input>
            <button onClick={() => onClick(item)}>{buttonText}</button>
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