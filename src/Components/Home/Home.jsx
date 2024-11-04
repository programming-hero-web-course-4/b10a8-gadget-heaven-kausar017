
import PropTypes from 'prop-types';
import Bannar from '../Bannar/Bannar';
import GadgetCard from '../GadgetCard/GadgetCard';
import { useLoaderData } from 'react-router-dom';
const Home = () => {

    const products = useLoaderData()
    // console.log(products);
    

    return (
        <div>
            {/* Bannar section */}
            <section className='mb-[320px]'>
                <Bannar></Bannar>
            </section>
            <section>
                {/* gadget card section */}
                <GadgetCard products={products}  />
            </section>
            <section>

            </section>
        </div>
    );
};

Home.propTypes = {

};

export default Home;