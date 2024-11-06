import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { GiSelfLove, GiShoppingCart } from 'react-icons/gi';
import { useLoaderData, useParams } from 'react-router-dom';

import ReactStars from "react-rating-stars-component";
import React from "react";
import { addProduct } from '../../Utiles';
import { addHard } from '../../Utiles/wislis';


const ViewDItals = () => {

    // rating react icon
    const ratingChanged = ({ newRating }) => {
        console.log(newRating);
    };

    const { product_id } = useParams();

    const allProductData = useLoaderData();
    // console.log(allProductData);
    

    const [productData, setproductData] = useState({
        Specification: []
        
    });

    const { product_title, product_image, price, description, Specification, rating, availability } = productData;


    useEffect(() => {
        const singleData = allProductData.find(product => product.product_id == product_id);
        setproductData(singleData || {});
    }, [product_id, allProductData]);

    // handal product btn click 

    const handalProduct = (product) => {
        addProduct(product)

    };

    const handalHard= hard=> {
        addHard(hard)
    }

    return (
        <div className='mt-5'>
            {/* Product details header */}
            <div className='min-h-[400px] rounded-xl bg-[#9538E2] text-center text-white space-y-6 pt-3'>
                <h1 className='text-4xl font-bold'>Product Details</h1>
                <p className='mx-auto text-lg px-3'>Explore the latest gadgets that will take your experience to the next level. <br /> From smart devices to the coolest accessories, we have it all!</p>
            </div>

            {/* Product information */}

            <div className="shadow-xl bg-white max-w-[900px] gap-3 mx-auto rounded-xl relative -top-[200px] flex flex-row max-sm:flex-col">
                <figure className="px-5 py-5">
                    <img className='rounded-xl h-full w-[200px] mx-auto object-cover' src={product_image} alt={product_title} />
                </figure>
                <div className="px-5 py-3">
                    <h1 className='text-2xl font-bold'>{product_title}</h1>
                    <p className='text-lg'>Price: ${price}</p>
                    <button className='btn btn-sm rounded-full bg-[#309C081A]'>
                        {availability ? 'In Stock' : 'Not Available'}
                    </button>
                    <p className='mt-4'>{description}</p>

                    {/* Specification List */}
                    <div className='mt-3'>
                        <h2 className='text-xl font-semibold'>Specifications:</h2>
                        {
                            Specification && Specification.length > 0 ? (
                                <ul className='list-decimal pl-5'>
                                    {Specification.map((data, index) => (
                                        <li key={index} className='text-lg'>
                                            {data.feature}: {data.value}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className='text-gray-500'>No specifications available.</p>
                            )
                        }
                    </div>
                    <div>
                        <h5 className='text-xl font-semibold'>Ratig: </h5>
                        <div className='flex items-center gap-2'>
                            <h4>
                                <ReactStars
                                    count={5}
                                    onChange={ratingChanged}
                                    size={24}
                                    activeColor="#ffd700" />
                            </h4>
                            <h3>{rating}</h3>
                        </div>
                    </div>
                    <div className='space-x-2'>
                        <button onClick={() => handalProduct(productData)} className='btn btn-sm bg-[#9538E2] rounded-full outline-none text-white'>Add To Card <GiShoppingCart></GiShoppingCart> </button>
                        <button onClick={() => handalHard(productData)} className='btn btn-sm border-2 p-2 rounded-full shadow-xl'><GiSelfLove></GiSelfLove> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

ViewDItals.propTypes = {
    allProductData: PropTypes.array,
};

export default ViewDItals;
