import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import { GiSelfLove } from 'react-icons/gi';
import { TiShoppingCart } from 'react-icons/ti';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const location = useLocation();
    const [bgColor, setBgColor] = useState('#9538E2');
    const [textColor, setTextColor] = useState('text-white');

    useEffect(() => {
        if (location.pathname === '/') {
            setBgColor('#9538E2');
            setTextColor('text-white');
        } else if (location.pathname === '/statiks' || location.pathname === '/dashbord' || location.pathname.startsWith('/viewDital')) {
            setBgColor('#F2F2F2');
            setTextColor('text-black');
        } else {
            setBgColor('#9538E2');
            setTextColor('text-white');
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
                            <li><NavLink to={'/dashbord'}>Dashboard</NavLink></li>
                        </ul>
                    </div>
                    <Link to={'/'} className={`text-xl font-bold ${textColor}`}>Gadget Heaven</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-10 text-md font-bold">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/statiks'}>Statistics</NavLink></li>
                        <li><NavLink to={'/dashbord'}>Dashboard</NavLink></li>
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

export default Navbar;
