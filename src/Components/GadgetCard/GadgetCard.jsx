import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './GadgetCard.css';
import { useEffect, useState } from 'react';

const GadgetCard = ({ products }) => {
    const [category, setCategory] = useState('All');
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [activeButton, setActiveButton] = useState('All');

    useEffect(() => {
        if (category === 'All') {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter((product) => product.category === category);
            setFilteredProducts(filtered);
        }
    }, [category, products]);

    const handleButtonClick = (category) => {
        setCategory(category);
        setActiveButton(category);
    };

    return (
        <>
            <div>
                <h1 className='text-center text-4xl font-bold mb-5'>Explore Cutting-Edge Gadgets</h1>
            </div>

            <div className="shadow-lg md:hidden">
                <figure className="px-4 py-4 gap-3 flex flex-wrap">
                    <button onClick={() => handleButtonClick('All')} className={`btn btn-sm shadow-xl rounded-full  ${activeButton === 'All' ? 'text-white bg-[#9538E2]' : ''}`}>
                        All Product
                    </button>
                    <button onClick={() => handleButtonClick('Laptops')} className={`btn btn-sm shadow-xl rounded-full  w-[120px]${activeButton === 'Laptops' ? 'text-white bg-[#9538E2]' : ''}`}>
                        Laptops
                    </button>
                    <button onClick={() => handleButtonClick('Iphone')} className={`btn btn-sm shadow-xl rounded-full w-[120px] ${activeButton === 'Iphone' ? 'text-white bg-[#9538E2]' : ''}`}>
                        Phones
                    </button>
                    <button onClick={() => handleButtonClick('Accessories')} className={`btn btn-sm shadow-xl rounded-full w-[120px] ${activeButton === 'Accessories' ? 'text-white bg-[#9538E2]' : ''}`}>
                        Accessories
                    </button>
                    <button onClick={() => handleButtonClick('Smart Watches')} className={`btn btn-sm shadow-xl rounded-full  ${activeButton === 'Smart Watches' ? 'text-white bg-[#9538E2]' : ''}`}>
                        Smart Watches
                    </button>
                    <button onClick={() => handleButtonClick('MacBook')} className={`btn btn-sm shadow-xl rounded-full w-[120px] ${activeButton === 'MacBook' ? 'text-white bg-[#9538E2]' : ''}`}>
                        MacBook
                    </button>
                    <button onClick={() => handleButtonClick('Phones')} className={`btn btn-sm shadow-xl rounded-full w-[120px] ${activeButton === 'Phones' ? 'text-white bg-[#9538E2]' : ''}`}>
                        Iphone
                    </button>
                </figure>
            </div>

            <div className='grid md:grid-cols-12 gap-5 justify-center p-3'>
                <div className='col-span-2'>
                    <div className="card bg-base-100 rounded-md shadow-xl hidden md:block">
                        <figure className="px-4 py-4 flex flex-col max-md:flex-row gap-3">
                            <button onClick={() => handleButtonClick('All')} className={`btn btn-sm rounded-full  ${activeButton === 'All' ? 'text-white bg-[#9538E2]' : ''}`}>
                                All Product
                            </button>
                            <button onClick={() => handleButtonClick('Laptops')} className={`btn btn-sm rounded-full w-[120px] ${activeButton === 'Laptops' ? 'text-white bg-[#9538E2]' : ''}`}>
                                Laptops
                            </button>
                            <button onClick={() => handleButtonClick('Iphone')} className={`btn btn-sm rounded-full w-[120px] ${activeButton === 'Iphone' ? 'text-white bg-[#9538E2]' : ''}`}>
                                Phones
                            </button>
                            <button onClick={() => handleButtonClick('Accessories')} className={`btn btn-sm rounded-full w-[120px] ${activeButton === 'Accessories' ? 'text-white bg-[#9538E2]' : ''}`}>
                                Accessories
                            </button>
                            <button onClick={() => handleButtonClick('Smart Watches')} className={`btn btn-sm rounded-full w-[120px] ${activeButton === 'Smart Watches' ? 'text-white bg-[#9538E2]' : ''}`}>
                                Watches
                            </button>
                            <button onClick={() => handleButtonClick('MacBook')} className={`btn btn-sm rounded-full w-[120px] ${activeButton === 'MacBook' ? 'text-white bg-[#9538E2]' : ''}`}>
                                MacBook
                            </button>
                            <button onClick={() => handleButtonClick('Phones')} className={`btn btn-sm rounded-full w-[120px] ${activeButton === 'Phones' ? 'text-white bg-[#9538E2]' : ''}`}>
                                Iphone
                            </button>
                        </figure>
                    </div>
                </div>

                <div className='col-span-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-3'>
                    {
                        filteredProducts.length > 0 ? (
                            filteredProducts.map((item, index) => (
                                <div key={index}>
                                    <div className="card-compact border-2 rounded-xl shadow-2xl transition hover:scale-105 overflow-hidden">
                                        <figure className='m-3'>
                                            <img
                                                className='w-full h-[300px] object-cover rounded-xl'
                                                src={item.product_image}
                                                alt="Product" />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{item.product_title}</h2>
                                            <p className='text-lg font-semibold text-gray-400'>Price: ${item.price}</p>
                                            <div className="card-actions">
                                                <NavLink to={`./viewDital/${item.product_id}`}>
                                                    <button className="btn rounded-full btn-outline text-[#9538E2]">View Details</button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className='col-span-12 text-center text-5xl font-bold text-gray-500'>
                                No Data Found
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
};

GadgetCard.propTypes = {
    products: PropTypes.array.isRequired,
};

export default GadgetCard;
