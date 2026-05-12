import shop1 from '../assets/shop1.jpg';
import shop2 from '../assets/shop2.jpg';

const Home = () => {
    return (
        <div className='home'>
                <img src={shop1} alt='someone using a bank card to pay for something' className='home-image' />
                <img src={shop2} alt='a nice clean clothing store' className='home-image' />
        </div>
    );
};

export default Home;