
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './GadgetCard.css'
import { useEffect, useState } from 'react';
import { data } from 'autoprefixer';
const GadgetCard = (products) => {
    const product = products.products;


    return (
        <>
            <div>
                <h1 className='text-center text-4xl font-bold mb-5'>Explore Cutting-Edge Gadgets</h1>
            </div>

            <div className="shadow-lg md:hidden">
                <figure className="px-4 py-4 gap-3 flex flex-wrap">

                    <NavLink to={'/'} className='btn btn-sm shadow-xl rounded-full '>All Product</NavLink>
                    <NavLink to={'/to'} className='btn btn-sm shadow-xl rounded-full'>Laptops</NavLink>
                    <NavLink to={'/to'} className='btn btn-sm shadow-xl rounded-full w-[120px]'>Phones</NavLink>
                    <NavLink to={'/to'} className='btn btn-sm shadow-xl rounded-full w-[120px]'>Accessories</NavLink>
                    <NavLink to={'/to'} className='btn btn-sm shadow-xl rounded-full w-[130px]'>Smart Watches</NavLink>
                    <NavLink to={'/to'} className='btn btn-sm shadow-xl rounded-full w-[120px]'>MacBook</NavLink>
                    <NavLink to={'/to'} className='btn btn-sm shadow-xl rounded-full w-[120px]'>Iphone</NavLink>
                </figure>
            </div>
            <div className='grid md:grid-cols-12 gap-5 justify-center p-3'>
                <div className='col-span-2'>
                    <div className="card bg-base-100 rounded-md shadow-xl hidden md:block ">
                        <figure className="px-4 py-4 flex flex-col max-md:flex-row gap-3">

                            <NavLink to={'/'} className='btn btn-sm rounded-full w-[120px]'>All Product</NavLink>
                            <NavLink to={'/to'} className='btn btn-sm rounded-full w-[120px]'>Laptops</NavLink>
                            <NavLink to={'/to'} className='btn btn-sm rounded-full w-[120px]'>Phones</NavLink>
                            <NavLink to={'/to'} className='btn btn-sm rounded-full w-[120px]'>Accessories</NavLink>
                            <NavLink to={'/to'} className='btn btn-sm rounded-full w-[130px]'>Smart Watches</NavLink>
                            <NavLink to={'/to'} className='btn btn-sm rounded-full w-[120px]'>MacBook</NavLink>
                            <NavLink to={'/to'} className='btn btn-sm rounded-full w-[120px]'>Iphone</NavLink>
                        </figure>
                    </div>
                </div>
                <div className='col-span-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                    {
                        product.map((items, index) =>
                            <div key={index}>
                                <div className="card-compact border-2 rounded-xl shadow-2xl transition hover:scale-105 overflow-hidden">
                                    <figure className='m-3'>
                                        <img
                                            className='w-full h-[300px] object-cover rounded-xl'
                                            src={items.product_image}
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{items.product_title}</h2>
                                        <p>Price: {items.price}</p>
                                        <div className="card-actions">
                                            <button className="btn rounded-full btn-outline text-[#9538E2]">View Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
};

GadgetCard.propTypes = {

};

export default GadgetCard;