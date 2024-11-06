
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { getAddHard, removedHard } from '../../Utiles/wislis';
import { RxCross2 } from 'react-icons/rx';


const Wislist = () => {



    const [addHard, setAddHard] = useState([]);
    useEffect(() => {
        const addingProduts = getAddHard();
        setAddHard(addingProduts)
    }, [])

    const handleRemoved = (id) => {
        removedHard(id);
        const updatedProducts = getAddHard();
        setAddHard(updatedProducts);
    };




    return (
        <div>
            <div className='md:flex items-center justify-between px-3 py-10'>
                <div>
                    <h2 className='text-2xl font-bold'>WishList</h2>
                </div>
            </div>

            <div className='my-10 space-y-5 p-2 relative'>
                {
                    addHard.map((add, index) =>
                        <div key={index} className='md:flex items-center gap-4 bg-white p-5 rounded-xl'>
                            <div>
                                <img className='max-w-[200px] rounded-xl' src={add.product_image} alt="" />
                            </div>
                            <div>
                                <h1 className='text-xl font-bold '>{add.product_title}</h1>
                                <p className='text-gray-400'>{add.description}</p>
                                <h4 className='font-bold'>Price: ${add.price}</h4>
                                <button className='btn btn-sm bg-[#9538E2] text-white'>Add to Card</button>
                            </div>

                            <div onClick={() => handleRemoved(add.product_id)} className='absolute lg:right-20 md:right-5 bg-white text-red-600 border-2 p-2 rounded-full cursor-pointer'>
                                <RxCross2 />
                            </div>

                        </div>)
                }

            </div>


        </div>
    );
};

Wislist.propTypes = {

};

export default Wislist;