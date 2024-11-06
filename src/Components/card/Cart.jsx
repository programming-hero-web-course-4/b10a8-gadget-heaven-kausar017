import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getAllProduct, removdProduct } from '../../Utiles';
import { RxCross2, RxMixerVertical } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FcApproval } from 'react-icons/fc';

const Cart = (props) => {
    const [addProduct, setAddProduct] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [isPurchaseDisabled, setIsPurchaseDisabled] = useState(false); // Disabled state for the button
    const navigate = useNavigate();

    useEffect(() => {
        const addingProduts = getAllProduct();
        setAddProduct(addingProduts);
    }, []);

    const totalCost = addProduct.reduce((total, product) => total + product.price, 0);

    const handalShort = () => {
        const sortinProduct = [...addProduct].sort((a, b) => b.price - a.price);
        setAddProduct(sortinProduct);
    };

    const handalRemoved = (id) => {
        removdProduct(id);
        const addingProduts = getAllProduct();
        setAddProduct(addingProduts);
    };

    const handlePurchaseClick = () => {
        if (addProduct.length === 0) {
            toast.error("No items in the cart to purchase!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else {
            setShowModal(true);
            setIsPurchaseDisabled(true); // Disable the purchase button
        }
    };

    const handleClose = () => {
        localStorage.clear();
        setShowModal(false);
        navigate('/');
    };

    return (
        <>
            <div className='md:flex items-center justify-between px-3 py-10'>
                <div>
                    <h2 className='text-2xl font-bold'>Cart</h2>
                </div>
                <div className='md:flex max-sm:text-center items-center space-x-6'>
                    <h1 className='text-xl font-bold'>Total cost: ${totalCost}</h1>
                    <div className='space-x-3'>
                        <button onClick={handalShort} className='btn btn-outline bg-transparent text-[#9538E2] rounded-full text-lg'>
                            Sort by Price <RxMixerVertical />
                        </button>
                        <button
                            onClick={handlePurchaseClick}
                            disabled={isPurchaseDisabled} // Disable condition
                            className={`btn ${isPurchaseDisabled ? 'bg-gray-400' : 'bg-[#9538E2]'} text-white rounded-full text-lg`}>
                            Purchase
                        </button>
                    </div>
                </div>
            </div>

            <div className='my-10 space-y-5 p-2 relative'>
                {
                addProduct.map((add, index) => (
                    <div key={index} className='md:flex items-center gap-4 bg-white p-5 rounded-xl'>
                        <div>
                            <img className='max-w-[200px] rounded-xl' src={add.product_image} alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>{add.product_title}</h1>
                            <p className='text-gray-400'>{add.description}</p>
                            <h4 className='font-bold'>Price: ${add.price}</h4>
                        </div>

                        <div onClick={() => handalRemoved(add.product_id)} className='absolute lg:right-20 md:right-5 bg-white text-red-600 border-2 p-2 rounded-full cursor-pointer'>
                            <RxCross2 />
                        </div>
                    </div>
                ))}
            </div>

            {/* Purchase Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-5 rounded-lg shadow-lg w-3/3 text-center">
                        <div>
                            <p className='flex justify-center items-center'><FcApproval size={50}></FcApproval></p>
                            <h2 className="text-2xl font-bold mb-4">Payment Successfully</h2>
                            <p>Thanks for purchasing.</p>
                            <p> Total: ${totalCost}</p>
                        </div>
                        <button onClick={handleClose} className="btn bg-[#9538E2] text-white rounded-full px-4 py-2">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

Cart.propTypes = {
    items: PropTypes.array,
};

export default Cart;
