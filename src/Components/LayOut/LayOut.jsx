
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
const LayOut = () => {
    return (
        <div className='bg-base-200 font-Family'>
            <Toaster></Toaster>
            {/* Navbar */}
            <Navbar></Navbar>
            {/* Outline */}
            <div className='min-h-[calc(100vh-232px)] container mx-auto'>
                <Outlet></Outlet>
            </div>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

LayOut.propTypes = {

};

export default LayOut;