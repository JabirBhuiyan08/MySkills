
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import Footer from '../footer/Footer';

const Main = () => {
    return (
        <div className='w-full bg-white min-h-screen'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;