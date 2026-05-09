import App from './App';
import Home from './Home'
import CartPage from './CartPage';
import ProductsPage from './ProductsPage'
import ErrorPage from './ErrorPage';

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            { path: 'products', element: <ProductsPage /> },
            { path: 'cart', element: <CartPage /> },
        ],
    },
];

export default routes;