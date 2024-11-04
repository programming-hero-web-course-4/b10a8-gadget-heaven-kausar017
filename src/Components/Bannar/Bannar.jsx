
import PropTypes from 'prop-types';
import image from '../../assets/banner.jpg'
import { Link } from 'react-router-dom';
const Bannar = () => {
    return (
        <div>
            <div className="bg-[#9538E2] h-[600px] rounded-b-xl border-b-4]">
                <div className=" text-center">
                    <div className="max-w-4xl mx-auto pt-5 text-white">
                        <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className="py-6">
                            Enhance your tech experience with Gadget Heaven's premium accessories. From stylish cases to high-performance chargers, we offer a wide range of products designed to elevate your devices.
                        </p>
                        <Link to={'/dashbord'} className="btn bg-white rounded-full btn-sm font-bold">Shop Now</Link>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <div className="card max-w-[1000px] shadow-2xl absolute">
                    <figure className="px-4 py-4 bg-white bg-opacity-20 rounded-xl">
                        <img
                            src={image}
                            alt="Shoes"
                            className="rounded-xl w-full object-cover max-h-[500px]" />
                    </figure>
                </div>
            </div>
        </div>
        // x
    );
};

Bannar.propTypes = {
Link:PropTypes.func
};

export default Bannar;