
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { RxCross2, RxMixerVertical } from 'react-icons/rx';
import { getAllProduct, removdProduct } from '../../Utiles';
import { useLocation } from 'react-router-dom';

const Cart = () => {

    const { pathname } = useLocation();


    const [addProduct, setAddProduct] = useState([]);
    console.log(addProduct);

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


    return (

        <>

            <div className='md:flex items-center justify-between px-3 py-10'>
                <div>
                    <h2 className='text-2xl font-bold'>Card</h2>
                </div>
                <div className='md:flex max-sm:text-center items-center space-x-6'>
                    <h1 className='text-xl font-bold'>Total cost: ${totalCost}</h1>
                    <div className='space-x-3'>
                        <button className='btn btn-outline bg-transparent text-[#9538E2] rounded-full text-lg' >Sort by Price <RxMixerVertical></RxMixerVertical> </button>
                        <button className='btn bg-[#9538E2] text-white rounded-full text-lg'>Purchase</button>
                    </div>
                </div>
            </div>

            <div className='my-10 space-y-5 p-2 relative'>
                {
                    addProduct.map((add, index) =>
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
                                    pathname === '/dashbord' && <div><RxCross2></RxCross2> </div>
                                }
                            </div>
                        </div>)
                }

            </div>

        </>

    );
};

Cart.propTypes = {

};

export default Cart;