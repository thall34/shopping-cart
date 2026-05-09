import { Link } from 'react-router';

const NavBar = ({ cartTotal }) => {
    const cartQuantity = () => {
        let total = 0;

        if (cartTotal.length !== 0) {
            cartTotal.forEach((item) => {
                let quantity = item.quantity;
                total = total + quantity;
            });
        };

        return total
    };

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/shop/products'>Products</Link>
                    </li>
                    <li>
                        <Link to='/shop/cart'>Cart ({ cartQuantity() })</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar