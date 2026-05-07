import HomePage from './HomePage';
import ShopPage from './ShopPage';
import CartPage from './CartPage';
import ErrorPage from './ErrorPage';

const routes = [
    {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/shop',
        element: <ShopPage />,
    },
    {
        path: '/cart',
        element: <CartPage />,
    },
];

export default routes;