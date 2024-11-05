import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { RxCross2, RxMixerVertical } from 'react-icons/rx';
import { getAllProduct, removdProduct } from '../../Utiles';
import { useLocation } from 'react-router-dom';

const DashBord = () => {
    const { pathname } = useLocation();

    const [addProduct, setAddProduct] = useState([]);
    const [view, setView] = useState('cart'); // Toggle state for 'cart' and 'wishlist'

    useEffect(() => {
        const addingProduts = getAllProduct();
        setAddProduct(addingProduts)
    }, [])

    const totalCost = addProduct.reduce((total, product) => total + product.price, 0);

    const handalRemoved = (id) => {
        removdProduct(id)
        const addingProduts = getAllProduct();
        setAddProduct(addingProduts)
    }

    const handleViewToggle = (newView) => {
        setView(newView);
    };

    return (
        <>
            <div className='bg-[#9538E2] text-white text-center space-y-5 py-10'>
                <h1 className='text-5xl font-bold'>Dashboard</h1>
                <p className='text-lg px-1'>The dashboard is a crucial component of the gadget project. <br /> It serves as a management hub for users to access information, statistics, and trend analysis of various gadgets. </p>

                <div className='space-x-3'>
                    <button
                        className={`btn ${view === 'cart' ? 'bg-white text-[#9538E2]' : 'bg-transparent text-white'} px-10 rounded-full`}
                        onClick={() => handleViewToggle('cart')}
                    >
                        Cart
                    </button>
                    <button
                        className={`btn ${view === 'wishlist' ? 'bg-white text-[#9538E2]' : 'bg-transparent text-white'} px-10 rounded-full`}
                        onClick={() => handleViewToggle('wishlist')}
                    >
                        Wishlist
                    </button>
                </div>
            </div>

            <div className='md:flex items-center justify-between px-3 py-10'>
                <div>
                    <h2 className='text-2xl font-bold'>{view === 'cart' ? 'Cart' : 'Wishlist'}</h2>
                </div>
                <div className='md:flex max-sm:text-center items-center space-x-6'>
                    <h1 className='text-xl font-bold'>Total cost: ${totalCost}</h1>
                    <div className='space-x-3'>
                        <button className='btn btn-outline bg-transparent text-[#9538E2] rounded-full text-lg'>Sort by Price <RxMixerVertical /></button>
                        <button className='btn bg-[#9538E2] text-white rounded-full text-lg'>Purchase</button>
                    </div>
                </div>
            </div>

            <div className='my-10 space-y-5 p-2 relative'>
                {
                    addProduct
                        .filter((add) => (view === 'cart' ? add.inCart : add.inWishlist)) // Filtering based on view
                        .map((add, index) =>
                            <div key={index} className='md:flex items-center gap-4 bg-white p-5 rounded-xl'>
                                <div>
                                    <img className='max-w-[200px] rounded-xl' src={add.product_image} alt="" />
                                </div>
                                <div>
                                    <h1 className='text-xl font-bold '>{add.product_title}</h1>
                                    <p className='text-gray-400'>{add.description}</p>
                                    <h4 className='font-bold'>Price: ${add.price}</h4>
                                </div>

                                <div onClick={() => handalRemoved(add.product_id)} className='absolute lg:right-20 md:right-5 bg-white text-red-600 border-2 p-2 rounded-full cursor-pointer'>
                                    {
                                        pathname === '/dashbord' && <div><RxCross2 /></div>
                                    }
                                </div>
                            </div>
                        )
                }
            </div>
        </>
    );
};

DashBord.propTypes = {};

export default DashBord;
