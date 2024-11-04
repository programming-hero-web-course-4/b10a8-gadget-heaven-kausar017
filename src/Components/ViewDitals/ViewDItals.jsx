import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewDItals = () => {

    const { product_id } = useParams();
    const allProductData = useLoaderData();

    // Default value with an empty array for Specification
    const [productData, setproductData] = useState({
        Specification: []
    });

    // Destructuring properties from productData
    const { product_title, product_image, category, price, description, Specification, rating, availability } = productData;

    // Fetch the product data based on product_id
    useEffect(() => {
        const singleData = allProductData.find(product => product.product_id == product_id);
        setproductData(singleData || {}); // If singleData is undefined, set an empty object
    }, [product_id, allProductData]);

    return (
        <div className='my-10'>
            {/* Product details header */}
            <div className='min-h-[370px] rounded-xl bg-[#9538E2] text-center text-white space-y-6 pt-3'>
                <h1 className='text-4xl font-bold'>Product Details</h1>
                <p className='max-w-[800px] mx-auto text-lg'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>

            {/* Product information */}
            <div className='relative flex flex-col justify-center items-center -top-[200px]'>
                <div className='card flex md:flex-row gap-10 border-2 p-3 bg-white max-w-[800px]'>
                    <figure>
                        <img className='max-w-[425px] h-full object-cover rounded-xl' src={product_image} alt={product_title} />
                    </figure>
                    <div>
                        <h1 className='text-2xl font-bold'>{product_title}</h1>
                        <p className='text-lg'>Price: ${price}</p>
                        <button className='btn btn-sm btn-outline rounded-full bg-[#309C34]'>
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
                            <h3>{rating}</h3>
                        </div>
                        <div>
                            <button></button>
                            <button></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ViewDItals.propTypes = {
    allProductData: PropTypes.array
};

export default ViewDItals;
