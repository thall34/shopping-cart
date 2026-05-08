import App from './App';
import ShopPage from './ShopPage';
import CartPage from './CartPage';
import ProductsPage from './ProductsPage'
import ErrorPage from './ErrorPage';

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/shop',
        element: <ShopPage />,
        children: [
            { path: 'products', element: <ProductsPage /> },
            { path: 'cart', element: <CartPage /> },
        ],
    },
];

export default routes;