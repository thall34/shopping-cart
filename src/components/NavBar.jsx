import { Link } from 'react-router';
import PropTypes from 'prop-types';

const NavBar = ({ cartTotal }) => {
    const cartQuantity = () => {
        let total = 0;

        if (cartTotal.length !== 0) {
            cartTotal.forEach((item) => {
                let quantity = item.quantity;
                total = total + quantity;
            });
        };

        return total;
    };

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/products'>Products</Link>
                    </li>
                    <li>
                        <Link to='/cart'>Cart ({cartQuantity()})</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

NavBar.propTypes = {
    cartTotal: PropTypes.array,
};

export default NavBar