import PropTypes from 'prop-types';
import { RxMixerVertical } from 'react-icons/rx';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import './Dashbord.css'

const DashBord = () => {

    // const { pathname } = useLocation();

    return (
        <>
            <div className='bg-[#9538E2] text-white text-center space-y-5 py-10'>
                <h1 className='text-5xl font-bold'>Dashboard</h1>
                <p className='text-lg px-1'>The dashboard is a crucial component of the gadget project. <br /> It serves as a management hub for users to access information,    statistics, and trend analysis of various gadgets. </p>

                <div className='space-x-3'>
                    <NavLink to={'cart'} className='btn bg-transparent px-10 text-white rounded-full'>Cart</NavLink>

                    <NavLink to={'wislist'} className='btn bg-transparent px-8 text-white rounded-full'>Wishlist</NavLink>
                </div>

            </div>

            <Outlet></Outlet>
        </>
    );
}; RxMixerVertical
DashBord.propTypes = {

};

export default DashBord;