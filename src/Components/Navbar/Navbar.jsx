import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const location = useLocation();


    const [bgColor, setBgColor] = useState('#9538E2');
    const [textColor, setTextColor] = useState('text-white');

    useEffect(() => {
        if (location.pathname === '/') {
            setBgColor('#9538E2');
            setTextColor('text-white');
        } else if (location.pathname === '/statiks' || location.pathname === '/dashbord' || location.pathname.startsWith('/viewDital') ||
            location.pathname === ('cart') || location.pathname) {
            setBgColor('#F2F2F2');
            setTextColor('text-black');
        } else {
            setBgColor('#9538E2');
            setTextColor('text-white');
        }
    }, [location]);

    return (
        <div className='container mx-auto pt-3'>
            <div className={`navbar rounded-t-xl px-10`} style={{ backgroundColor: bgColor }}>
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

                <div className="navbar-end text-lg flex">

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <circle cx="12" cy="12" r="12" fill="white" />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>

                                <span className="badge badge-sm indicator-item">0</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 24 24"
                                >

                                    <circle cx="12" cy="12" r="12" fill="white" />


                                    <path
                                        fill="black"
                                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                                    />
                                </svg>


                                <span className="badge badge-sm indicator-item">0</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;




