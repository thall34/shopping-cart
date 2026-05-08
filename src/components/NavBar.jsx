import { Link } from 'react-router';

const NavBar = () => {
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
                        <Link to='/shop/cart'>Cart</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar