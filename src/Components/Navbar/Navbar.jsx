import PropTypes from 'prop-types';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import { GiSelfLove } from 'react-icons/gi';
import { TiShoppingCart } from 'react-icons/ti';
import { useEffect, useState } from 'react';

const Navbar = props => {
    const location = useLocation();
    const [bgColor, setBgColor] = useState('#9538E2');

    useEffect(() => {
        // Change background color based on the current path
        if (location.pathname === '/') {
            setBgColor('#9538E2'); // Home
        } else if (location.pathname === '/statiks') {
            setBgColor('white'); // Statistics
        } else if (location.pathname === '/dashbord') {
            setBgColor('white'); // Statistics
        }
        else {
            setBgColor('#9538E2'); // Default color for other routes
        }
    }, [location]);

    return (
        <div className='container mx-auto pt-3'>
            <div className={`navbar rounded-t-xl`} style={{ backgroundColor: bgColor }}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-30 p-2 shadow">
                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to={'/statiks'}>Statistics</NavLink></li>
                            <li> <NavLink to={'/dashbord'}>Dashboard</NavLink></li>
                        </ul>
                    </div>
                    <Link to={'/'} className='text-xl font-bold text-white'>Gadget Heaven</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-10 text-md font-bold">
                        <li> <NavLink to={'/'}>Home</NavLink></li>
                        <li> <NavLink to={'/statiks'}>Statistics</NavLink></li>
                        <li> <NavLink to={'/dashbord'}>Dashboard</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end text-lg flex gap-3">
                    <a className="bg-white p-1 rounded-full cursor-pointer"><TiShoppingCart /> </a>
                    <a className="bg-white p-1 rounded-full cursor-pointer"><GiSelfLove></GiSelfLove> </a>
                </div>
            </div>
        </div>
    );
};

Navbar.propTypes = {};

export default Navbar;
