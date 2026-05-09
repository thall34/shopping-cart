import NavBar from './NavBar';
import { Outlet } from 'react-router';

const App = () => {
    return (
        <div>
            <NavBar cartTotal={[]} />
            <Outlet />
        </div>
    );
};

export default App