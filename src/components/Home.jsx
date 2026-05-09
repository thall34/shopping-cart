import shop1 from '../assets/shop1.jpg';
import shop2 from '../assets/shop2.jpg';

const Home = () => {
    return (
        <div>
            <img src={shop1} alt='someone using a bank card to pay for something' width='500' height='350' />
            <img src={shop2} alt='a nice clean clothing store' width='500' height='350' />
        </div>
    );
};

export default Home;